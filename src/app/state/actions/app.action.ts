/*
 * Copyright (c) 2019. A production of Silverslopes-cm, all rights reserved, no part of the project should be reproduced without prior
 * concern of authorized personnel.
 */
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { ActiveUser } from '../models/app.model';


export const ADD_ACTIVE_USER = '[USER] ADD';
export const REMOVE_ACTIVE_USER = '[USER] REMOVE';

export class AddActiveUser implements Action {
  readonly type = ADD_ACTIVE_USER;

  constructor(public payload: ActiveUser) {}
}

export class RemoveActiveUser implements Action {
  readonly type = REMOVE_ACTIVE_USER;
  constructor() {}
}

export type Actions = AddActiveUser | RemoveActiveUser;
