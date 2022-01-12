import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';


export const passwordConfirmationValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password');
    const repeatPassword = control.get('repeatPassword');

    if(!password?.value || !repeatPassword?.value) {
        repeatPassword?.setErrors(null);
        return null;
      }
  
      if(password.value !== repeatPassword.value) {
        repeatPassword.setErrors({ ['passwordMatchFail']: true });
        return { ['passwordMatchFail']: true };
      } else {
        repeatPassword.setErrors(null);
        return null;
      }    
}
