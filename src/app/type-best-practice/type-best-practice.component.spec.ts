import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeBestPracticeComponent } from './type-best-practice.component';

describe('TypeBestPracticeComponent', () => {
  let component: TypeBestPracticeComponent;
  let fixture: ComponentFixture<TypeBestPracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeBestPracticeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeBestPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
