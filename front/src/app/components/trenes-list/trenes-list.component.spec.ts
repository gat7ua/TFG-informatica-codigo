import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrenesListComponent } from './trenes-list.component';

describe('TrenesListComponent', () => {
  let component: TrenesListComponent;
  let fixture: ComponentFixture<TrenesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrenesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrenesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
