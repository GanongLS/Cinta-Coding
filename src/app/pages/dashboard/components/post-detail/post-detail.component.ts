import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  faArrowAltCircleLeft,
  faCommentDots,
} from '@fortawesome/free-regular-svg-icons';
import { isEmpty } from 'lodash';
import { DataService } from 'src/app/services/data/data.service';
import { Comment } from 'src/app/services/state/model/comment';
import { Post } from 'src/app/services/state/model/post';
import { User } from 'src/app/services/state/model/user';
import { StateService } from 'src/app/services/state/state.service';

@Component({
  selector: 'post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss'],
})
export class PostDetailComponent implements OnInit, OnChanges {
  @Input('post') post: Post = {} as Post;
  @Input('comments') comments: Comment[] = [];
  @Output() detail = new EventEmitter();
  user: User = {} as User;
  commentIcon = faCommentDots;
  arrowLeft = faArrowAltCircleLeft;
  show_comments: boolean = false;

  constructor(private state: StateService, private dataService: DataService) {}

  ngOnInit(): void {
    if (!isEmpty(this.post)) {
      this.user = this.state.getUserById(this.post.userId);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log({ comments: this.comments });
  }

  

  showComments() {
    this.show_comments = true;
  }

  hideComments() {
    this.show_comments = false;
  }

  hidePost(e: any) {
     this.detail.emit(e);
  };
}
