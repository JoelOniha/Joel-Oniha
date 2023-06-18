import { collection, query, getDocs, addDoc } from "firebase/firestore";

import { db } from "../firebase/firebase";
import { Game } from "../models/Game";

class GamesService {
  constructor() {
    this.collection = "games";
  }
  async createGame() {
    const collectionRef = collection(db, this.collection);
    const docRef = await addDoc(collectionRef, Game.toJson());

    Game.id = docRef.id;
    return Game;
  }

  async fetchGames() {
    const collectionRef = collection(db, this.collection);

    const querySnapshot = await getDocs(query(collectionRef));

    const games = [];
    querySnapshot.forEach((doc) => {
      games.push(Game.fromFirebase(doc));
    });
    return games;
  }
}
const service = new GamesService();
export default service;
