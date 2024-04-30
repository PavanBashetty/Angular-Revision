import { Component, TemplateRef, ViewChild } from '@angular/core';
import { ApiService } from '../_services/api.service';
import { favMovie } from '../_classes/favMovie';
import { MatDialog } from '@angular/material/dialog';
import { CommonService } from '../_services/common.service';
import { newStudent } from '../_classes/studentList';

@Component({
  selector: 'app-forms-overview',
  templateUrl: './forms-overview.component.html',
  styleUrls: ['./forms-overview.component.scss']
})
export class FormsOverviewComponent {

  successMsg!:string;
  favMovieList!:favMovie[];
  @ViewChild('editRatingModal', {static:true}) editRatingModal!: TemplateRef<any>;
  selectedMovieId!:string;
  currentRating!:number;
  selectedMovieName!:string;

  completeStudentData!:newStudent[]

  constructor(private apiService:ApiService, private dialogRef: MatDialog, private commonService:CommonService){}

  ngOnInit(){
    this.getFavMovieList();
    this.getStudentData();
  }

  // FAVORIATE MOVIES APIs
  getFavMovieList(){
    this.apiService.getFavMoviesList().subscribe({
      next:(data:favMovie[])=>{this.favMovieList = data;},
      error:(error:any)=>{console.log(error)}
    })
  }
  deleteFavMovie(id:string){
    this.apiService.deleteFavMovie(id).subscribe({
      next:()=>{
        this.successMsg = 'Movie deleted successfully!!';
        this.getFavMovieList();
        setTimeout(()=>{        
          this.successMsg = '';
        },2000)
      },
      error:(error:any)=>{console.log(error)}
    })
  }
  openEditRatingDialog(selectedMovie:favMovie){
    this.selectedMovieName = selectedMovie.movieName;
    this.selectedMovieId = selectedMovie.id;
    this.currentRating = selectedMovie.movieRating;
    this.dialogRef.open(this.editRatingModal, this.commonService.dialogConfig)
  }
  submitNewRating(){
    this.apiService.editMovieRating(this.selectedMovieId, this.currentRating).subscribe({
      next:()=>{
        this.getFavMovieList();
        this.cancelRateEditing();
      },
      error:(error:any)=>{console.log(error)}
    })
  }
  cancelRateEditing(){
    this.dialogRef.closeAll();
  }

  //STUDENT DATA APIs
  getStudentData(){
    this.apiService.getStudentList().subscribe({
      next:(data:newStudent[])=>{this.completeStudentData = data},
      error:(error:any)=>{console.log(error)}
    })
  }
  studentDetail(id:string){}
}
