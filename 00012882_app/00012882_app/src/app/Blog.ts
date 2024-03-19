export interface Blog{
    postID: number,
    userID: number,
    title: string,
    content: string,
    postDate: string,
    user: {
      userID: number,
      username: string,
      email: string,
      createDate: string
    }
}