import { AbstractControl, ValidationErrors } from '@angular/forms';

export function georgianPhoneValidator(
  control: AbstractControl
): ValidationErrors | null {
  const validGeorgianPhonePattern = /^5\d{8}$/;
  const value = control.value;

  if (value && !validGeorgianPhonePattern.test(value)) {
    return { invalidGeorgianPhone: true };
  }

  return null;
}
