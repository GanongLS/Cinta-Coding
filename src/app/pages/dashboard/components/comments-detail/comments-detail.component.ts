import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';
import { Comment } from 'src/app/services/state/model/comment';
import { StateService } from 'src/app/services/state/state.service';


@Component({
  selector: 'comments-detail',
  templateUrl: './comments-detail.component.html',
  styleUrls: ['./comments-detail.component.scss'],
})
export class CommentsDetailComponent implements OnInit, OnChanges {
  @Input('user_name') user_name: string = '';
  @Input('comment') comment: Comment = {} as Comment;
  

  constructor(private state: StateService, private dataService: DataService) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {}
}
