import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {WineService} from "../../../core/services/wine.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Wine} from "../../../core/models/wine.model";
import {TranslateModule} from "@ngx-translate/core";
import {LanguageClassDirective} from "../../../shared/directives/language-class.directive";
import {LoadingComponent} from "../../../shared/components/loading/loading.component";

@Component({
  selector: 'app-add-wine',
  standalone: true,
  imports: [ReactiveFormsModule, TranslateModule, LanguageClassDirective, LoadingComponent],
  templateUrl: './add-wine.component.html',
  styleUrl: './add-wine.component.scss'
})
export class AddWineComponent implements OnInit {
  addWineForm!: FormGroup;
  successMessage: string | null = null;
  errorMessage: string | null = null;
  isLoading = false;
  editMode = false;
  wineId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private wineService: WineService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.initAddWineForm();
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.editMode = true;
        this.wineId = +id;
        this.loadWineData(this.wineId);
      }
    });
  }

  initAddWineForm() {
    this.addWineForm = this.fb.group({
      name: ['', Validators.required],
      vintageYear: ['', Validators.required],
      stockQuantity: ['', [Validators.required, Validators.min(1)]],
      price: ['', [Validators.required, Validators.min(1)]],
      description: [''],
      imageUrl: ['', Validators.required],
    });
  }

  loadWineData(wineId: number) {
    this.wineService.getWineById(wineId).subscribe((wine: Wine) => {
      this.addWineForm.patchValue({
        name: wine.name,
        vintageYear: wine.vintageYear,
        stockQuantity: wine.stockQuantity,
        price: wine.price,
        description: wine.description,
        imageUrl: wine.imageUrl,
      });
    });
  }

  // Getters for form controls
  get name() {
    return this.addWineForm.get('name');
  }

  get vintageYear() {
    return this.addWineForm.get('vintageYear');
  }

  get stockQuantity() {
    return this.addWineForm.get('stockQuantity');
  }

  get price() {
    return this.addWineForm.get('price');
  }

  get description() {
    return this.addWineForm.get('description');
  }

  get imageUrl() {
    return this.addWineForm.get('imageUrl');
  }

  onSubmit() {
    if (this.addWineForm.valid) {
      this.isLoading = true;
      this.successMessage = null;
      this.errorMessage = null;

      const wineData = this.addWineForm.value;
      if (this.editMode && this.wineId) {
        this.wineService.updateWine(this.wineId, wineData).subscribe(
          () => {
            this.isLoading = false;
            this.successMessage = 'Wine updated successfully!';
            this.router.navigate(['/admin-products']);
          },
          error => {
            this.isLoading = false;
            this.errorMessage = 'Error updating wine. Please try again.';
          }
        );
      } else {
        this.wineService.addWine(wineData).subscribe(
          () => {
            this.isLoading = false;
            this.successMessage = 'Wine added successfully!';
            this.initAddWineForm();
          },
          error => {
            this.isLoading = false;
            this.errorMessage = 'Error adding wine. Please try again.';
          }
        );
      }
    }
  }
}
