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
      public sourceCollection: any;
      public section: String;
      public country: String;
      
      constructor(
        private CrudService: CrudService
      ){}
      
    //


    /* 
    Methods
    */
        // Method to get the post list
        public getPostList = async () => {
          this.country = "fr";
          this.postCollection = await this.CrudService.readAllItems('https://cors-anywhere.herokuapp.com/','top-headlines?country='+this.country+'&');
          this.section = "post";
        };

        public getSourceList = async () => {
          this.sourceCollection = await this.CrudService.readAllItems('https://cors-anywhere.herokuapp.com/','sources?');
          this.section = "source";
        };
    //

    /* 
    Hooks
    */
      ngOnInit(){
        // Get the post list
        this.getPostList();
      };
    //
  };
//