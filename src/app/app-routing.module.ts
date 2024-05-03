import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicsComponent } from './basics/basics.component';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PipesComponent } from './basics/pipes/pipes.component';
import { DirectivesComponent } from './directives/directives.component';
import { StructuralComponent } from './directives/structural/structural.component';
import { AttributeComponent } from './directives/attribute/attribute.component';
import { CustomComponent } from './directives/custom/custom.component';
import { FormsOverviewComponent } from './forms-overview/forms-overview.component';
import { TemplateDrivenComponent } from './forms-overview/template-driven/template-driven.component';
import { ReactiveComponent } from './forms-overview/reactive/reactive.component';
import { RxjsOverviewComponent } from './rxjs-overview/rxjs-overview.component';
import { ObservablePromisesComponent } from './rxjs-overview/observable-promises/observable-promises.component';
import { AsyncPipeComponent } from './rxjs-overview/async-pipe/async-pipe.component';
import { OperatorsComponent } from './rxjs-overview/operators/operators.component';
import { SubjectsComponent } from './rxjs-overview/subjects/subjects.component';

const routes: Routes = [
  {path:'', redirectTo:'/basics', pathMatch:'full'},
  {
    path:'basics', component:BasicsComponent,
    children:[
      {path:'pipes', component:PipesComponent}
    ]
  },
  {path:'contentProjection', component:ContentProjectionComponent},
  {
    path:'directives', component:DirectivesComponent,
    children:[
      {path:'structural', component:StructuralComponent},
      {path:'attribute', component:AttributeComponent},
      {path:'custom', component:CustomComponent}
    ]
  },
  {
    path:'forms', component:FormsOverviewComponent,
    children: [
      {path:'template-driven', component:TemplateDrivenComponent},
      {path:'reactive', component:ReactiveComponent}
    ]
  },
  {
    path:'rxjs', component:RxjsOverviewComponent,
    children:[
      {path:'observablePromises', component:ObservablePromisesComponent},
      {path:'asyncpipe', component:AsyncPipeComponent},
      {path:'operators', component:OperatorsComponent},
      {path:'subjects', component:SubjectsComponent}
    ]
  },
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
