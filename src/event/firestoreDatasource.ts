import { DataSource } from 'apollo-datasource';
import { firestore } from 'firebase-admin';

export default class FirestoreDatasource extends DataSource {
  public db: firestore.Firestore;

  constructor(firestore: firestore.Firestore) {
    super();
    this.db = firestore;
  }

  // とりあえず特定のCOLLECTIONをgetするだけの関数
  public getAll = async <T>(collectionPath: string) => {
    const snaps = await this.db.collection(collectionPath).get();
    if (snaps.empty) return [];
    return snaps.docs.map((doc) => { ...(doc.data() as T), id: doc.id });
  };
}