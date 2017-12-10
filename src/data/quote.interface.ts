export interface Quote {
  id: string;
  person: string;
  text: string;
}

export interface QuoteGroup {
  category: string,
  quotes: Quote[],
  icon: string
}
