import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  constructor( public authService : AuthService) { }

  ngOnInit(): void {
  }

  logout(event: Event){
    event.preventDefault()
    localStorage.removeItem('userId')
  }


}
