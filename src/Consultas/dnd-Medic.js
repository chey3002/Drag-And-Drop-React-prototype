import { fire, storage, initialized } from "../Config/firebase";

class DnDMedic {
  async addDnDMedic(articleObject) {
        await fire.collection(`DnDMedic`).doc().set(articleObject);

  }
  async editDnDMedic(dnDMedicObject) {
    const id = dnDMedicObject.id;
    delete dnDMedicObject.id;
    await fire.collection(`DnDMedic`).doc(id).set(dnDMedicObject);
    console.log("Done");
  }
  async getDnDMedic() {
    let returnArticles = [];
    await initialized
      .firestore()
      .collection(`DnDMedic`)
      .get()
      .then((value) => {
        value.forEach((doc) => {
          returnArticles.push({ ...doc.data(), id: doc.id });
        });
        return returnArticles;
      });
    return returnArticles;
  }
}
export default new DnDMedic();
