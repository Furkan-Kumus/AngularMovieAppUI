import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Urun } from 'src/app/models/urun.model';
import { UrunlerService } from 'src/app/services/urunler.service';

@Component({
  selector: 'app-urunler',
  templateUrl: './urunler.component.html',
  styleUrls: ['./urunler.component.css']
})
export class UrunlerComponent implements OnInit{
  urunler:Urun[] = [];

  filterText = "";

  constructor(private router: Router, private urunService:UrunlerService){}

  ngOnInit(): void {
    this.urunService.getAllUrunler().subscribe({
      next:(urunler) => {
        this.urunler = urunler;
      },
      error:(response) => {
        console.log(response);
      }
    });
  }

  deleteProduct(id:string){
    this.urunService.deleteProduct(id)
    .subscribe({
      next:(response) => {
        let currentUrl = this.router.url;
        this.router.navigateByUrl('/', {skipLocationChange: true})
        .then(() => {
          this.router.navigate([currentUrl]);
        });
      }
    });
  }
}
