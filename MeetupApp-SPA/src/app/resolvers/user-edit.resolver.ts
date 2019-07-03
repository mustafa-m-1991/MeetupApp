import { Injectable } from '@angular/core';
import { User } from 'src/models/user';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { UserService } from '../services/user.service';
import { AlertifyService } from '../services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';


@Injectable()

export class UserEditResolver implements Resolve<User> {

  constructor(private userService: UserService, private router:
      Router, private alertifyService: AlertifyService, private authService: AuthService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<User> {

/* tslint:disable:no-string-literal */

return this.userService.getUser(this.authService.decodedToken.nameid).pipe(
        catchError(error => {

          this.alertifyService.error('Problem retrieving data');
          this.router.navigate(['/home']);
          return of(null);

        })
      );



    }




}


