import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoprivilegeComponent } from './noprivilege.component';

describe('NoprivilegeComponent', () => {
  let component: NoprivilegeComponent;
  let fixture: ComponentFixture<NoprivilegeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoprivilegeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoprivilegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
