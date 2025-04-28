import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root'})
export class FunctionsService {

  constructor() { }


}
export function loog(...args: any[]){
  return (...args: any) => {console.log(time(),`[${module}]`,...args)};
}
function time(){
  let d = new Date();
  return '['+to2(d.getHours())+':'+to2(d.getMinutes())+':'+to2(d.getSeconds())+']'
}
/** Добавляет впереди о если 1 символ */
export function to2(s:string|number){
  let x:string;
  if (typeof s =='number') {x=s.toString()}else{x=s}
  return x.length==1?'0'+x:x;}
