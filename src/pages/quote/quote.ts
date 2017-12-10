import { Component } from '@angular/core';
import { Quote } from '../../data/quote.interface';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {

  quote: Quote;

  constructor(
    private viewController: ViewController,
    private navParams: NavParams
  ) {}

  ionViewDidLoad() {
    this.quote = this.navParams.data;
  }

  onClose(remove = false) {
    this.viewController.dismiss(remove);
  }
}
