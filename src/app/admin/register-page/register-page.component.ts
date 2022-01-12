import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/interfaces/interfaces';
import { UserService } from 'src/app/shared/services/user.service';
import { passwordConfirmationValidator } from 'src/app/shared/validators/password-validator';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  public form!: FormGroup

  user!:User

  constructor(private http: HttpClient, private router: Router, private UserService: UserService) { }

  ngOnInit(){
    this.form = new FormGroup({
      email: new FormControl (null, [Validators.email, Validators.required]),
      password: new FormControl (null, [Validators.required, Validators.minLength(6)]),
      repeatPassword: new FormControl (null, [Validators.required, Validators.minLength(6)]),
      name: new FormControl (null, [Validators.required, Validators.minLength(4)])
    }, {validators: [passwordConfirmationValidator] 
    });

    console.log(this.form);
    
  }

  submit(){
    if (this.form.invalid){
      return
    }
      console.log(this.form.value);

      this.UserService.newUser(this.form.value).subscribe(()=>{
        this.router.navigate(['/admin/login'])
      })
      
    
  }

  invalidPassword(): boolean{
    // console.log(this.form.controls['password'].value !== this.form.controls['repeatPassword'].value);
    
    if (this.form.controls['password'].value !== this.form.controls['repeatPassword'].value){
    return true
  }else{
    return false
  }
  }

}
