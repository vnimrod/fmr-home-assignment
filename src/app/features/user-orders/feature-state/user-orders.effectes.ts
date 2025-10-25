import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { UserOrdersActions } from './';
import { UserService } from '../../../core/services/user.service';

@Injectable()
export class UserOrdersEffects {
  private actions$ = inject(Actions);
  private userService = inject(UserService);

  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserOrdersActions.loadUserOrders),
      switchMap(({ user }) =>
        this.userService.getUserOrders$(user.id).pipe(
          map(userOrders => UserOrdersActions.loadUserOrdersSuccess({ userOrders, user })),
          catchError(err => of(UserOrdersActions.loadUserOrdersFailure({ error: err?.message ?? 'Failed to load orders' })))
        )
      )
    )
  );
}