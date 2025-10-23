import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { isDevMode } from '@angular/core';
import { usersReducer } from './app/features/users/feature-state/users.reducer';
import { USERS_FEATURE_KEY } from './app/features/users/feature-state/users.selectors';
import { UsersEffects } from './app/features/users/feature-state/users.effects';

bootstrapApplication(AppComponent, {
  providers: [
    provideStore({ [USERS_FEATURE_KEY]: usersReducer }),
    provideEffects([UsersEffects]),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  ],
});
