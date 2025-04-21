import {AfterViewInit, Component, ElementRef, inject, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import { NgIf, NgForOf} from '@angular/common';
import { RouterModule } from '@angular/router';

export interface Menu{
  perm: string
  title: string
  href: string
}
export const Mnu:Menu[]=[
  {perm:'adm' ,title:'Админка',href:'adm'},
  {perm:'czn' ,title:'Честный знак',href:'czn'},
  {perm:'dir' ,title:'Директор',href:'direktorzakaz'},
  {perm:'teh' ,title:'Технолог',href:'tehnologzakaz'},
  {perm:'apl' ,title:'Планшет',href:'apl'},
  {perm:'hh'  ,title:'',href:'-'},
  {perm:'mas' ,title:'Мастер-заказы',href:'masterzakazy'},
  {perm:'mas' ,title:'Мастер-работы',href:''}, //masterraboty
  {perm:'mso' ,title:'Мастер-оборудование',href:'masteroborud'},
  {perm:'hh'  ,title:'',href:'-'},
  {perm:'nkl' ,title:'Накладные',href:'nakl'},
  {perm:'crp' ,title:'Крипто Про',href:'info'},
  {perm:'inf' ,title:'Инфо про сервер',href:'abb'},
  {perm:'blg' ,title:'Блог',href:'blog'},
  {perm:'cnv' ,title:'Конвертер',href:'cnv'},
]


@Component({
  selector: 'app-site-layout-component',
  standalone: true,
  imports: [NgIf, NgForOf, RouterModule, RouterLinkActive,RouterLink,RouterOutlet],
  templateUrl: './site-layout.component.html',
  styleUrl: './site-layout.component.scss'
})

export class SiteLayoutComponent {
  err = false;
  mnu=Mnu
}
