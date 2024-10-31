import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(), provideFirebaseApp(() => initializeApp({"projectId":"recetario-8ac04","appId":"1:176475294234:web:4827b82a0b04a287ff1fa3","storageBucket":"recetario-8ac04.appspot.com","apiKey":"AIzaSyDW4otTBC1bBWLsIAWXieMsmDZDx1DihQw","authDomain":"recetario-8ac04.firebaseapp.com","messagingSenderId":"176475294234","measurementId":"G-W5EXNYGSNS"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]
};
