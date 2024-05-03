import { Component } from '@angular/core';
import { ApiService } from 'src/app/_services/api.service';

@Component({
  selector: 'app-observable-promises',
  templateUrl: './observable-promises.component.html',
  styleUrls: ['./observable-promises.component.scss']
})
export class ObservablePromisesComponent {


  constructor(private apiService:ApiService){}

  ngOnInit(){}

}
