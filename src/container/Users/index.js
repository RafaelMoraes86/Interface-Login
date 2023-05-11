import React from 'react';

import { Container, Image, User, Ul } from "./styles";

import Avatar from '../../assets/image.icons.svg';
import Arrow from '../../assets/arrow.svg';
import Trash from '../../assets/trash.svg';

import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

import axios from 'axios'
import H1 from '../../components/Title'
import ContainerItens from '../../components/ContainerItens';
import Button from '../../components/Button';


function Users() {
  const [users, setUsers] = useState([]);
  const history= useHistory()


  useEffect(() => {
    async function fetchUsers() {
      const response = await axios.get("http://localhost:3001/users")

      const { users: newUsers } = response.data

      setUsers(newUsers);

    }
    fetchUsers()
  }, [])

  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`)

    const newUser = users.filter(user => user.id !== userId)

    setUsers(newUser)

  };

function goBackPage(){
  history.push("./")
}

  return <Container>
    <Image alt="image-icon" src={Avatar}></Image>
    
    <ContainerItens isBlur={true}>

      <H1>Usuários</H1>


      <Ul>
        {users.map(user => (
          <User key={user.id}>
            <p>{user.name}</p> - <p>{user.age}</p>
            <button onClick={() => deleteUser(user.id)}><img src={Trash} alt='lata-de-lixo' /></button>
          </User>
        ))}
      </Ul>

      <Button isBack={true} onClick={goBackPage}>
        <img alt="seta" src={Arrow} /> Voltar
      </Button>

    </ContainerItens>
  </Container>

}

export default Users