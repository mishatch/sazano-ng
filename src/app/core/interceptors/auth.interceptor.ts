import { HttpInterceptorFn } from '@angular/common/http';
import { HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AuthService } from "../services/auth.service";
import {inject} from "@angular/core";

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const authService = inject(AuthService);

  const token = localStorage.getItem('token');

  const authReq = token
    ? req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    })
    : req;

  return next(authReq).pipe(
    tap((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        const newToken = event.headers.get('newtoken');
        if (newToken) {
          localStorage.setItem('token', newToken);
        }
      }
    }),
    catchError((error: HttpErrorResponse) => {
      if (error.error?.message === 'Your permissions have been updated. Please use the new token for subsequent requests.') {
        authService.logout();
      }
      return throwError(() => error);
    })
  );
};
