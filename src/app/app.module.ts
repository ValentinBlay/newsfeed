import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './routes/home-page/home-page.component';
import { ConnectedPageComponent } from './routes/connected-page/connected-page.component';

// Router
import { RouterModule } from "@angular/router"
import { AppRouterModule } from "./app.router";
import { HeaderComponent } from './shared/header/header.component';
import { HttpClientModule } from "@angular/common/http";
import { CrudService } from "./services/crud/crud.service";
import {ObservablesService} from "./services/observable/observable.service";
import { FormLoginComponent } from './shared/form-login/form-login.component'
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ItemPostComponent } from './shared/item-post/item-post.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ConnectedPageComponent,
    HeaderComponent,
    FormLoginComponent,
    ItemPostComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot( AppRouterModule, { onSameUrlNavigation: 'reload' } ),
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [
    CrudService,
    ObservablesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
