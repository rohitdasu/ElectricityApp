import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResultLoadPage } from './result-load.page';

describe('ResultLoadPage', () => {
  let component: ResultLoadPage;
  let fixture: ComponentFixture<ResultLoadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultLoadPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResultLoadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
