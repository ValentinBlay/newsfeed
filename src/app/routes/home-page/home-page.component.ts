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
public getUserInfo = async (email: String ) => {
  // Get user infos
  const  userInfo = await this.CrudService.readOneItem('users', `email=${email}`);

  // Check user info
  if(userInfo.length > 0){
      // Change route endpoint
      this.Router.navigateByUrl('/connected');
  }
};
  ngOnInit(): void {
    
  }

}
