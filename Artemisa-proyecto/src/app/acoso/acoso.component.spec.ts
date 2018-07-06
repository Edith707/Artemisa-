import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcosoComponent } from './acoso.component';

describe('AcosoComponent', () => {
  let component: AcosoComponent;
  let fixture: ComponentFixture<AcosoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcosoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcosoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
