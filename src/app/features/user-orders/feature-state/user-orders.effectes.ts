import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import * as OrdersActions from './user-orders.actions';
import { UserService } from '../../../core/services/user.service';

@Injectable()
export class UserOrdersEffects {
  private actions$ = inject(Actions);
  private userService = inject(UserService);

  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OrdersActions.loadUserOrders),
      switchMap(({ userId }) =>
        this.userService.getUserOrders$(userId).pipe(
          map(userOrders => OrdersActions.loadUserOrdersSuccess({ userOrders })),
          catchError(err => of(OrdersActions.loadUserOrdersFailure({ error: err?.message ?? 'Failed to load orders' })))
        )
      )
    )
  );
}