import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicionComponent } from './inicion.component';

describe('InicionComponent', () => {
  let component: InicionComponent;
  let fixture: ComponentFixture<InicionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
