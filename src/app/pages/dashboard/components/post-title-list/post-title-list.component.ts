import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { isEmpty } from 'lodash';
import { Post } from 'src/app/services/state/model/post';
import { User } from 'src/app/services/state/model/user';
import { StateService } from 'src/app/services/state/state.service';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'post-title-list',
  templateUrl: './post-title-list.component.html',
  styleUrls: ['./post-title-list.component.scss'],
})
export class PostTitleListComponent implements OnInit, OnChanges {
  @Input('post') post: Post = {} as Post;
  @Output() detail = new EventEmitter();
  user: User = {} as User;
  commentIcon = faCommentDots;
  comments: Comment[] = [];

  constructor(private state: StateService, private dataService: DataService) {}

  ngOnInit(): void {
    if (!isEmpty(this.post)) {
      // console.log({ post: this.post });
      this.user = this.state.getUserById(this.post.userId);
      this.dataService.getAllCommentByPostID(this.post.id).subscribe({
        next: (cs) => {
          // console.log({ cs });
          let comments: Comment[] = cs as Comment[];
          this.comments = comments;
        },
      });
    }
  }

  ngOnChanges(changes: SimpleChanges): void {}

  openDetail(e: any) {
    let ev = { e, comments: [...this.comments] };
    this.detail.emit(ev);
    this.state.post_comments.next([...this.comments]);
  }
}
