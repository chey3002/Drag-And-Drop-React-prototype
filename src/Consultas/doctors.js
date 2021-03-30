import { fire, storage, initialized } from "../Config/firebase";

class Doctors {
  async addDoctors(doctorObject) {
    const image = doctorObject.image;
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
              doctorObject.image = url;
              await fire.collection(`doctors`).doc().set(doctorObject);
              console.log("Done");
            });
        }
      );
  }
  async editDoctors(doctorObject) {
    const id = doctorObject.id;
    delete doctorObject.id;
    await fire.collection(`doctors`).doc(id).set(doctorObject);
    console.log("Done");
  }
  async getDoctors() {
    let returnDoctors = [];
    await initialized
      .firestore()
      .collection(`doctors`)
      .orderBy("stars", "desc")
      .get()
      .then((value) => {
        value.forEach((doc) => {
          returnDoctors.push({ ...doc.data(), id: doc.id });
        });
        return returnDoctors;
      });
    return returnDoctors;
  }
}
export default new Doctors();
