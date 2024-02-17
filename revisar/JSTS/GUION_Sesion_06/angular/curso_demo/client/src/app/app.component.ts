import { Component, OnInit } from '@angular/core';

import {  MenuItem } from 'primeng/api';

const jMenu = require('../assets/menu.json');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Gestor de Facturas Cliente/Proveedor';
  myMenu: MenuItem[] = [];

  constructor(){}

  ngOnInit(){
    this.myMenu = jMenu;
  }


  
}
