/* 
Import
*/
  // Angular
  import { Component, OnInit } from '@angular/core';

  // Inner
  import { CrudService } from "../../services/crud/crud.service";
//

/* 
Componant configuration
*/
  @Component({
    selector: 'app-connected-page',
    templateUrl: './connected-page.component.html',
  })
//


/* 
Componant class definition
*/
  export class ConnectedPageComponent implements OnInit {

    /* 
    Declarations
    */
      public postCollection: any;
      
      constructor(
        private CrudService: CrudService
      ){}
    //


    /* 
    Methods
    */
        // Method to get the post list
        public getPostList = async () => {
          this.postCollection = await this.CrudService.readAllItems('posts');
        };
    //

    /* 
    Hooks
    */
      ngOnInit(){
        // Get the poost list
        this.getPostList();
      };
    //
  };
//