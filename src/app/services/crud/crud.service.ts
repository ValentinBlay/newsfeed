// Angular
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//
import { ObservablesService } from "../observable/observable.service";


/* 
Definition 
*/
@Injectable()
export class CrudService {

// Inject module(s) in the service
constructor( 
  private HttpClient: HttpClient,        
  private ObservablesService: ObservablesService
  ){};


// CRUD method: READONE
public readOneItem(endpoint: String, param: String): Promise<any>{
  return this.HttpClient.get(`https://jsonplaceholder.typicode.com/${endpoint}?${param}`).toPromise()
  .then( data => this.getData(endpoint, data)).catch(this.handleError);
};

// CRUD method: REAL ALL
public readAllItems(proxy: String, endpoint: String,): Promise<any>{
  return this.HttpClient.get(`${proxy}https://newsapi.org/v2/${endpoint}apiKey=d0223c59210143bfb720f54eb07d80c0`).toPromise()
  .then(data => this.getData(endpoint, data)).catch(this.handleError);
};

// CRUD method: CREATE
public createItem(endpoint: String, data: any): Promise<any>{
  // Set header
  let myHeader = new HttpHeaders();
  myHeader.append('Content-Type', 'application/json');

  // Launch request
  return this.HttpClient.post(`https://jsonplaceholder.typicode.com/${endpoint}`, data, { headers: myHeader }).toPromise()
  .then(data => this.getData(endpoint, data)).catch(this.handleError);
};

// CRUD method: EDIT
public updateItem(endpoint: String, _id: String, data: any): Promise<any>{
  // Set header
  let myHeader = new HttpHeaders();
  myHeader.append('Content-Type', 'application/json');
  
  // Launch request
  return this.HttpClient.put(`https://jsonplaceholder.typicode.com/${endpoint}?${_id}`, data, { headers: myHeader }).toPromise()
  .then(data => this.getData(endpoint, data)).catch(this.handleError);
  };

// CRUD method: delete an item
public deleteItem(endpoint: String, _id: String): Promise<any>{
  // Set header
  let myHeader = new HttpHeaders();
  myHeader.append('Content-Type', 'application/json');

  // Launch request
  return this.HttpClient.delete(`https://jsonplaceholder.typicode.com/${endpoint}?${_id}`, { headers: myHeader }).toPromise()
  .then(data => this.getData(endpoint, data)).catch(this.handleError);
};

/* 
Methods to get API responses
*/
  // Get the API response
  private getData = (endpoint, apiResponse: any) => {
    // Switch endpoint to set observable value
    switch(endpoint){
    case 'users':
        // Set user info obserrbale value
        this.ObservablesService.setObservableData('user',apiResponse)

        // Return data
        return apiResponse || {};
        break;
    case 'posts':
      // Set user info obserrbale value
      this.ObservablesService.setObservableData('posts',apiResponse)

      // Return data
      return apiResponse || {};
      break;
    default:
        // Retun data anytime
        return apiResponse || {};
        break;
    };
};

  // Get the API error
  private handleError = (apiError: any) => Promise.reject(apiError.error);
//
};
//