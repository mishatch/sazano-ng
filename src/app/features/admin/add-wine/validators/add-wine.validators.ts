import { AbstractControl, ValidationErrors } from '@angular/forms';

export function positiveNumberValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value;

  if (value === null || value === undefined || isNaN(value) || value <= 0) {
    return { invalidNumber: true };
  }

  return null;
}

export function imageUrlValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value;

  if (!value || typeof value !== 'string' || !value.startsWith('http')) {
    return { invalidUrl: true };
  }

  return null;
}
