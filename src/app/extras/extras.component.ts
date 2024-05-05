import { Component } from '@angular/core';
import { ApiService } from '../_services/api.service';
import { newStudent } from '../_classes/studentList';
import { debounceTime, delay, distinctUntilChanged, map, of, toArray } from 'rxjs';
import { dataShareObservables } from '../_services/dataShare-Obv.service';

@Component({
  selector: 'app-extras',
  templateUrl: './extras.component.html',
  styleUrls: ['./extras.component.scss']
})
export class ExtrasComponent {


}
