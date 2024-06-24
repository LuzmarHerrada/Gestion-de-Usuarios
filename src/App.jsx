import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, ModalBody, ModalHeader, ModalFooter} from 'reactstrap';
import userList from "./components/userList";
import UserList from './components/userList';

function App() {
  return(
    <UserList />
  )
}

export default App;
