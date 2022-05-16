import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../../fireBase_connection/FireBaseConnection";

//status hendeler
/**
 *
 * @param {*} id
 * @param {*} isDoneStatus
 */
export function isDoneHendeler(id, isDoneStatus) {
  alert(id);
  const docRef = doc(db, "toDo", id);
  updateDoc(docRef, {
    isDoneStatus: !isDoneStatus,

    status: isDoneStatus ? "Done" : "To Do",
  });
}
//delete hendeler
export function removeFromDataBaseHendeler(collName, id) {
  const docRef = doc(db, collName, id);
  deleteDoc(docRef);
}
//update hendeler
/**
 *still needs work
 * @param {*} _id
 * @param {*} _statusRef
 * @param {*} _titelRef
 * @param {*} _toDoRef
 */
export function updateDataBasHendeler(_id, _statusRef, _titelRef, _toDoRef) {
  const docRef = doc(db, "toDo", _id);

  updateDoc(docRef, {
    status: _statusRef ? _statusRef : "",
    titel: _titelRef ? _titelRef : "",
    toDo: _toDoRef ? _toDoRef : "",
  }).then(() => {
    console.log("update done");
  });
}
