/* import './style.scss' */
import "./App.css";
import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
display: flex;
align-items: end;
`;

const ListItem = styled.li`
cursor: pointer;
`;


function App() {
  const [todoInput, setTodoInput] = useState("");

  const [todos, setTodos] = useState([]);

 // console.log(todos);

  const addTodo = () => {
    setTodos([...todos, todoInput]); // arraye eleman ekleyip rest etme
    setTodoInput("");
  };


  return (
    <>
    <Wrapper>
    <Form>
      <Form.Group className="" controlId="exampleForm.ControlInput1">
        <Form.Label>Hedef</Form.Label>
        <Form.Control 
        value={todoInput}
        onChange={(e) => {
          setTodoInput(e.target.value);
        }}
        type="text" />
      </Form.Group>
    </Form>
    <Button className="addButton" onClick={addTodo}>Ekle</Button>
    </Wrapper>
    <ul>
      {/* <li>Test</li>
      <li>Test</li> */}
      {todos.map((todo) => (
        <ListItem 
        onClick={() => {
        setTodos(todos.filter((filterTodo) => filterTodo !== todo));
      }}
        key={todo}>{todo}</ListItem>
      ))}
    </ul>
    </>
  );
}

export default App;