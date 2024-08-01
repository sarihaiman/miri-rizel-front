import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('token');
console.log("I am here");

if (token && !req.url.includes('Code')&& !req.url.includes('Communication')&& !req.url.includes('Document')&& !req.url.includes('SendEmail')&& !req.url.includes('Login')) {
    const clonedRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next(clonedRequest);
  } else {
    return next(req);
  }
};
