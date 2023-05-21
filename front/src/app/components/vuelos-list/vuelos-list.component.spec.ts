import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VuelosListComponent } from './vuelos-list.component';

describe('VuelosListComponent', () => {
  let component: VuelosListComponent;
  let fixture: ComponentFixture<VuelosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VuelosListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VuelosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
