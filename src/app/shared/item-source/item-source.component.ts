/* 
Import
*/
    // Angular
    import { Component, OnInit, Input } from '@angular/core';
  // Inner
  import { CrudService } from "../../services/crud/crud.service";
  import { FormBuilder, FormGroup } from '@angular/forms';

/* 
Componant configuration
*/
    @Component({
        selector: 'app-item-source',
        templateUrl: './item-source.component.html'
    })
//


/* 
Componant class definition
*/
    export class ItemSourceComponent implements OnInit {
        /* 
    Declarations
    */

   @Input() source: any;
   @Input() listbookmark: any;

      public postCollection: any;
      public sourceCollection: any = '';
      public postsourceCollection: any;
      public BookmarkCollection: any;
      public bookmark: FormGroup;
      
      constructor(
        private CrudService: CrudService,
        private formBuilder: FormBuilder,
      ){}
    //
 
    /* 
    Methods
    */
        // Method to get the source list
        // Method to get the bookmark list of user
        
    //
 
    /* 
    Hooks
    */
      ngOnInit(){
      };
      // Add a bookmark to user profil
      addbookmark(id, name, description, url, category, language, country ){
        var token = localStorage.getItem('user');
        this.bookmark = this.formBuilder.group({
          id: id,
          name: name,
          description: description,
          url: url,
          category: category,
          language: language,
          country: country,
          token: token,
        })
        this.CrudService.createItem('https://newsapp.dwsapp.io/api/bookmark', this.bookmark.value);
      }
      /*
      public getmyBookmark = async () => {
        var token =  localStorage.getItem('user');
        var data = {"token" : token};
        this.BookmarkCollection = await this.CrudService.readAllItemsUser('me',data);
        
        this.listbookmark = this.BookmarkCollection.data.bookmark.map(el => el.name);
        
      };
      // Suppr a bookmark to user profil
      supprbookmark(id){
        //find _id from bookmark with is id
        this.getmyBookmark();
        const result = this.BookmarkCollection.data.bookmark.find( t => t.id === id);
        //send id and token
        var token =  localStorage.getItem('user');
        var data =  token;
        this.CrudService.deleteItem( result._id, data );
      }
 */
    //
  };