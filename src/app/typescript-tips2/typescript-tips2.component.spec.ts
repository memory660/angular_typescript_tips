import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypescriptTips2Component } from './typescript-tips2.component';

describe('TypescriptTips2Component', () => {
  let component: TypescriptTips2Component;
  let fixture: ComponentFixture<TypescriptTips2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypescriptTips2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypescriptTips2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
