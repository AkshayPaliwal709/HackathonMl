import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CancerServiceProvider } from '../../providers/cancer-service/cancer-service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [CancerServiceProvider]
})

/*@Page({
  templateUrl: 'build/pages/home/home.html',
  providers: [PeopleService]
}) */

export class HomePage {
   public cancer: any;
   public sizeOfCancer: string;

  constructor(public navCtrl: NavController, public cancerService: CancerServiceProvider) {
  //  this.loadPeople();
  }

  checkCancer(){
  this.cancerService.load(this.sizeOfCancer)
  .then(data => {
    this.cancer = data.data;
  });
}

}
