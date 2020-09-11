import React, { useState } from 'react';
import { Container, Input, Button } from './styles';

const Home = () => {

  const [todos, setTodos] = useState([]);

  return(
    <Container>
      <Input />
      <Button>Add Todo</Button>

      <ul>
        {todos.map(todo => (
          <li>{todo}</li>
        ))}
      </ul>
    </Container>
  );
};

export default Home;  

