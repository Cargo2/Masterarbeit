import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { routes } from './app.routes';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { loadingInterceptor } from './shared/interceptors/loading.interceptor';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyFieldStepper } from './components/pages/createorder-page/stepper.type';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyMaterialModule } from '@ngx-formly/material';


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
      ReactiveFormsModule,
      FormlyModule.forRoot( ),
      FormlyMaterialModule,
    ),
    provideHttpClient(withInterceptors([loadingInterceptor])),
  ],
};
