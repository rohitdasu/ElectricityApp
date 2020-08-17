import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LayingPage } from './laying.page';

describe('LayingPage', () => {
  let component: LayingPage;
  let fixture: ComponentFixture<LayingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LayingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
