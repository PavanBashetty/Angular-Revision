import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { dataShareObservables } from 'src/app/_services/dataShare-Obv.service';
import { dataShareService } from 'src/app/_services/dataShare-ser.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent {

  varSharedDataS!:string;
  varSharedDataO!:string;
  varSharedDataN!:string;

  subscriberOne!:any;
  subscriberTwo!:any;

  subscriberThree!:any;
  subscriberFour!:any;  

  constructor(private dataShareS:dataShareService, private dataShareO:dataShareObservables){}

  ngOnInit(){

    //Creating one observable.
      //Observable has one callback func. So, we create an object, it has a next method. Basically this callback holds/creates data and whoever
      //subscribes to it, gets that data. In below case, callback generates a random number and whoever subscribes to it, gets that random number. Also, we use next method when we want to pass data to subscribers    
    const obs = new Observable(obj=>obj.next(Math.random()));
    obs.subscribe({next:(data)=>{this.subscriberOne = data}}); //Subscriber1
    obs.subscribe({next:(data)=>{this.subscriberTwo = data}}); //Subscriber2

    //Creating one subject.
      //Unlike a plain observable which takes a callback where we pass the data, subject don't have any arguments
    const sub = new Subject<number>();
    sub.subscribe({next:(data)=>{this.subscriberThree = data}}); //Subscriber3
    sub.subscribe({next:(data)=>{this.subscriberFour = data}});  //Subscriber4
    sub.next(Math.random());

    this.varSharedDataS = this.dataShareS.getSharedDataS();
    this.dataShareO.data$.subscribe({
      next:(data)=>{this.varSharedDataO = data}
    })
  }

  updateDataS(){
    this.dataShareS.setSharedDataS('Shared data via Service updated in RxJS-Subject component');
    this.varSharedDataS = this.dataShareS.getSharedDataS();
  }

  updateDataO(){
    this.dataShareO.updateDataO('Shared data via observable updated in RxJS-Subject component')
  }
}
