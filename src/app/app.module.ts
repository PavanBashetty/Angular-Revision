import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BasicsComponent } from './basics/basics.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { ChildOneComponent } from './basics/child-one/child-one.component';
import { DynamicAdComponent } from './basics/dynamic-ad/dynamic-ad.component';
import { PipesComponent } from './basics/pipes/pipes.component';
import { MobilesComponent } from './basics/dynamic-ad/mobiles/mobiles.component';
import { ShoesComponent } from './basics/dynamic-ad/shoes/shoes.component';

import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';


import { ToBinaryPipe } from './_custompipes/binary.pipe';
import { ExponentialStrengthPipe } from './_custompipes/exponential-strength.pipe';
import { CalculateAgePipe } from './_custompipes/calculateAge.pipe';
import { SingleSlotComponent } from './content-projection/single-slot/single-slot.component';
import { MultiSlotComponent } from './content-projection/multi-slot/multi-slot.component';
import { ProductDashboardComponent } from './content-projection/product-dashboard/product-dashboard.component';
import { ProductWidgetComponent } from './content-projection/product-dashboard/product-widget/product-widget.component';
import { DirectivesComponent } from './directives/directives.component';
import { CustomComponent } from './directives/custom/custom.component';
import { StructuralComponent } from './directives/structural/structural.component';
import { AttributeComponent } from './directives/attribute/attribute.component';
import { HighlightBackground } from './_customdirectives/app-highlight.directive';
import { ClickBackgroundHighlight } from './_customdirectives/app-clickbackground.directive';
import { MouseHover } from './_customdirectives/app-mousehover.directive';
import { showElementViaIf } from './_customdirectives/app-myOwnIf.directive';
import { showElementViaIfElse } from './_customdirectives/app-customIfElse.directive';
import { FormsOverviewComponent } from './forms-overview/forms-overview.component';
import { TemplateDrivenComponent } from './forms-overview/template-driven/template-driven.component';
import { ReactiveComponent } from './forms-overview/reactive/reactive.component';
import { RxjsOverviewComponent } from './rxjs-overview/rxjs-overview.component';
import { AsyncPipeComponent } from './rxjs-overview/async-pipe/async-pipe.component';
import { ObservablePromisesComponent } from './rxjs-overview/observable-promises/observable-promises.component';
import { OperatorsComponent } from './rxjs-overview/operators/operators.component';
import { SubjectsComponent } from './rxjs-overview/subjects/subjects.component';
import { NgrxOverviewComponent } from './ngrx-overview/ngrx-overview.component';
import { CounterComponent } from './ngrx-overview/counter/counter.component';
import { ExtrasComponent } from './extras/extras.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicsComponent,
    PageNotFoundComponent,
    NoAccessComponent,
    ContentProjectionComponent,
    ChildOneComponent,
    DynamicAdComponent,
    PipesComponent,
    MobilesComponent,
    ShoesComponent,
    ToBinaryPipe,
    ExponentialStrengthPipe,
    CalculateAgePipe,
    SingleSlotComponent,
    MultiSlotComponent,
    ProductDashboardComponent,
    ProductWidgetComponent,
    DirectivesComponent,
    CustomComponent,
    StructuralComponent,
    AttributeComponent,
    HighlightBackground,
    ClickBackgroundHighlight,
    MouseHover,
    showElementViaIf,
    showElementViaIfElse,
    FormsOverviewComponent,
    TemplateDrivenComponent,
    ReactiveComponent,
    RxjsOverviewComponent,
    AsyncPipeComponent,
    ObservablePromisesComponent,
    OperatorsComponent,
    SubjectsComponent,
    NgrxOverviewComponent,
    CounterComponent,
    ExtrasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
