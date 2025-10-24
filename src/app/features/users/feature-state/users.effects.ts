import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, of } from 'rxjs';
import * as UsersActions from './users.actions';
import { UserService } from '../../../core/services/user.service';

@Injectable()
export class UsersEffects {
  private userService = inject(UserService);
  private actions$ = inject(Actions);

  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.load),
      switchMap(() =>
        this.userService.getUsers$().pipe(
          map((users) => UsersActions.loadSuccess({ users })),
          catchError((error) =>
            of(UsersActions.loadFailure({ error: error.message }))
          )
        )
      )
    )
  );

  update$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.updateUser),
      switchMap(({ user }) =>
        this.userService.updateUser$(user).pipe(
          map((updatedUser) =>
            UsersActions.updateUserSuccess({ user: updatedUser })
          ),
          catchError((error) =>
            of(UsersActions.updateUserFailure({ error: error.message }))
          )
        )
      )
    )
  );
}
