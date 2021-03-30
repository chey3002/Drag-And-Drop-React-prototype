import { fire, storage, initialized } from "../Config/firebase";

class Blog {
  async addArticles(articleObject) {
    const image = articleObject.image;
    storage
      .ref(`images/${image.name}`)
      .put(image)
      .on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          console.log(error);
        },
        () => {
          storage
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then(async (url) => {
              articleObject.image = url;
              await fire.collection(`Article`).doc().set(articleObject);
              console.log("Done");
            });
        }
      );
  }
  async editArticles(articleObject) {
    const id=articleObject.id
    delete articleObject.id;
    await fire.collection(`Article`).doc(id).set(articleObject);
    console.log("Done");
  }
  async getArticles() {
    let returnArticles = [];
    await initialized
      .firestore()
      .collection(`Article`)
      .get()
      .then((value) => {
        value.forEach((doc) => {
          // let articleData = {
          //   author: 0,
          //   categories: 0,
          //   content: 0,
          //   date: 0,
          //   description: 0,
          //   image: 0,
          //   isPublish: 0,
          //   lastModified: 0,
          //   link: 0,
          //   title: 0,
          // };
          // // doc.data() is never undefined for query doc snapshots
          // articleData.author = doc.data()["author"];
          // articleData.categories = doc.data()["categories"];
          // articleData.content = doc.data()["content"];
          // articleData.date = doc.data()["date"];
          // articleData.description = doc.data()["description"];
          // articleData.image = doc.data()["image"];
          // articleData.isPublish = doc.data()["isPublish"];
          // articleData.lastModified = doc.data()["lastModified"];
          // articleData.link = doc.data()["link"];
          // articleData.title = doc.data()["title"];

          // returnArticles.push(articleData);
          returnArticles.push({ ...doc.data(), id: doc.id });
        });
        return returnArticles;
      });
    return returnArticles;
  }
}
export default new Blog();
