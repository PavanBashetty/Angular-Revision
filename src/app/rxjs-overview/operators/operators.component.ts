import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, debounceTime, distinctUntilChanged, map, of, switchMap, toArray } from 'rxjs';
import { newStudent } from 'src/app/_classes/studentList';
import { ApiService } from 'src/app/_services/api.service';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss']
})
export class OperatorsComponent {

  originalStudentList!:newStudent[];
  mapStudentList!:newStudent[];
  filterStudentList!:newStudent[];

  searchedName = new FormControl();
  searchResult$ !: Observable<newStudent[]>;

  numberArray: number[] = [1, 2, 3, 4, 4, 5, 6, 4, 7, 8, 8, 9];
  numberArray$ = of(...this.numberArray);
  distinctNumberArray!: number[];

  constructor(private apiService:ApiService){}

  ngOnInit(){
    this.apiService.getStudentList().subscribe({
      next:(data:newStudent[])=>{this.originalStudentList = data},
      error:(error:any)=>{console.log(error)}
    });

    this.apiService.getStudentList().
    pipe(map(students => students.map(student => ({...student, age:student.age * 2}))))
    .subscribe({
      next:(data)=>{this.mapStudentList = data},
      error:(error:any)=>{console.log(error)}
    });

    this.apiService.getStudentList().
    pipe(map(students => students.filter(student=>(student.age % 2 != 0))))
    .subscribe({
      next:(data)=>{this.filterStudentList = data},
      error:(error:any)=>{console.log(error)}
    });

    this.searchResult$ = this.searchedName.valueChanges.
    pipe(debounceTime(300),switchMap(enteredName => enteredName ? this.apiService.searchStudent(enteredName) : of([])));

    this.numberArray$.
    pipe(distinctUntilChanged(), toArray()).subscribe({
      next: (data) => { this.distinctNumberArray = data }
    });
    //toArray() operator collects all emitted values into an array.


  }
}
