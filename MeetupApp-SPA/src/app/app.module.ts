import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavComponent } from './nav/nav.component';
import { AuthService } from 'src/app/services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ErrorInterceptorProvider } from './services/error.interceptor';
import { AlertifyService } from './services/alertify.service';
import { BsDropdownModule, TabsModule } from 'ngx-bootstrap';
import { EventListComponent } from './event-list/event-list.component';
import { ListComponent } from './list/list.component';
import { MessagesComponent } from './messages/messages.component';
import { AuthGuard } from 'src/guards/auth.guard';
import { UserService } from './services/user.service';
import { UserListComponent } from './people/user-list/user-list.component';
import { UserCardComponent } from './people/user-card/user-card.component';
import { JwtModule } from '@auth0/angular-jwt';
import { UserDetailComponent } from './people/user-detail/user-detail.component';
import { UserDetailResolver } from './resolvers/user-detail.resolver';
import { UserListResolver } from './resolvers/user-list.resolver';
import { NgxGalleryModule } from 'ngx-gallery';


export function tokenGetter() {
  return localStorage.getItem('token');
}



@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      EventListComponent,
      ListComponent,
      MessagesComponent,
      UserListComponent,
      UserCardComponent,
      UserDetailComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      AppRoutingModule,
      FormsModule,
      BsDropdownModule.forRoot(),
      TabsModule.forRoot(),
      JwtModule.forRoot( {
        config: {
          tokenGetter,
          whitelistedDomains: ['localhost:5000'],
          blacklistedRoutes: ['localhost:5000/api/auth']
        }
      }),
      NgxGalleryModule
   ],
   providers: [
      AuthService,
      ErrorInterceptorProvider,
      AlertifyService,
      AuthGuard,
      UserService,
      UserDetailResolver,
      UserListResolver

   ],
   bootstrap: [
      AppComponent
   ]
})

export class AppModule { }
