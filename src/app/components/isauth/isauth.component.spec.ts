import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IsauthComponent } from './isauth.component';

describe('IsauthComponent', () => {
  let component: IsauthComponent;
  let fixture: ComponentFixture<IsauthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsauthComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IsauthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
