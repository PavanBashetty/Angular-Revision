import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { favMovie } from 'src/app/_classes/favMovie';
import { ApiService } from 'src/app/_services/api.service';
import { FormsOverviewComponent } from '../forms-overview.component';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss']
})
export class TemplateDrivenComponent {

  
  successMsg!:string;
  @ViewChild('movieForm',{static:false}) movieForm!:NgForm;

  constructor(private apiService:ApiService, private formOverViewComp: FormsOverviewComponent){}

  ngOnInit(){}

  submitNewMovie(newMovieData:favMovie){
    this.apiService.addNewMovie(newMovieData).subscribe({
      next:()=>{
        this.successMsg = 'New movie added successfully!!';
        this.movieForm.reset();
        setTimeout(()=>{
          this.successMsg = '';
          this.formOverViewComp.getFavMovieList();
        },2000)
      },
      error:(error:any)=>{console.log(error)}
    })
  }
}
