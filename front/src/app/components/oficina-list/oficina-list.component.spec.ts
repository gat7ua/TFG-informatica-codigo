import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OficinaListComponent } from './oficina-list.component';

describe('OficinaListComponent', () => {
  let component: OficinaListComponent;
  let fixture: ComponentFixture<OficinaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OficinaListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OficinaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
