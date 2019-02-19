import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerDoctoresComponent } from './ver-doctores.component';

describe('VerDoctoresComponent', () => {
  let component: VerDoctoresComponent;
  let fixture: ComponentFixture<VerDoctoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerDoctoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerDoctoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
