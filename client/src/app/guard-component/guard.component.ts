import {Component, OnInit} from '@angular/core';
import {GuardServices} from '../services/guard.services';
import {loog} from "../services/functions.service";
const log = loog('██-PL-SERV-██');

@Component({
  selector: 'app-guard-component',
  imports: [],
  templateUrl: './guard.component.html',
  styleUrl: './guard.component.scss'
})
export class GuardComponent implements OnInit  {
 constructor(){log('')}
  ngOnInit() {
    GuardServices.list();
  }
}


