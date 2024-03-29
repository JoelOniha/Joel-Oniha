import {
  collection,
  doc,
  setDoc,
  onSnapshot,
  query,
  where,
} from 'firebase/firestore';

import { db } from '../firebase/firebase';
import { Message } from '../models/Message';

class MessageService {
  constructor() {
    this.collection = 'messages';
  }

  // CREATE
  async createMessage(message) {
    const docRef = doc(db, this.collection, message.id);
    // setDoc because we're assigning the unique id
    await setDoc(docRef, message.toJson());
  }

  // READ (REALTIME UPDATES)
  subscribeToChatMessages(chat, onMessageUpdate) {
    const collectionRef = collection(db, this.collection);
    const q = query(collectionRef, where('chatId', '==', chat.id));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messages = [];
      querySnapshot.forEach((doc) => {
        messages.push(Message.fromFirebase(doc));
      });
      onMessageUpdate(messages);
    });

    return unsubscribe;
  }
}

const service = new MessageService();
export default service;
