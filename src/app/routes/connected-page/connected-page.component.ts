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
      public postBySourceCollection: any;
      public sourceCollection: any;
      public section: String;
      public country: String = "fr";
      public category: String = "";
      public source: String = "bbc-news";
      
      constructor(
        private CrudService: CrudService
      ){}
      
    //


    /* 
    Methods
    */
        // Method to get the post list

      onChange(newValue) {
        this.country = newValue;
        this.getPostByCountry()
      }

      onChangeSource(newValue) {
        this.source = newValue;
        this.getPostBySource()
    }

    onChangeCategory(newValue){
      this.category = newValue;
      this.getPostByCountry()
    }


    public getPostByCountry = async () => {
      this.postCollection = await this.CrudService.readAllItems('https://cors-anywhere.herokuapp.com/','top-headlines?country='+ this.country +'&category='+this.category+'&');
      this.section = "postByCountry";
    };

    public getPostBySource = async () => {
      this.postBySourceCollection = await this.CrudService.readAllItems('https://cors-anywhere.herokuapp.com/','everything?sources='+this.source+'&');
      this.section = "postBySource";
    };
    
    public getSourceList = async () => {
      this.sourceCollection = await this.CrudService.readAllItems('https://cors-anywhere.herokuapp.com/','sources?');
      this.section = "sourceList";
    };

    //

    /* 
    Hooks
    */
      ngOnInit(){
        // Get the post list
        this.getSourceList();
        this.getPostByCountry();
      };
    //
  };
//