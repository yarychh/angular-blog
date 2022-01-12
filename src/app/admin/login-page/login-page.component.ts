import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  public form!: FormGroup;

  constructor(private http: HttpClient, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }

  submit(): void{
    if (this.form.invalid){return;}
    else{
      this.authService.login(this.form.value).subscribe((result)=>{
        if (result == 'success'){this.router.navigate(['/posts-list'])}
        else{console.log('wrong email or password');}
      });   
    }
  }
}
