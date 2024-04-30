import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { favMovie } from "../_classes/favMovie";
import { newStudent } from "../_classes/studentList";


@Injectable({
    providedIn:'root'
})
export class ApiService {

    private widgetProducts:string = "/assets/data/widgetProductData.json";
    private apiURL:string ="http://localhost:3000";

    constructor(private http:HttpClient){}

    //FOR CONTENT PROJECTION
    getWidgetProducts():Observable<any>{
        return this.http.get<any>(`${this.widgetProducts}`)
    }

    //FOR FAVORIATE MOVIES: add, del, edit, get
    addNewMovie(movieData:favMovie):Observable<any>{
        return this.http.post<any>(`${this.apiURL}/favoriteMovies`, movieData);
    }
    getFavMoviesList():Observable<favMovie[]>{
        return this.http.get<favMovie[]>(`${this.apiURL}/favoriteMovies`);
    }
    deleteFavMovie(id:string):Observable<any>{
        return this.http.delete<any>(`${this.apiURL}/favoriteMovies/${id}`);
    }
    editMovieRating(id:string, newRating:number):Observable<any>{
        const postData = {"movieRating":newRating};
        return this.http.patch<any>(`${this.apiURL}/favoriteMovies/${id}`, postData);
        //put updates the whole object, patch updates a particular field
    }


    //FOR STUDENT DATA
    getStudentList():Observable<newStudent[]>{
        return this.http.get<newStudent[]>(`${this.apiURL}/studentsData`);
    }
    addNewStudent(newStudentData:newStudent):Observable<any>{
        return this.http.post<any>(`${this.apiURL}/studentsData`, newStudentData)
    }
    searchStudent(studentName:string):Observable<newStudent[]>{
        return this.http.get<newStudent[]>(`${this.apiURL}/studentsData?firstName=${studentName}`)
    }
}