import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UrunlerComponent } from './components/urunler/urunler.component';
import { AddUrunComponent } from './components/add-urun/add-urun.component';
import { UrunDuzenleComponent } from './components/urun-duzenle/urun-duzenle.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';

const routes: Routes = [
  {
    path:'',
    component:UrunlerComponent
  },
  {
    path:'urunler',
    component:UrunlerComponent
  },
  {
    path:'urunler/add',
    component:AddUrunComponent
  },
  {
    path:'urunler/duzenle/:id',
    component:UrunDuzenleComponent
  },
  {
    path:'detail/:id',
    component:MovieDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
