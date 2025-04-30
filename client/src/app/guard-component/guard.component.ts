import {AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {GuardServices} from '../services/guard.services';
import {NgForOf} from '@angular/common';
import {loog} from "../services/functions.service";
const log = loog('██-PL-SERV-██');

@Component({
  selector: 'app-guard-component',
  imports: [
    NgForOf
  ],
  templateUrl: './guard.component.html',
  styleUrl: './guard.component.scss'
})
export class GuardComponent implements OnInit {
  carts:any[]=[]
  reader:string=''
 constructor(private gs: GuardServices){log('')}
  @ViewChild('jour') inputRef!: ElementRef;
  @HostListener('window:keypress', ['$event'])
  keyEvent(e: KeyboardEvent) {
    /** При считывании нажатия происходит это событие  */
    //  log('#','keypress',e);

    if(e.key === 'Enter'){
      log('$','получена карта',this.reader)
        // тут отправляем карту для фиксации события came
      this.gs.time({"barcod":this.reader,"event":"came"}).subscribe((r)=>{
        log('time');
      }) ;
    }
    else {
      if(e.key == '='){this.reader =''}
      else {
        this.reader += e.key
      }
    }
  }

  ngOnInit() {
    this.gs.list().subscribe((r)=>{
      log('results',r )
      log(typeof r)
      this.carts=r;
    })
  }

  /** преобразуем дату в строку со временем */
  todate(dt:string){ //Входной параметр
    let x= new Date( parseInt(dt)), //Преобразование строк в метеоусловиях
      s=x.getHours()+':'+x.getMinutes(); //Формирование строк времени
   // log('>',dt,x)
    return dt==null ? '' : s; //Возврат значения
  }
  toarrived(dt:string){ //альтернативный вариант
    if (dt == null) return '';
    let x = new Date(parseInt(dt)),
      h = x.getHours(),
      m = x.getMinutes();
    let s = (h < 10 ? '0' : '') + h + ':' + (m < 10 ? '0' : '') + m;
  //  log('>', dt, x);
    return s;
  }
  toleave(dt:string){
    let x= new Date( parseInt(dt)),
      s=x.getHours()+':'+x.getMinutes();
  //  log('>',dt,x)
    return dt==null ? '' : s;
  }
  toleft(dt:string){
    let x= new Date( parseInt(dt)),
      s=x.getHours()+':'+x.getMinutes();
  //  log('>',dt,x)
    return dt==null ? '' : s;
  }


}


