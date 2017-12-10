import { Component } from '@angular/core';
import { IonicPage, ModalController } from 'ionic-angular';
import { QuotesService } from '../../services/quotes';
import { Quote } from '../../data/quote.interface';
import { QuotePage } from '../quote/quote';
import { SettingsService } from '../../services/settings';


@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  quotes: Quote[];

  constructor(
    private quotesService: QuotesService,
    private modalController: ModalController,
    private settingsService: SettingsService
  ) {
  }

  ionViewWillEnter() {
    this.getFavoriteQuotes();
    console.log('ngOnInit FavoritesPage');
  }

  onViewQuote(selectedQuote: Quote) {
    const modal = this.modalController.create(QuotePage, selectedQuote);
    modal.present();
    modal.onDidDismiss((res) => {
      if (res) {
        this.onRemoveFromFavorites(selectedQuote);
      }
    })
  }

  onRemoveFromFavorites(quote: Quote) {
    this.quotesService.removeQuoteToFavorites(quote);
    this.getFavoriteQuotes();
  }

  private getFavoriteQuotes() {
    this.quotes = this.quotesService.getQuoteFavorites();
  }

  getBg() {
    return this.settingsService.isAltBg() ? 'altQuoteBg' : 'quoteBg';
  }
}
