import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstacTrenListComponent } from './estac-tren-list.component';

describe('EstacTrenListComponent', () => {
  let component: EstacTrenListComponent;
  let fixture: ComponentFixture<EstacTrenListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstacTrenListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstacTrenListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
