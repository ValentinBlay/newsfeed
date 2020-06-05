// Imports
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

// Inner
import { CrudService } from "./services/crud/crud.service";

// Definition
@Injectable({ providedIn: 'root' })

// Export
export class AuthGuard implements CanActivate {

    constructor( 
        private CrudService: CrudService,
        private Router: Router,
    ){}


    canActivate(): Promise<any> {
        return new Promise( (resolve, reject) => {
            var loginStorage = localStorage.getItem('email');
            var data = {
                'email':localStorage.getItem('email'),
                'password':localStorage.getItem('password')
              }
            this.CrudService.readOneItem('login', data)
            .then( ( apiResponse ) =>  {
                if(loginStorage != null){ return resolve(true) }
                else{ this.Router.navigateByUrl('/') };
            })
            .catch( ( apiResponse ) =>  this.Router.navigateByUrl('/'))
        })
    }
}