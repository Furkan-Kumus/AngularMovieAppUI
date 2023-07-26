import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Urun } from 'src/app/models/urun.model';
import { UrunlerService } from 'src/app/services/urunler.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit{

  constructor(private urunService: UrunlerService, private route: ActivatedRoute){}
  
  urun:Urun

  ngOnInit(): void {
    this.getUrun();
  }

  getUrun(): void{
    const id = this.route.snapshot.paramMap.get('id'); 
    this.urunService.getUrun(id).subscribe(urun => this.urun = urun);
  }

}
