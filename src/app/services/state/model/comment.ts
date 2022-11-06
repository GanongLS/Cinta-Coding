// To parse this data:
//
//   import { Convert, Comments } from "./file";
//
//   const comments = Convert.toComments(json);

export interface Comments {
  comments: Comment[];
}

export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toComments(json: string): Comments {
    return JSON.parse(json);
  }

  public static commentsToJson(value: Comments): string {
    return JSON.stringify(value);
  }
}
