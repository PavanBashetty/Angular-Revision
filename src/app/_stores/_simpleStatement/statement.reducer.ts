import { createReducer, on } from "@ngrx/store";
import { updateStatement } from "./statement.actions";


export let initialState = 'Shared data coming from NgRx store';
export const statementReducer =  createReducer(
    initialState,
    on(updateStatement, (state,action)=>state=action.newStatement)
)