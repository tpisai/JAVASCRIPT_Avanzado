import { ApplicationConfig, LOCALE_ID, provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import LocaleEsPe from '@angular/common/locales/es-PE';

import { routes } from './app.routes';

registerLocaleData(LocaleEsPe);

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding()),
    { provide: LOCALE_ID, useValue: 'es-PE' }
  ]
};
