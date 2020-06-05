import { Component, OnInit } from '@angular/core';
import { ObservablesService } from "../../services/observable/observable.service";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  /* 
  Declaration
  */
      // Properties
      public userData: any;

      constructor(
          private ObservablesService: ObservablesService
      ){
          // Get user data observer
          this.ObservablesService.getUserInfo().subscribe( userDataObserver => {
            var userLogin = localStorage.getItem('email')
            if(userDataObserver === null) { this.userData = null }
            else{ 
                if(userLogin != null){
                    // Set local storage
                    this.userData = localStorage.getItem('email');
                }
                else{
                    this.userData = null
                }
            }
        })
      }
      public logout = () => {
        // Delete localstorage
        localStorage.removeItem('email');
        localStorage.removeItem('password');
    
        // Set user info obserrbale value
        this.ObservablesService.setObservableData('users', null)
    }
  //

  ngOnInit(){};
};