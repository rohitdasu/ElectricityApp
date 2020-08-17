import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CablePage } from './cable.page';

describe('CablePage', () => {
  let component: CablePage;
  let fixture: ComponentFixture<CablePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CablePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CablePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
