import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JalaliComponent } from './jalali.component';

describe('JalaliComponent', () => {
  let component: JalaliComponent;
  let fixture: ComponentFixture<JalaliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JalaliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JalaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
