import CardTodo from "../componets/CardTodo";
import ModalFormTodo from "../componets/ModalFormTodo";
import InfiniteScroll from 'react-infinite-scroller';
import { FaSearch } from 'react-icons/fa';
import SweetAlert2 from "react-sweetalert2";

import { Button, TextInput, Select } from 'flowbite-react';
import {useEffect, useState} from "react";

import { createTodo, deleteTodo, getTodo, getTodos, updateTodo } from "../services/Todo";
import { getErrorMessage } from "../utils";

function Home () {
  const [swalProps, setSwalProps] = useState({});

  const [openModalForm, setOpenModalForm] = useState(false);
  const [pageStart, setPageStart] = useState(0);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [totalTodo, setTotalTodo] = useState(0);
  const [totalPage, setTotalPage] = useState(1);

  const [todos, setTodos] = useState([]);
  const [inputSearch, setInputSearch] = useState('');
  const [filterSelect, setFilterSelect] = useState('');
  const [editedTodo, setEditedTodo] = useState({});

  useEffect(() => {
    if (filterSelect !== '') {
      clearTodos();
    }
  }, [filterSelect]);

  const handleInputSearch = (event) => {
    const { value } = event.target
    setInputSearch(value);
  }
  const handleLoadMore = async (event) => {
    try {
      const payload = {
        params: {
          page,
          search: inputSearch,
          per_page: 24,
        }
      }

      if (filterSelect === 'important') {
        payload.params = Object.assign(payload.params, {
          important: true
        })
      }

      const resp = await getTodos(payload);
      const todoData = resp.data;

      setPage(page + 1);
      setTotalPage(todoData.last_page);
      setTotalTodo(todoData.total)

      if (!todos.length) {
        setTodos(todoData.data)
      } else {
        const oldTodos = [...todos];
        const newTodos = [
          ...oldTodos,
          ...todoData.data
        ];

        setTodos(newTodos);
      }

      if (page > totalPage) {
        setHasMore(false);
      }

    } catch (error) {
      const errorMessage = getErrorMessage(error)
      setSwalProps({
        show: true,
        title: 'Gagal menambah todo',
        text: errorMessage,
        icon: 'error'
      })
    }
  }

  const clearTodos = (event) => {
    setPage(1);
    setTotalPage(1);
    setTotalTodo(0);
    setHasMore(true);
    setTodos([]);
  }

  const handleOpenForm = (event) => {
    setOpenModalForm(!openModalForm);
  }

  const handleCloseModal = (event) => {
    handleOpenForm(event);
  }

  const handleChangeSelectFilter = (event) => {
    const { value } = event.target;
    setFilterSelect(value);
  }


  const handleSaveTodo = async (result) => {
    if (result.action === 'add') {
      await handleCreateTodo(result.form);
    } else if (result.action === 'edit') {
      await handleEditTodo(result.form);
    }

    clearTodos();
  }

  const handleCreateTodo = async (form) => {
    try {
      const payload = {
        data: {
          name: form.name,
          description: form.description,
          due_date: form.dueDate,
          remind_me: form.remindMe,
          important: form.important,
          tasks: form.tasks.map((task) => {
            return {
              task: task.name,
              finished: task.finished
            }
          })
        }
      }

      const resp = await createTodo(payload);
      setSwalProps({
        show: true,
        title: 'Berhasil menambah todo',
        text: resp.message,
        icon: 'success'
      });

    } catch (error) {
      const errorMessage = getErrorMessage(error);
      setSwalProps({
        show: true,
        title: 'Gagal menambah todo',
        text: errorMessage,
        icon: 'error'
      })
    }
  }

  const handleEditTodo = async (form) => {
    try {
      const payload = {
        id: editedTodo.id,
        data: {
          name: form.name,
          description: form.description,
          due_date: form.dueDate,
          remind_me: form.remindMe,
          important: form.important,
          tasks: form.tasks.map((task) => {
            return {
              id: task.id,
              task: task.name,
              finished: task.finished
            }
          })
        }
      }

      const resp = await updateTodo(payload);
      setSwalProps({
        show: true,
        title: 'Berhasil mengubah todo',
        text: resp.message,
        icon: 'success'
      });
    } catch (error) {
      const errorMessage = getErrorMessage(error);
      setSwalProps({
        show: true,
        title: 'Gagal megubah todo',
        text: errorMessage,
        icon: 'error'
      });
    }
  }

  const clickTodo = async (value) => {
    await handleGetTodo(value.id)
  }

  const handleGetTodo = async  (id) => {
    try {
      const resp = await getTodo({
        id
      });

      setEditedTodo(resp.data);
      setOpenModalForm(true);
    } catch (error) {
      const errorMessage = getErrorMessage(error);
      setSwalProps({
        show: true,
        title: 'Gagal menghapus todo',
        text: errorMessage,
        icon: 'error'
      });
    }
  }

  const handleDeleteTodo = async (id) => {
    try {
      const resp = await deleteTodo({
        id
      })

      clearTodos();
      setSwalProps({
        show: true,
        title: 'Berhasil menghapus todo',
        text: resp.message,
        icon: 'success'
      });
    } catch (error) {
      const errorMessage = getErrorMessage(error);
      setSwalProps({
        show: true,
        title: 'Gagal menghapus todo',
        text: errorMessage,
        icon: 'error'
      });
    }
  }


  return (
    <>
      <div className="container">
        <div className="flex md:flex-row justify-center">
          <div className="basis-full py-6">
            <div className="flex justify-between mb-6">
              <div className="text-4xl font-bold">Dashboard</div>
              <div className="flex">
                <TextInput
                  icon={FaSearch}
                  id="searchInput"
                  placeholder="Ketikan judul untuk mencari todo"
                  type="text"
                  className="w-96 me-4"
                  onInput={handleInputSearch}
                  onChange={clearTodos}
                  value={inputSearch}
                />
                <Select
                  id="filter"
                  className="me-4"
                  onChange={handleChangeSelectFilter}
                  value={filterSelect}
                >
                  <option value="all">
                    Semua
                  </option>
                  <option value="important">
                    Important
                  </option>
                </Select>
                <Button color="purple" onClick={function() { handleOpenForm(true) }} >Tambah Todo</Button>
              </div>
            </div>
            <InfiniteScroll
              pageStart={pageStart}
              loadMore={handleLoadMore}
              hasMore={hasMore}
              loader={<div className="loader" key={0}>Loading ...</div>}
            >
              <div className="grid grid-cols-4 gap-4">
                {
                  todos.map((todo, index) => {
                    return <CardTodo onClick={() => {clickTodo(todo)}} key={index} todo={todo} />
                  })
                }
              </div>
            </InfiniteScroll>
          </div>
        </div>
      </div>
      <ModalFormTodo
        openModal={openModalForm}
        editedData={editedTodo}
        closeModal={handleCloseModal}
        saveTodo={handleSaveTodo}
        deleteTodo={handleDeleteTodo}
      />
      <SweetAlert2 { ...swalProps } didClose={function () { setSwalProps({})} }/>
    </>
  )
}

export default Home;
