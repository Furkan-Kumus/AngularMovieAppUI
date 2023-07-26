import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Urun } from 'src/app/models/urun.model';
import { UrunlerService } from 'src/app/services/urunler.service';

@Component({
  selector: 'app-urun-duzenle',
  templateUrl: './urun-duzenle.component.html',
  styleUrls: ['./urun-duzenle.component.css']
})
export class UrunDuzenleComponent implements OnInit{
  
  updateProduct: Urun={
    id: '',
    name: '',
    category: '',
    urunId: '',
    price: 0
  }
  constructor(private router:Router, private productService: UrunlerService, private route:ActivatedRoute){}
  
  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params) => {
        const id = params.get('id');

        if (id) {
          this.productService.getUrun(id)
          .subscribe({
            next: (response) => {
              this.updateProduct = response;
            }
          });
        }
      }
    })
  }

  updateProductMethod(){
    this.productService.updateProduct(this.updateProduct.id, this.updateProduct).subscribe({
      next: (response) => {
        this.router.navigate(['urunler']);
      },
      error:(err) => {
        console.log(err);
      }
    })

  }

}
