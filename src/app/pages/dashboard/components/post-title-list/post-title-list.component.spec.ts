import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostTitleListComponent } from './post-title-list.component';

describe('PostTitleListComponent', () => {
  let component: PostTitleListComponent;
  let fixture: ComponentFixture<PostTitleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostTitleListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostTitleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
