import { LOCATION_INITIALIZED } from '@angular/common';
import { Injector } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export function TranslateAppInitializer(translateService: TranslateService, injector: Injector) {
  return () =>
    new Promise<any>((resolve) => {
      const locationInitialized = injector.get(LOCATION_INITIALIZED, Promise.resolve(null));
      locationInitialized.then(() => {
        translateService.setDefaultLang('fr');
        translateService.use('fr').subscribe(
          () => {
            console.log(`Successfully initialized 'fr' language.'`);
            resolve(null);
          },
          (err) => {
            console.error(`Problem with 'fr' language initialization.'`);
            resolve(null);
          },
          () => {
            resolve(null);
          }
        );
      });
    });
}
