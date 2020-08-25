import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialJalaliMomentAdapterComponent } from './material-jalali-moment-adapter.component';

describe('MaterialJalaliMomentAdapterComponent', () => {
  let component: MaterialJalaliMomentAdapterComponent;
  let fixture: ComponentFixture<MaterialJalaliMomentAdapterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialJalaliMomentAdapterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialJalaliMomentAdapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
