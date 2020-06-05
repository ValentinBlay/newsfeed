import { Component, OnInit } from '@angular/core';
import { CrudService } from "../../services/crud/crud.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styles: [
  ]
})
export class HomePageComponent implements OnInit {

  constructor(
    private CrudService: CrudService,
    private Router: Router
){}
public getUserInfo = async (email: any, password: any ) => {
  localStorage.setItem('email',email);
  localStorage.setItem('password',password);
  // Get user infos
  var data = {'email':email, 'password':password}
  const  userInfo = await this.CrudService.readOneItem('login', data);

  // Check user info
  if(email != 0){
      // Change route endpoint
      this.Router.navigateByUrl('/connected');
  }
};
  ngOnInit(): void {
    this.getUserInfo(localStorage.getItem('email'), localStorage.getItem('password'));
  }
}
