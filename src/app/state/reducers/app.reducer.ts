/*
 * Copyright (c) 2019. A production of Silverslopes-cm, all rights reserved, no part of the project should be reproduced without prior
 * concern of authorized personnel.
 */
import { Action } from '@ngrx/store';
import { ActiveUser } from '../models/app.model';
import * as ActiveUserActions from '../actions/app.action';

const initialState = {};

export function activeUserReducer(state = initialState, action: ActiveUserActions.Actions) {
  switch (action.type) {
    case '[USER] ADD':
      return action.payload;
      case '[USER] REMOVE':
        return initialState;
    default:
      return initialState;
  }
}


