/*
 * Copyright (c) 2019. A production of Silverslopes-cm, all rights reserved, no part of the project should be reproduced without prior
 * concern of authorized personnel.
 */
import { ActiveUser } from './models/app.model';

export interface AppState {
  readonly activeUser: ActiveUser;
}
