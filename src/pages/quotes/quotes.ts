import { Component, OnInit } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { Quote, QuoteGroup } from '../../data/quote.interface';
import { QuotesService } from '../../services/quotes';

/**
 * Generated class for the QuotesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {
  quoteGroup: QuoteGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private quotesService: QuotesService
  ) {
  }

  ngOnInit() {
    this.quoteGroup = this.navParams.data;
  }

  // ionViewDidLoad() {
  //   this.quoteGroup = this.navParams.data;
  //   console.log('ionViewDidLoad QuotesPage');
  // }

  onAddToFavorite(selcectedQuote: Quote) {
    let confirm = this.alertCtrl.create({
      title: 'Add Quote',
      subTitle: 'Are you sure ?',
      message: 'Are you sure you want to add this quote?',
      buttons: [
        {
          text: 'Sure',
          handler: () => {
            this.quotesService.addQuoteToFavorites(selcectedQuote);
            console.log('Sure clicked');
          }
        },
        {
          text: 'Not Sure',
          role: 'cancel',
          handler: () => {
            console.log('Not Sure clicked');
          }
        }
      ]
    });
    confirm.present();
  }

  removeFromFavorite(selcectedQuote: Quote) {
    let confirm = this.alertCtrl.create({
      title: 'Remove Quote',
      subTitle: 'Are you sure ?',
      message: 'Are you sure you want to remove this quote form favorite?',
      buttons: [
        {
          text: 'Sure',
          handler: () => {
            this.quotesService.removeQuoteToFavorites(selcectedQuote);
            console.log('Sure clicked');
          }
        },
        {
          text: 'Not Sure',
          role: 'cancel',
          handler: () => {
            console.log('Not Sure clicked');
          }
        }
      ]
    });
    confirm.present();
  }

  isFavourite(quote: Quote) {
    return this.quotesService.isFavorite(quote);
  }

}
