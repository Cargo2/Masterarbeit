import { HttpInterceptorFn } from '@angular/common/http';
import { LoadingService } from '../../services/loading.service';
import { finalize } from 'rxjs';

var pendingRequests = 0;
const loadingService = new LoadingService();
export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  
  
  loadingService.showLoading();
  console.log(pendingRequests);
  pendingRequests = pendingRequests + 1;
  return next(req).pipe(finalize(() => { loadingService.hideLoading();
  }));
    
  

 
 



};
