import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Modal } from 'react-bootstrap';



import GamesService from '../services/games.service';
import './GamesPage.css'
import FileService from '../services/file.service'

export default function GamesPage() {
  const [games, setGames] = useState([]);
  const [gameToRemove, setGameToRemove] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchGames();
  }, [])

  async function fetchGames(){
    try{
      const games = await GamesService.fetchGames();
      setGames(games);
      console.log(games);
    }catch(err){
      console.log(err);
    }
  }
  function hideModal(){
    setGameToRemove(null);
    // come back to this
    setShowModal(false);
  }

  async function removeGame(){
    try{
      await GamesService.deleteGame(gameToRemove.id);
      await FileService.deleteFile(gameToRemove.downloadUrl);
      setGames(games.filter ((game) => game.id !== gameToRemove.id));
      hideModal();
    }catch (err){
      console.log(err.message);
    }
  }


  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-end">
        <Link to="/add-game">Add Game</Link>
      </div>
  
      <div className="d-flex flex-wrap">
        {games.map((game) => {
          return (
            <div key={game.id} className="card">
              <img
                src={game.downloadUrl}
                className="card-img-top game-img"
                alt="game cover"
              />
              <div className="card-body">
                <h5 className="card-title">{game.name}</h5>
              </div>
              <div className="remove-button btn btn-secondary" onClick={() => {
                setGameToRemove(game);
                setShowModal(true);
              }}>
                <i className="bi bi-trash"></i>
              </div>
            </div>
          );
        })}
      </div>

      <Modal show={showModal} onHide = {() => hideModal()}>
        <Modal.Header closeButton>
          <Modal.Title> Remove Game</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete: {gameToRemove?.name}
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={() => hideModal()}>Close</button>
          <button className="btn btn-danger" onClick = {removeGame}>Yes, Delete</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
  }  