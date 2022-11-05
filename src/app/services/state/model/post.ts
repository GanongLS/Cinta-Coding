// To parse this data:
//
//   import { Convert, Posts } from "./file";
//
//   const posts = Convert.toPosts(json);

export interface Posts {
  posts: Post[];
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toPosts(json: string): Posts {
    return JSON.parse(json);
  }

  public static postsToJson(value: Posts): string {
    return JSON.stringify(value);
  }
}
