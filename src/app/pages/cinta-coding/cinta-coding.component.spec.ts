import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CintaCodingComponent } from './cinta-coding.component';

describe('CintaCodingComponent', () => {
  let component: CintaCodingComponent;
  let fixture: ComponentFixture<CintaCodingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CintaCodingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CintaCodingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
