import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, firstValueFrom } from "rxjs";
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

    //this method returns a promise instead of an observable. Inside this method, we use await to asynchronously wait for the HTTP request to complete and return the result.
    // HTTP request using this.http.get(), it returns an observable of the HTTP response. Then for testing we convert this observable to promise. Earlier it was done using toPromise() but it is now deprecated so we use firstValueFrom instead

    async getStudentListViaPromise(): Promise<newStudent[]>{
        try{
            const data = await firstValueFrom(this.http.get<newStudent[]>(`${this.apiURL}/studentsData`));
            if(data === undefined){
                throw new Error('Received undefined data from server');
            }
            return data;
        }catch(error){
            throw error;
        }
    }
}