import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CommandeListComponent } from './commande/commande-list/commande-list.component';
import { CommandeDetailComponent } from './commande/commande-detail/commande-detail.component';
import { PanierDetailComponent } from './panier/panier-detail/panier-detail.component';
import { PanierListComponent } from './panier/panier-list/panier-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CommandeListComponent,
    CommandeDetailComponent,
    PanierDetailComponent,
    PanierListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
