import CardTodo from "../componets/CardTodo";
import ModalFormTodo from "../componets/ModalFormTodo";
import { Button } from 'flowbite-react';
import {useState} from "react";

function Home () {
  const [openModalForm, setOpenModalForm] = useState(false);
  const todos = [
    {
      name: 'Todo One',
      description: 'Lorem Ipsum Dolor Sit Amet',
      important: true
    },
    {
      name: 'Todo Two',
      description: 'Lorem Ipsum Dolor Sit Amet',
      important: false
    },
    {
      name: 'Todo One',
      description: 'Lorem Ipsum Dolor Sit Amet',
      important: true
    },
    {
      name: 'Todo Two',
      description: 'Lorem Ipsum Dolor Sit Amet',
      important: false
    },
    {
      name: 'Todo One',
      description: 'Lorem Ipsum Dolor Sit Amet',
      important: true
    },
    {
      name: 'Todo Two',
      description: 'Lorem Ipsum Dolor Sit Amet',
      important: false
    },
    {
      name: 'Todo One',
      description: 'Lorem Ipsum Dolor Sit Amet',
      important: true
    },
    {
      name: 'Todo Two',
      description: 'Lorem Ipsum Dolor Sit Amet',
      important: false
    },
  ];

  const handleOpenForm = (event) => {
    setOpenModalForm(!openModalForm);
  }

  const handleCloseModal = (event) => {
    handleOpenForm(event);
  }

  return (
    <>
      <div className="container">
        <div className="flex md:flex-row justify-center">
          <div className="basis-full py-6">
            <div className="flex justify-between mb-6">
              <div className="text-4xl font-bold">Dashboard</div>
              <Button color="purple" onClick={function() { handleOpenForm(true) }} >Tambah Todo</Button>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {
                todos.map((todo, index) => {
                  return <CardTodo key={index} todo={todo} />
                })
              }
            </div>
          </div>
        </div>
      </div>
      <ModalFormTodo openModal={openModalForm} closeModal={handleCloseModal}/>
    </>
  )
}

export default Home;
