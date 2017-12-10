import { Quote } from '../data/quote.interface';

export class QuotesService {
  private favoriteQuotes: Quote[] = [];

  addQuoteToFavorites(quote: Quote) {
    this.favoriteQuotes.push(quote);
  }

  removeQuoteToFavorites(quote: Quote) {
    const pos = this.favoriteQuotes.findIndex((quoteElem: Quote) => {
      return quoteElem.id === quote.id;
    });
    this.favoriteQuotes.splice(pos, 1);
  }

  getQuoteFavorites() {
    return [...this.favoriteQuotes];
  }

  isFavorite(quote: Quote) {
    const pos = this.favoriteQuotes.findIndex((quoteElem: Quote) => {
      return quoteElem.id === quote.id;
    });
    return pos !== -1;
  }


}
