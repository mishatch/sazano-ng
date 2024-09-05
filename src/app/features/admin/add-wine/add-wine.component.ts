import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {TranslateModule} from "@ngx-translate/core";
import {imageUrlValidator, positiveNumberValidator} from "./validators/add-wine.validators";
import {WineService} from "../../../core/services/wine.service";
import {LoadingComponent} from "../../../shared/components/loading/loading.component";
import {log} from "@angular-devkit/build-angular/src/builders/ssr-dev-server";

@Component({
  selector: 'app-add-wine',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    TranslateModule,
    LoadingComponent
  ],
  templateUrl: './add-wine.component.html',
  styleUrl: './add-wine.component.scss'
})
export class AddWineComponent implements OnInit {
  addWineForm!: FormGroup;
  successMessage: string | null = null;
  errorMessage: string | null = null;
  isLoading = false;
  constructor(private fb: FormBuilder, private wineService:WineService) {}

  ngOnInit() {
    this.initAddWineForm();
  }
  initAddWineForm() {
    this.addWineForm = this.fb.group({
      name: ['', Validators.required],
      vintageYear: ['', Validators.required],
      stockQuantity: ['', [Validators.required, positiveNumberValidator]],
      price: ['', [Validators.required, positiveNumberValidator]],
      description: [''],
      forSale: [true, Validators.required],
      imageUrl: ['', [Validators.required, imageUrlValidator]],
    });
  }

  get name () {
    return this.addWineForm.get('name');
  }

  get vintageYear () {
    return this.addWineForm.get('vintageYear');
  }

  get stockQuantity () {
    return this.addWineForm.get('stockQuantity');
  }

  get price () {
    return this.addWineForm.get('price');
  }

  get description () {
    return this.addWineForm.get('description');
  }


  get imageUrl () {
    return this.addWineForm.get('imageUrl');
  }

  onSubmit() {
    if (this.addWineForm.valid) {
      this.addWineForm.value.forSale = true;
      this.isLoading = true;
      this.successMessage = null;
      this.errorMessage = null;
      console.log(this.addWineForm.value);
      this.wineService.addWine(this.addWineForm.value).subscribe(
        (response) => {
          this.errorMessage = null;
          this.isLoading = false;
          this.successMessage = 'ღვინო წარმატებით დაემატა';
          this.initAddWineForm();
        },
        (error) => {
          this.isLoading = false;
          this.errorMessage = 'დაფიქსირდა შეცდომა, გთხოვთ სცადოთ თავიდან';
          console.log(error);
        }
      );
    }
  }
}
