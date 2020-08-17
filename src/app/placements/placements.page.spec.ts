import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlacementsPage } from './placements.page';

describe('PlacementsPage', () => {
  let component: PlacementsPage;
  let fixture: ComponentFixture<PlacementsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacementsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlacementsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
