import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Urun } from 'src/app/models/urun.model';
import { UrunlerService } from 'src/app/services/urunler.service';

@Component({
  selector: 'app-add-urun',
  templateUrl: './add-urun.component.html',
  styleUrls: ['./add-urun.component.css']
})
export class AddUrunComponent {
  newUrun: Urun = {
    id: '',
    name: '',
    category: '',
    urunId: '',
    price: 0
  }

  constructor(private urunService:UrunlerService, private router:Router){}

  addProduct(){
    this.urunService.addProduct(this.newUrun).subscribe({
      next:(urun) => {
        this.router.navigate(['urunler']);
      },
      error:(response) => {
        console.log(response);
      }
    })

  }

}
