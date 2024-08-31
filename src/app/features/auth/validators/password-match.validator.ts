import { AbstractControl, ValidationErrors } from '@angular/forms';

export function confirmPasswordValidator(
  passwordControl: AbstractControl
): ValidationErrors | null {
  const password = passwordControl.parent?.get('password')?.value;
  const confirmPassword = passwordControl.value;

  if (password !== confirmPassword) {
    return { passwordsMismatch: true };
  }

  return null;
}
