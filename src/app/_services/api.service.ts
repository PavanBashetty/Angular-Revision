import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable({
    providedIn:'root'
})
export class ApiService {

    private widgetProducts:string = "/assets/data/widgetProductData.json";
    private apiURL:string ="http://localhost:3000";

    constructor(private http:HttpClient){}

    //CONTENT PROJECTION
    getWidgetProducts():Observable<any>{
        return this.http.get<any>(`${this.widgetProducts}`)
    }
}