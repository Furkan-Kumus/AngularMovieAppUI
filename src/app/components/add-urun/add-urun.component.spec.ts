import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUrunComponent } from './add-urun.component';

describe('AddUrunComponent', () => {
  let component: AddUrunComponent;
  let fixture: ComponentFixture<AddUrunComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddUrunComponent]
    });
    fixture = TestBed.createComponent(AddUrunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
