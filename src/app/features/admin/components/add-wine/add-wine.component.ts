import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {WineService} from "../../../../core/services/wine.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Wine} from "../../../../core/models/wine.model";
import {TranslateModule} from "@ngx-translate/core";
import {LanguageClassDirective} from "../../../../shared/directives/language-class.directive";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-add-wine',
  standalone: true,
  imports: [ReactiveFormsModule, TranslateModule, LanguageClassDirective],
  templateUrl: './add-wine.component.html',
  styleUrl: './add-wine.component.scss'
})
export class AddWineComponent implements OnInit, OnDestroy {
  public addWineForm!: FormGroup;
  public successMessage: string | null = null;
  public errorMessage: string | null = null;
  public editMode = false;
  public wineId: number | null = null;

  private subscription = new Subscription();

  constructor(
    private fb: FormBuilder,
    private wineService: WineService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.initAddWineForm();
    this.checkEditMode();

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public onSubmit() {
    if (this.addWineForm.valid) {
      this.successMessage = null;
      this.errorMessage = null;
      const wineData = this.addWineForm.value;

      if (this.editMode && this.wineId) {
        this.subscription.add(
          this.wineService.updateWine(this.wineId, wineData).subscribe(
            () => {
              this.successMessage = 'Wine updated successfully!';
              this.router.navigate(['/admin-products']);
            },
            error => {
              this.errorMessage = 'Error updating wine. Please try again.';
              console.log(error);
            }
          )
        );
      } else {
        this.subscription.add(
          this.wineService.addWine(wineData).subscribe(
            () => {
              this.successMessage = 'Wine added successfully!';
              this.initAddWineForm();
            },
            error => {
              this.errorMessage = 'Error adding wine. Please try again.';
              console.log(error);
            }
          )
        );
      }
    }
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

  get imageUrl() {
    return this.addWineForm.get('imageUrl');
  }

  private initAddWineForm() {
    this.addWineForm = this.fb.group({
      name: ['', Validators.required],
      vintageYear: ['', Validators.required],
      stockQuantity: ['', [Validators.required, Validators.min(1)]],
      price: ['', [Validators.required, Validators.min(1)]],
      description: [''],
      imageUrl: ['', Validators.required],
    });
  }

  private checkEditMode(){
    this.subscription.add(
      this.route.paramMap.subscribe(params => {
        const id = params.get('id');
        if (id) {
          this.editMode = true;
          this.wineId = +id;
          this.loadWineData(this.wineId);
        }
      })
    );
  }

  private loadWineData(wineId: number) {
    this.subscription.add(
      this.wineService.getWineById(wineId).subscribe((wine: Wine) => {
        this.addWineForm.patchValue({
          name: wine.name,
          vintageYear: wine.vintageYear,
          stockQuantity: wine.stockQuantity,
          price: wine.price,
          description: wine.description,
          imageUrl: wine.imageUrl,
        });
      })
    );
  }
}
