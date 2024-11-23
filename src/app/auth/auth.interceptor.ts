import { HttpInterceptorFn } from '@angular/common/http';
import { Token } from '@angular/compiler';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem("tokenValue");
  req = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  })
  return next(req);
};
