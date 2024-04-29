import { Component } from '@angular/core';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss']
})
export class CustomComponent {

  onlyForIf:boolean = true;
  constructor(){}

  ngOnInit(){}

  changeConditionValues(){
    this.onlyForIf = !this.onlyForIf;
  }
}
