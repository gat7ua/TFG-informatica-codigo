import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NologinComponent } from './nologin.component';

describe('NologinComponent', () => {
  let component: NologinComponent;
  let fixture: ComponentFixture<NologinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NologinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NologinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
