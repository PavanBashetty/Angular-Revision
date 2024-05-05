import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { updateStatement } from '../_stores/_simpleStatement/statement.actions';

@Component({
  selector: 'app-ngrx-overview',
  templateUrl: './ngrx-overview.component.html',
  styleUrls: ['./ngrx-overview.component.scss']
})
export class NgrxOverviewComponent {

  varSharedDataN!:string

  constructor(private store:Store<{statement:string}>){}

  ngOnInit(){

    this.store.select('statement').subscribe({
      next:(data:string)=>{this.varSharedDataN = data}
    })
  }

  updateStatementN(){
    this.store.dispatch(updateStatement({newStatement:'Shared data via NgRx updated in NgRx component'}))
  }
}
