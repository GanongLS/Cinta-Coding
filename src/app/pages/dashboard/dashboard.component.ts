import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data/data.service';
import { Post } from 'src/app/services/state/model/post';
import { User } from 'src/app/services/state/model/user';
import { StateService } from 'src/app/services/state/state.service';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Comment } from 'src/app/services/state/model/comment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  faSearch = faSearch;
  subUser: Subscription = new Subscription();
  user: User = {} as User;
  name: string = 'Luki';
  posts: Post[] = [];
  post: Post = {} as Post;
  post_comments: Comment[] = [];
  search_query: string = '';
  page: number = 1;

  main_content: string = 'Dashboard';
  constructor(
    private router: Router,
    private state: StateService,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.stateSubscribe();

    this.dataService.getAllPost().subscribe({
      next: (p) => {
        // console.log({ p });
        let posts: Post[] = p as Post[];
        console.log({ posts });
        this.posts = posts;
      },
    });
  }

  stateSubscribe() {
    this.subUser = this.state.user.subscribe({
      next: (user: User) => {
        if (user) {
          this.name = user.username;
          this.user = user;
        }
      },
    });
  }

  stateUnSubscribe() {
    this.subUser.unsubscribe();
  }

  ngOnDestroy(): void {
    this.stateUnSubscribe();
  }

  goToDashboard() {
    this.router.navigateByUrl('/login-page');
  }

  goToProfile() {
    // this.router.navigateByUrl('/login-page');
    // console.log('buat halaman profile');
    this.main_content = 'Profile';
  }

  slicePostByPage(page: number) {
    return this.posts.slice((page - 1) * 10, page * 10);
  }

  goToPreviusPage() {
    if (this.page > 1) {
      this.page = this.page - 1;
    }
  }

  goToNextPage() {
    if (this.page < this.posts.length / 10) {
      this.page = this.page + 1;
    }
  }

  setActivePage(page: number) {
    this.page = page;
  }

  openDetail(ev: any, post: Post) {
    this.post = post;
    console.log({ ev });
    this.state.post.next(post);
    this.main_content = 'Post';
    this.post_comments = [...ev.comments];
  }

  hideDetail(e: any) {
    this.main_content = 'Dashboard';
  }

  onSearch(e: any) {
    console.log({ e });
  }
}
