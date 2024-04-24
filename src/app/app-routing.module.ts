import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicsComponent } from './basics/basics.component';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PipesComponent } from './basics/pipes/pipes.component';

const routes: Routes = [
  {path:'', redirectTo:'/basics', pathMatch:'full'},
  {
    path:'basics', component:BasicsComponent,
    children:[
      {path:'pipes', component:PipesComponent}
    ]
  },
  {path:'contentProjection', component:ContentProjectionComponent},
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
