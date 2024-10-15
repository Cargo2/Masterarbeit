import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { routes } from './app.routes';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { loadingInterceptor } from './shared/interceptors/loading.interceptor';



export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(), provideHttpClient(),
    importProvidersFrom(
      BrowserModule,
      BrowserAnimationsModule,
      ToastrModule.forRoot({
        timeOut: 5000,
        positionClass: 'toast-top-left',
        preventDuplicates: true,
      }),  
    ),
    provideHttpClient(withInterceptors([loadingInterceptor])),
  ],
};
