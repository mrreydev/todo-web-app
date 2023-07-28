import { Button, Checkbox, Label, Modal, TextInput, Textarea  } from 'flowbite-react';
import { useState } from "react";
import { formatYMD } from './../utils';
import { FaTrash } from 'react-icons/fa';
import Datepicker from "tailwind-datepicker-react"

const options = {
  title: "Pilih tenggat waktu",
  autoHide: true,
  todayBtn: false,
  clearBtn: true,
  minDate: new Date("1950-01-01"),
  theme: {
    background: "bg-gray-100 dark:bg-gray-800",
    todayBtn: "",
    clearBtn: "",
    icons: "",
    text: "",
    disabledText: "opacity-30",
    input: "",
    inputIcon: "",
    selected: "",
  },
  icons: {
    // () => ReactElement | JSX.Element
    prev: () => <span>prev</span>,
    next: () => <span>next</span>,
  },
  datepickerClassNames: "top-12",
  defaultDate: new Date(),
  language: "id",
}

function ModalFormTodo(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState('');
  const [showDate, setShowDate] = useState(false);
  const [remindMe, setRemindMe] = useState(false);
  const [important, setImportant] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: null,
      name: '',
      finished: false
    }
  ]);

  const handleInputName = (event) => {
    const { value } = event.target;
    setName(value);
  }

  const handleInputDescription = (event) => {
    const { value } = event.target;
    setDescription(value);
  }

  const handleSetDueDate = (selectedDate) => {
    setDueDate(selectedDate);
  }

  const handleCloseInputDate = (value) => {
    setShowDate(value)
  }

  const handleSetRemindMe = (event) => {
    const { checked } = event.target;
    setRemindMe(checked);
  }

  const handleSetImportant = (event) => {
    const { checked } = event.target;
    setImportant(checked);
  }

  const handleAddTask = (event) => {
    const previousTask = [...tasks];
    previousTask.push({
      id: null,
      name: '',
      finished: false
    })

    setTasks(previousTask);
  }

  const handleResetTask = () => {
    setTasks([{
      id: null,
      name: '',
      finished: false
    }])
  }

  const handleDeleteTask = (index) => {
    const previousTask = [...tasks];
    previousTask.splice(index, 1);

    setTasks(previousTask);
  }

  const handleChangeTaskValue = (key, index, value) => {
    const editedTasks = [...tasks];
    editedTasks[index][key] = value;

    setTasks(editedTasks);
  }

  const handleResetForm = () => {
    setName('');
    setDescription('');
    setDueDate(null);
    setRemindMe(false);
    setImportant(false);
    handleResetTask();
  };


  const saveTodo = (event) => {
    event.preventDefault();

    const resultForm = {
      name,
      description,
      dueDate: formatYMD(dueDate),
      remindMe,
      important,
      tasks
    };

    props.saveTodo(resultForm);
    handleResetForm();
    props.closeModal(false);
  }

  return (
    <Modal show={props.openModal === true} popup onClose={() => props.closeModal(false)}>
      <Modal.Header />
      <Modal.Body>
        <form action="#" onSubmit={saveTodo}>
        <div className="space-y-6">
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">{ props.edited ? 'Edit Todo' : 'Tambah Todo' }</h3>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="name" value="Nama todo" />
              </div>
              <TextInput value={name} onInput={handleInputName} id="name" placeholder="Masukan nama todo" required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="description" value="Deskripsi todo" />
              </div>
              <Textarea value={description} onInput={handleInputDescription} id="description" placeholder="Masukan deskripsi todo" required rows={4}/>
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="due-date" value="Tenggat waktu" />
              </div>
              <Datepicker options={options} onChange={handleSetDueDate} show={showDate} setShow={handleCloseInputDate} />
            </div>
            <div className="flex justify-start">
              <div className="flex items-center gap-2">
                <Checkbox id="remind-me" value={remindMe} onChange={handleSetRemindMe} />
                <Label htmlFor="remind-me">Remind Me</Label>
              </div>
              <div className="flex items-center gap-2 ms-4">
                <Checkbox id="important" value={important} onChange={handleSetImportant} />
                <Label htmlFor="important">Important</Label>
              </div>
            </div>
            {/* START : LIST TASK */}
            <div className="flex flex-col justify-end">
              {
                tasks.map((task, index) => {
                  return (
                    <div key={index} className="flex align-center mb-6">
                      <div className="basis-3/5">
                        <TextInput value={task.name} onInput={(event) => { handleChangeTaskValue('name', index, event.target.value) }} id={`task-${index}`} placeholder={`Masukan Task ${index + 1}`} required />
                      </div>
                      <div className="basis-1/5 text-center">
                        <Checkbox id="remind-me" value={task.finished} onChange={(event) => { handleChangeTaskValue('finished', index, event.target.checked) }} />
                      </div>
                      <div className="basis-1/5 text-center">
                        <Button color="purple" onClick={() => handleDeleteTask(index)}>
                          <FaTrash className="h-6 w-6" />
                        </Button>
                      </div>
                    </div>
                  )
                })
              }
              <Button color="purple" onClick={handleAddTask} className="w-full" outline>+ Tambah Task</Button>
            </div>
            {/* END : LIST TASK */}
            <div className="flex justify-end w-full">
              <Button color="purple" type="submit">Simpan</Button>
            </div>
        </div>
        </form>
      </Modal.Body>
    </Modal>
  )
}

export default ModalFormTodo;
