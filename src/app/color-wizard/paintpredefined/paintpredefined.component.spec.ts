import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaintpredefinedComponent } from './paintpredefined.component';

describe('PaintpredefinedComponent', () => {
  let component: PaintpredefinedComponent;
  let fixture: ComponentFixture<PaintpredefinedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaintpredefinedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaintpredefinedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
