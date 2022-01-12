import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  

  constructor(private http: HttpClient) { }

  newUser(data: any){
    const user = {
      name: data.name,
      email: data.email,
      password: data.password,
      id: Math.round(Math.random() * 10000)
    }
    return this.http.post<User>('http://localhost:3000/users', user)

  }

  getUserByEmail(email:string){
    return this.http.get<User[]>(`http://localhost:3000/users?email=${email}`)
  }

  getUserById(id:number){
    return this.http.get<User>(`http://localhost:3000/users/${id}`)
  }
}
