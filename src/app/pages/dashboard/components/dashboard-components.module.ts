import { CommonModule } from '@angular/common';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostTitleListComponent } from "./post-title-list/post-title-list.component";

@NgModule({
  declarations: [PostTitleListComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [PostTitleListComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class DashboardComponentsModule {}
