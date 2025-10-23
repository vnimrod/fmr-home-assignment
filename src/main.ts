import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { isDevMode } from '@angular/core';
import { UsersReducer } from './app/features/users/feature-state';
import { UsersEffects } from './app/features/users/feature-state';
import { UsersSelectors } from './app/features/users/feature-state';

bootstrapApplication(AppComponent, {
  providers: [
    provideStore({ [UsersSelectors.USERS_FEATURE_KEY]: UsersReducer.Reducer }),
    provideEffects([UsersEffects]),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  ],
});
