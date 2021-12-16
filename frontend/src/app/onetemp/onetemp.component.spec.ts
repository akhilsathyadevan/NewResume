import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnetempComponent } from './onetemp.component';

describe('OnetempComponent', () => {
  let component: OnetempComponent;
  let fixture: ComponentFixture<OnetempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnetempComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnetempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
