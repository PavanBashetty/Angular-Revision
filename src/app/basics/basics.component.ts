import { Component } from '@angular/core';
import { dataShareService } from '../_services/dataShare-ser.service';

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
  
  constructor(private dataShareS:dataShareService){}

  ngOnInit(){
    this.varSharedDataS = this.dataShareS.getSharedDataS();
  }

  updateDataS(){
    this.dataShareS.setSharedDataS('Shared data via Service updated in basics component');
    this.varSharedDataS = this.dataShareS.getSharedDataS();
  }
}
