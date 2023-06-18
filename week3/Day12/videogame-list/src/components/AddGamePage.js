import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FileService from "../services/file.service";
import GamesService from "../services/games.service";
import { Game } from "../models/Game";

export default function AddGamePage() {
  const naviagte = useNavigate();
  const [name, setName] = useState("");
  const [file, setFile] = useState(null);

  async function onFormSubmit(e) {
    e.preventDefault();

    try {
      const downloadUrl = await FileService.uploadImage(file, (progress) => {
        console.log("Upload progress: ", progress);
      });
      await GamesService.createGame(new Game(null, name, downloadUrl));
      naviagte("/");
    } catch (err) {
      console.log(err);
    }
  }

  function onFileSelected(e) {
    if (e.target.files.length) {
      setFile(e.target.files[0]);
    } else {
      setFile(null);
    }
  }

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-end">
        <Link to="/">Game List</Link>
      </div>

      <div className="container my-5">
        <div className="card card-body">
          <h1>Add Game</h1>

          <form onSubmit={onFormSubmit}>
            <div className="mb-3">
              <label className="form-label">Game Cover Image</label>
              <input
                onChange={onFileSelected}
                className="form-control"
                type="file"
                multiple
              ></input>
            </div>

            <div className="mb-3">
              <label className="form-label">Game Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control"
                type="text"
                placeholder="Enter game title"
              ></input>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary px-5">
                {" "}
                Add Game
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
