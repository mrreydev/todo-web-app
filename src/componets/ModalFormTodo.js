import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import {useState} from "react";
import { FaTrash } from 'react-icons/fa';
function ModalFormTodo(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState(null);
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

  const handleSetDueDate = (event) => {
    const { value } = event.target;
    setDueDate(value);
  }

  const handleSetRemindMe = (event) => {
    const { value } = event.target;
    setRemindMe(value);
  }

  const handleSetImportant = (event) => {
    const { value } = event.target;
    setImportant(value);
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

  const handleDeleteTask = (index) => {
    const previousTask = [...tasks];
    previousTask.splice(index, 1);

    setTasks(previousTask);
  }

  return (
    // onClose={() => props.setOpenModal(undefined)}
    <Modal show={props.openModal === true} popup onClose={() => props.closeModal(false)}>
      <Modal.Header />
      <Modal.Body>
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
            <TextInput value={description} onInput={handleInputDescription} id="description" placeholder="Masukan deskripsi todo" required />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="due-date" value="Tenggat waktu" />
            </div>
            <TextInput value={dueDate} onInput={handleSetDueDate} id="due-date" placeholder="Masukan tenggat waktu todo" required />
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
                      <TextInput value={dueDate} onInput={handleSetDueDate} id={`task-${index}`} placeholder={`Masukan Task ${index + 1}`} required />
                    </div>
                    <div className="basis-1/5 text-center">
                      <Checkbox id="remind-me" value={remindMe} onChange={handleSetRemindMe} />
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
            <Button color="purple">Simpan</Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default ModalFormTodo;
