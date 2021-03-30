import { fire, storage, initialized } from "../Config/firebase";

class CommentsManager {
  async addComments(commentsObject) {
    await fire.collection(`comments`).doc().set(commentsObject);
    console.log("Done");
  }
  async getComments() {
    let returnArticles = [];
    await initialized
      .firestore()
      .collection(`comments`)
      .limit(5)
      .get()
      .then((value) => {
        value.forEach((doc) => {
          let commentData = {
            author: 0,
            content: 0,
            date: 0,
          };
          // doc.data() is never undefined for query doc snapshots
          commentData.author = doc.data()["author"];
          commentData.content = doc.data()["content"];
          commentData.date = doc.data()["date"];
          returnArticles.push(commentData);
          //returnArticles.push({ ...doc.data(), id: doc.id });
        });
        return returnArticles;
      });
    return returnArticles;
  }
}
export default new CommentsManager();
