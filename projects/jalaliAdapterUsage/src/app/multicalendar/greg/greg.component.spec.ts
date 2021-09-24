import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GregComponent } from './greg.component';

describe('GregComponent', () => {
  let component: GregComponent;
  let fixture: ComponentFixture<GregComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GregComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
