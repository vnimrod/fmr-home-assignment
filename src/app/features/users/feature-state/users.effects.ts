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

  add$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.addUser),
      switchMap(({ user }) =>
        this.userService.addUser$(user).pipe(
          map((createdUser) =>
            UsersActions.addUserSuccess({ user: createdUser })
          ),
          catchError((error) =>
            of(UsersActions.addUserFailure({ error: error.message }))
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

  delete$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.deleteUser),
      switchMap(({ userId }) =>
        this.userService.deleteUser$(userId).pipe(
          map(() => UsersActions.deleteUserSuccess({ userId })),
          catchError((error) =>
            of(UsersActions.deleteUserFailure({ error: error.message }))
          )
        )
      )
    )
  );
}
