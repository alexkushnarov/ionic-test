import { FavoritesPage } from '../favorites/favorites';
import { Component } from '@angular/core';
import { LibraryPage } from '../library/library';

@Component({
  selector: 'page-tabs',
  template: `
    <ion-tabs selectedIndex="1">
      <ion-tab [root]="favourutePage" tabTitle="Favorites" tabIcon="star"></ion-tab>
      <ion-tab [root]="libraryPage" tabTitle="Library" tabIcon="book"></ion-tab>
    </ion-tabs>
  `
})
export class TabsPage {
  favourutePage = FavoritesPage
  libraryPage = LibraryPage;
}
