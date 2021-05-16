import { auth, firestore } from "./firebase";

export async function createUser(uid, data) {
  return firestore
    .collection("users")
    .doc(uid)
    .set({ uid, ...data }, { merge: true });
}

export async function fetchUserData(uid) {
  const documentRef = firestore.collection("users").doc(uid);
  const snapshot = await documentRef.get();
  return snapshot.data();
}

export async function updateUserData(uid, data) {
  const documentRef = firestore.collection("users").doc(uid);
  await documentRef.update({ ...data });
}
