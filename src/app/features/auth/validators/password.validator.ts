import {AbstractControl, FormGroup, ValidationErrors} from '@angular/forms';

export function confirmPasswordValidator(formGroup: FormGroup): ValidationErrors | null {
  const passwordControl = formGroup.get('password');
  const confirmPasswordControl = formGroup.get('confirmPassword');

  if (!passwordControl || !confirmPasswordControl) {
    return null;
  }

  if (passwordControl.value !== confirmPasswordControl.value) {
    confirmPasswordControl.setErrors({ passwordsMismatch: true });
  } else {
    confirmPasswordControl.setErrors(null);
  }

  return null;
}


export function uppercaseLetterValidator(
  control: AbstractControl
): ValidationErrors | null {
  const value = control.value as string;

  if (!/[A-Z]/.test(value)) {
    return { uppercaseLetter: true };
  }

  return null;
}

export function nonAlphanumericValidator(
  control: AbstractControl
): ValidationErrors | null {
  const value = control.value as string;

  if (!/[^a-zA-Z\d]/.test(value)) {
    return { nonAlphanumeric: true };
  }

  return null;
}

export function oneDigitValidator(
  control: AbstractControl
): ValidationErrors | null {
  const value = control.value as string;

  if (!/\d/.test(value)) {
    return { oneDigit: true };
  }

  return null;
}
