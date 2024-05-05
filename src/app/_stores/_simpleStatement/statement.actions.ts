import { createAction, props } from "@ngrx/store";


export const updateStatement = createAction('updateStatement', props<{newStatement:string}>())
