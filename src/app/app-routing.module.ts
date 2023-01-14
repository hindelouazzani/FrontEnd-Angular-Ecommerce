import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanierDetailComponent } from './panier/panier-detail/panier-detail.component';
import { PanierListComponent } from './panier/panier-list/panier-list.component';
import { CommandeDetailComponent } from './commande/commande-detail/commande-detail.component';
const routes: Routes = [
  { path: 'panier/:id', component: PanierDetailComponent },
  { path: '', redirectTo: '/panier', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
