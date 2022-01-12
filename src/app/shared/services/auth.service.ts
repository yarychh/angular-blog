import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  

  constructor(private userService: UserService) {
    
   }

   login(data:any){
    return this.userService.getUserByEmail(data.email).pipe(map((users)=>{
      if (users[0] && users[0].password == data.password){
        localStorage.setItem('userId', users[0].id.toString())
        return 'success'
      }
      return 'error'
    }))
   }

   isAuthenticated(): boolean{
     if (localStorage.getItem('userId')){
       return true
     }
     return false
   }

}
