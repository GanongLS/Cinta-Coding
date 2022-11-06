import { CommonModule } from '@angular/common';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PostTitleListComponent } from './post-title-list/post-title-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { CommentsDetailComponent } from './comments-detail/comments-detail.component';

@NgModule({
  declarations: [
    PostTitleListComponent,
    PostDetailComponent,
    CommentsDetailComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, FontAwesomeModule],
  exports: [
    PostTitleListComponent,
    PostDetailComponent,
    CommentsDetailComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class DashboardComponentsModule {}
