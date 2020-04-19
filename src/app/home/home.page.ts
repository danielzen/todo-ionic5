import { Component } from '@angular/core';

interface Item {
  title: string;
  done: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public items: Item [];

  constructor() {
    this.items = [
      {title: 'ion-item', done: true},
      {title: 'Data Drive the App', done: true},
      {title: 'Toggle Items', done: false},
      {title: 'Create New Items', done: false},
      {title: 'Delete Items', done: false},
      {title: 'Edit Items', done: false},
    ];
  }

}
