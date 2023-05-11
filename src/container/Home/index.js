import React from 'react';

import { Container, Image, Label, Input } from "./styles";
import People from '../../assets/image.people.svg';
import Arrow from '../../assets/arrow.svg';

import { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

import axios from 'axios'
import H1 from '../../components/Title'
import ContainerItens from '../../components/ContainerItens'
import Button from '../../components/Button'


function App() {

  const history = useHistory()
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();


  async function addNewUser() {

    const response = await axios.post("http://localhost:3001/users", {

      name: inputName.current.value,
      age: inputAge.current.value

    });

    const { user: newUser } = response.data;



    setUsers([...users, newUser]);

    history.push("./usuarios")

  };



  return <Container>
    <Image alt="image-icon" src={People}></Image>
    <ContainerItens>

      <H1>Olá!</H1>

      <Label>Nome</Label>
      <Input ref={inputName} placeholder='Nome'></Input>

      <Label>Idade</Label>
      <Input ref={inputAge} placeholder='Idade'></Input>

      <Button onClick={addNewUser}>
        Cadastrar<img alt="seta" src={Arrow} />
      </Button>

    </ContainerItens>
  </Container>

};

export default App;