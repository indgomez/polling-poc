import logo from './logo.svg';
import './App.css'
import {ServicePolling} from './services/servicePolling'
import React, {Component, useState} from 'react';
import {Render} from 'react-dom';

export const App = () => {
  let socket = null;
  let arrChat = {};
  const connectSocket = () => {
    socket = ServicePolling();
    socket.on("data", (data) => {
      console.log(data);
    });
  }
  const disconnectSocket = () => {
    //socket.disconnect();
  }
  const [chat, setChat] = useState(0);

  const getValueInput = (value) => {
    arrChat =  [{...arrChat}, value];
    setChat(arrChat)
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className="containerChat">
          <div className="showChat">
          {chat}
          </div>
          <div className="inputWrite">
            <input type="text" className="inputText" onChange={ (e) => setChat(e.target.value) }>
            </input>
            <button className="button"  >Enviar</button>
          </div>
        </div>
        {connectSocket()}
        <button onClick={disconnectSocket()}>desconectar</button>
        
      </header>
    </div>
  );
}

export default App;
