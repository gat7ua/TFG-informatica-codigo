import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutobusesBuscaComponent } from './autobuses-busca.component';

describe('AutobusesBuscaComponent', () => {
  let component: AutobusesBuscaComponent;
  let fixture: ComponentFixture<AutobusesBuscaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutobusesBuscaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutobusesBuscaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
