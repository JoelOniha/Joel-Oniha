import { ref, getDownloadURL, uploadBytesResumable, deleteObject } from "firebase/storage";
import { storage } from "../firebase/firebase";

class FileService {
  uploadImage(file, onUploadProgress) {
    return new Promise((resolve, reject) => {
      const fileRef = ref(storage, "images/" + file.name);
      const uploadTask = uploadBytesResumable(fileRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          this.handleProgressUpdate(snapshot, onUploadProgress);
        },
        (err) => {
          reject(err.message);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
            resolve(downloadUrl);
          });
        }
      );
    });
  }
  handleProgressUpdate(snapshot, onUploadProgress) {
    if (onUploadProgress) {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      onUploadProgress(progress);
    }
  }

  async deleteFile(downloadUrl) {
    // refrence to the file that we want to remove
    const fileRef = ref(storage, downloadUrl);
    // remove file using the file refrence
    await deleteObject(fileRef);
  }
}

const service = new FileService();
export default service;
