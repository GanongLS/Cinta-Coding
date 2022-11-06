import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { faCommentDots } from '@fortawesome/free-regular-svg-icons';
import { isEmpty } from 'lodash';
import { DataService } from 'src/app/services/data/data.service';
import { Post } from 'src/app/services/state/model/post';
import { User } from 'src/app/services/state/model/user';
import { StateService } from 'src/app/services/state/state.service';

@Component({
  selector: 'comments-detail',
  templateUrl: './comments-detail.component.html',
  styleUrls: ['./comments-detail.component.scss'],
})
export class CommentsDetailComponent implements OnInit, OnChanges {
  @Input('post') post: Post = {} as Post;
  @Input('comments') comments: any[] = [];
  user: User = {} as User;
  commentIcon = faCommentDots;
  // comments: any[] = [];
  show_comments: boolean = false;

  constructor(private state: StateService, private dataService: DataService) {}

  ngOnInit(): void {
    if (!isEmpty(this.post)) {
      // console.log({ post: this.post });
      this.user = this.state.getUserById(this.post.userId);
      this.dataService.getAllCommentByPostID(this.post.id).subscribe({
        next: (cs) => {
          console.log({ cs });
          this.comments = cs as any[];
        },
      });
    }
  }

  ngOnChanges(changes: SimpleChanges): void {}

  

  showComments() {
    this.show_comments = true;
  }
}
