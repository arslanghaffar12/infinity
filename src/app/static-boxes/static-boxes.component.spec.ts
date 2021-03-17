import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticBoxesComponent } from './static-boxes.component';

describe('StaticBoxesComponent', () => {
  let component: StaticBoxesComponent;
  let fixture: ComponentFixture<StaticBoxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaticBoxesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
