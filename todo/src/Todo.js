import React, { useEffect, useState } from "react";
import "./Todo.css";
import TodoForm from "./Componentes/TodoForms";
import Item from "./Class/Item";
import List from "./Componentes/List";
import Header from "./Componentes/Header";
import Modal from "./Componentes/Modal";

const SAVED_ITEMS = "savedItems";

function Todo() {
    const [showModal, setShowModal] = useState(false)
  const [items, setItems] = useState([]);

  useEffect(() => {
    let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS));

    if (savedItems) {
      setItems(savedItems);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(SAVED_ITEMS, JSON.stringify(items));
  }, [items]);

  function onAddItem(text) {
    let item = new Item(text);

    setItems([...items, item]);
  }

  function onItemDeleted(item) {
    let filteredItems = items.filter((it) => it.id != item.id);

    setItems(filteredItems);
  }

  function onDone(item) {
    let updateItems = items.map((it) => {
      if (it.id === item.id) {
        it.done = !it.done;
      }
      return it;
    });

    setItems(updateItems);
  }
  
  function onHideModal(){
    
        setShowModal(false);
    }
    

  return (
    <div>
      <Header
        name="Dev+"
        links={["Sobre", "Comprar", "Contato", "Login"]}
      ></Header>

      <div className="container">
        <header className="header">
          <h1>Todo</h1>
          <button onClick={()=> {setShowModal(true)}} className="addButton">+</button>
        </header>
        {/* <TodoForm onAddItem={onAddItem}></TodoForm> */}

        <List
          onDone={onDone}
          onItemDeleted={onItemDeleted}
          items={items}
        ></List>

        <Modal show={showModal} onHideModal= {onHideModal}><TodoForm onAddItem={onAddItem}></TodoForm></Modal>
      </div>
    </div>
  );
  }


export default Todo;
