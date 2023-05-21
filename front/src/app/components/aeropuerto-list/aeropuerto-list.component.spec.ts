import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AeropuertoListComponent } from './aeropuerto-list.component';

describe('AeropuertoListComponent', () => {
  let component: AeropuertoListComponent;
  let fixture: ComponentFixture<AeropuertoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AeropuertoListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AeropuertoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
