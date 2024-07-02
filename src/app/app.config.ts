
import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {provideRouter} from '@angular/router';
import {routes} from './app.routes';
import {provideAnimations} from '@angular/platform-browser/animations';
import {provideHttpClient} from "@angular/common/http";
import {MatNativeDateModule} from "@angular/material/core";
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom(MatNativeDateModule), provideFirebaseApp(() => initializeApp({"projectId":"simple-crm-1ade7","appId":"1:713242758588:web:5aa3582add89478e9aafb9","storageBucket":"simple-crm-1ade7.appspot.com","apiKey":"AIzaSyARsNG6NRKnws9qt_oFBUFhaB-_KQ08qUI","authDomain":"simple-crm-1ade7.firebaseapp.com","messagingSenderId":"713242758588"})), provideFirestore(() => getFirestore())//here
  ],
};
