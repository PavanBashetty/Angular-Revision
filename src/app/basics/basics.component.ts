import { Component } from '@angular/core';
import { dataShareService } from '../_services/dataShare-ser.service';
import { dataShareObservables } from '../_services/dataShare-Obv.service';
import { Router } from '@angular/router';

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

  public toggleAuthBtns:boolean = false;
  public currentPipeAuthState:boolean = false;
  public removePipeAuthAccess:boolean = false;

  constructor(private dataShareS:dataShareService, private dataShareO: dataShareObservables, private router:Router){}

  ngOnInit(){
    this.varSharedDataS = this.dataShareS.getSharedDataS();
    this.dataShareO.data$.subscribe({next:(data)=>{this.varSharedDataO = data}});

    localStorage.getItem('pipeAuth') == 'true' ? this.toggleAuthBtns = true : this.toggleAuthBtns = false;
  }

  updateDataS(){
    this.dataShareS.setSharedDataS('Shared data via Service updated in basics component');
    this.varSharedDataS = this.dataShareS.getSharedDataS();
  }

  updateDataO(){
    this.dataShareO.updateDataO('Shared data via Observable updated in basics component')
  }

  authorizePipe(){
    this.currentPipeAuthState = true;
    this.toggleAuthBtns = true;
    localStorage.setItem('pipeAuth', 'true');
    setTimeout(()=>{
      this.currentPipeAuthState = false;
    },2000);
    this.router.navigate(['/basics']);
  }

  removeAuthAccess(){
    this.removePipeAuthAccess = true;
    this.toggleAuthBtns = false;
    localStorage.clear();
    setTimeout(()=>{
      this.removePipeAuthAccess = false;
    },2000);
    this.router.navigate(['/basics']);
  }
}
