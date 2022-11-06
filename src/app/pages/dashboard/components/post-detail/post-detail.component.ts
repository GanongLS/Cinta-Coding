import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { isEmpty } from 'lodash';
import { DataService } from 'src/app/services/data/data.service';
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
  @Output() detail = new EventEmitter();
  user: User = {} as User;
  commentIcon = faCommentDots;
  comments: any[] = [];

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

  openDetail(e: any) {
    this.detail.emit(e);
  }
}
