import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UrunlerComponent } from './components/urunler/urunler.component';
import { AddUrunComponent } from './components/add-urun/add-urun.component';
import { UrunDuzenleComponent } from './components/urun-duzenle/urun-duzenle.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { UrunFilterPipe } from './components/urunler/urun-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    UrunlerComponent,
    AddUrunComponent,
    UrunDuzenleComponent,
    MovieDetailComponent,
    UrunFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
