import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViolacionComponent } from './violacion.component';

describe('ViolacionComponent', () => {
  let component: ViolacionComponent;
  let fixture: ComponentFixture<ViolacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViolacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViolacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
