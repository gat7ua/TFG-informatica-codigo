import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutobusesBuscaComponent } from './autobuses-busca.component';

describe('AutobusesBuscaComponent', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let component: AutobusesBuscaComponent;
  let fixture: ComponentFixture<AutobusesBuscaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ AutobusesBuscaComponent ]
    })
    .compileComponents();
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);

    fixture = TestBed.createComponent(AutobusesBuscaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
