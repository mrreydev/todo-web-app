import CardTodo from "../componets/CardTodo";
import ModalFormTodo from "../componets/ModalFormTodo";
import { Button } from 'flowbite-react';
import {useEffect, useState} from "react";
import InfiniteScroll from 'react-infinite-scroller';
import { TextInput } from 'flowbite-react';
import { FaSearch } from 'react-icons/fa';
import {getTodos} from "../services/Todo";

function Home () {
  const [openModalForm, setOpenModalForm] = useState(false);
  const [pageStart, setPageStart] = useState(0);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [totalTodo, setTotalTodo] = useState(0);
  const [totalPage, setTotalPage] = useState(1);


  const [todos, setTodos] = useState([]);
  const [inputSearch, setInputSearch] = useState('');

  useEffect(() => {
    handleLoadMore();
  }, []);

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
          per_page: 24
        }
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
      console.log(error)
    }
  }

  const handleChangeSearch = (event) => {
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
                  onChange={handleChangeSearch}
                  value={inputSearch}
                />
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
                    return <CardTodo key={index} todo={todo} />
                  })
                }
              </div>
            </InfiniteScroll>
          </div>
        </div>
      </div>
      <ModalFormTodo openModal={openModalForm} closeModal={handleCloseModal}/>
    </>
  )
}

export default Home;
