import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypescriptTips1Component } from './typescript-tips1.component';

describe('TypescriptTips1Component', () => {
  let component: TypescriptTips1Component;
  let fixture: ComponentFixture<TypescriptTips1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypescriptTips1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypescriptTips1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
