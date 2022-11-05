import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { isEmpty } from 'lodash';
import { Post } from 'src/app/services/state/model/post';
import { User } from 'src/app/services/state/model/user';
import { StateService } from 'src/app/services/state/state.service';

@Component({
  selector: 'post-title-list',
  templateUrl: './post-title-list.component.html',
  styleUrls: ['./post-title-list.component.scss'],
})
export class PostTitleListComponent implements OnInit, OnChanges {
  @Input('post') post: Post = {} as Post;
  user: User = {} as User;

  constructor(private state: StateService) {}

  ngOnInit(): void {
    if (!isEmpty(this.post)) {
      console.log({ post: this.post });
      this.user = this.state.getUserById(this.post.userId);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {}
}
