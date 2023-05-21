import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstacAutobusListComponent } from './estac-autobus-list.component';

describe('EstacAutobusListComponent', () => {
  let component: EstacAutobusListComponent;
  let fixture: ComponentFixture<EstacAutobusListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstacAutobusListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstacAutobusListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
