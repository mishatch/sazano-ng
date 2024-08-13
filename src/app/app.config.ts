import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
  HttpClient,
  HttpClientModule,
  provideHttpClient,
} from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

// Firebase Config
const firebaseConfig = {
  apiKey: 'AIzaSyCbr7W0Jab6Bys6kGDyH0y7aW2poCKtNW0',
  authDomain: 'sazano-wine.firebaseapp.com',
  projectId: 'sazano-wine',
  storageBucket: 'sazano-wine.appspot.com',
  messagingSenderId: '40957889500',
  appId: '1:40957889500:web:e09cc1055f088444425d19',
  measurementId: 'G-7PBLGH40WM',
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom(HttpClientModule),
    importProvidersFrom(
      TranslateModule.forRoot({
        defaultLanguage: 'en',
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient],
        },
      })
    ),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
  ],
};
