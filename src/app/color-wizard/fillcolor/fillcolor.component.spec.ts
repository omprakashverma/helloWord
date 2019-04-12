import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FillcolorComponent } from './fillcolor.component';

describe('FillcolorComponent', () => {
  let component: FillcolorComponent;
  let fixture: ComponentFixture<FillcolorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FillcolorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FillcolorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
