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
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
