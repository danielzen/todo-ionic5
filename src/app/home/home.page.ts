import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

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

  constructor(private alertController: AlertController) {
    this.items = [
      {title: 'ion-item', done: true},
      {title: 'Data Drive the App', done: true},
      {title: 'Toggle Items', done: true},
      {title: 'Create New Items', done: true},
      {title: 'Delete Items', done: false},
      {title: 'Edit Items', done: false},
    ];
  }

  async addItem() {
    const alert = await this.alertController.create({
      header: 'Add Task',
      inputs: [{name: 'task', placeholder: 'New Task'}],
      buttons: [{text: 'Cancel', role: 'cancel'},
        {
          text: 'Create',
          handler: data => {
            if (data.task !== '') {
              this.items.push({title: data.task, done: false});
            }
            return data.task;
          }
        }
      ]
    });
    await alert.present();
  }

}
