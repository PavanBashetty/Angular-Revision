import { Component } from '@angular/core';
import { dataShareService } from '../_services/dataShare-ser.service';
import { dataShareObservables } from '../_services/dataShare-Obv.service';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.scss']
})
export class BasicsComponent {

  public dataFromChild!: string;
  public dataToChild: string = 'This message displayed in Child comp is coming from Parent comp';

  public disableInput:boolean = true;
  public enteredName!:string;

  public varSharedDataS!:string;
  public varSharedDataO!:string;

  constructor(private dataShareS:dataShareService, private dataShareO: dataShareObservables){}

  ngOnInit(){
    this.varSharedDataS = this.dataShareS.getSharedDataS();

    this.dataShareO.data$.subscribe({next:(data)=>{this.varSharedDataO = data}});
  }

  updateDataS(){
    this.dataShareS.setSharedDataS('Shared data via Service updated in basics component');
    this.varSharedDataS = this.dataShareS.getSharedDataS();
  }

  updateDataO(){
    this.dataShareO.updateDataO('Shared data via Observable updated in basics component')
  }
}
