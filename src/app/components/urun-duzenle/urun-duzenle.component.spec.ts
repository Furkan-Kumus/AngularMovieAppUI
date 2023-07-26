import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrunDuzenleComponent } from './urun-duzenle.component';

describe('UrunDuzenleComponent', () => {
  let component: UrunDuzenleComponent;
  let fixture: ComponentFixture<UrunDuzenleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UrunDuzenleComponent]
    });
    fixture = TestBed.createComponent(UrunDuzenleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
