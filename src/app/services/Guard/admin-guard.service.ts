import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user-service.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuardService implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    // return this.userService.isAuthenticated().then((authenticated) => {
    //   console.log(authenticated);
    //   if (authenticated) {
    //     return true;
    //   } else {
    //     this.router.navigate(['/register']);
    //     return false;
    //   }
    // });
    if (this.userService.isAdmin) {
      return true;
    } else {
      this.router.navigate(['/admin']);
      return false;
    }
  }
}
