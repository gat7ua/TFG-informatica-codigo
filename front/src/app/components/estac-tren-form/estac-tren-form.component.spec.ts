import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstacTrenFormComponent } from './estac-tren-form.component';

describe('EstacTrenFormComponent', () => {
  let component: EstacTrenFormComponent;
  let fixture: ComponentFixture<EstacTrenFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstacTrenFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstacTrenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
