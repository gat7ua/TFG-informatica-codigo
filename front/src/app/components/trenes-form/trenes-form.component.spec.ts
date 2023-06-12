import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrenesFormComponent } from './trenes-form.component';

describe('TrenesFormComponent', () => {
  let component: TrenesFormComponent;
  let fixture: ComponentFixture<TrenesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrenesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrenesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
