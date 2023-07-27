import {useEffect, useState} from "react";

function UserTable() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddingUser, setIsAddingUser] = useState(false);

  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));
  }, []);

  const handleDelete = (id) => {
    const updatedUser = users.filter((user) => user.id !== id);
    setUsers(updatedUser);
  }

  const handleEdit = (user) => {
    setEditingUser(user);
    setName(user.name);
    setUsername(user.username);
    setEmail(user.email);
    setIsAddingUser(false);
    setIsModalOpen(true);
  }

  const handleUpdate = () => {
    const updatedUsers = users.map((user) => {
      if (user.id === editingUser.id) {
        return {
          ...user,
          name,
          username,
          email
        };
      }

      return user;
    });

    setUsers(updatedUsers);

    setEditingUser(null);
    setName('');
    setUsername('');
    setEmail('');
    setIsModalOpen(false);
  }

  const handleAdd = () => {
    setIsAddingUser(true);
    setIsModalOpen(true)
  }

  const handleSave = () => {
    const newUser = {
      id: Date.now(),
      name,
      username,
      email
    }

    setUsers([...users, newUser]);

    setName('');
    setUsername('');
    setEmail('');
    setIsModalOpen(false);
    setIsAddingUser(false);
  }

  return (
    <div className="relative">
      <div className="flex flex-col py-10">
        <div className="text-right mb-3">
          <button className="p-2 bg-violet-700 text-white rounded" onClick={handleAdd}>
            Add User
          </button>
        </div>
        <table className="table w-full border p-4">
          <thead className="table-header-group">
          <tr className="table-row py-4 border">
            <th className="table-cell text-left p-3">ID</th>
            <th className="table-cell text-left p-3">Name</th>
            <th className="table-cell text-left p-3">Username</th>
            <th className="table-cell text-left p-3">Email</th>
            <th className="table-cell text-left p-3">Actions</th>
          </tr>
          </thead>
          <tbody className="table-row-group">
          {users.map((user) => (
            <tr className="table-row border" key={user.id}>
              <td className="table-cell p-3">{user.id}</td>
              <td className="table-cell p-3">{user.name}</td>
              <td className="table-cell p-3">{user.username}</td>
              <td className="table-cell p-3">{user.email}</td>
              <td className="table-cell p-3">
                <button
                  className="p-2 bg-violet-700 text-white rounded mr-2"
                  onClick={() => handleEdit(user)}>
                  Edit
                </button>
                <button
                  className="p-2 bg-red-600 text-white rounded"
                  onClick={() => handleDelete(user.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div
              className="fixed inset-0 w-full h-full bg-black opacity-40"
              onClick={() => setIsModalOpen(false)}
            ></div>
            <div className="flex items-center min-h-screen px-4 py-8">
              <div className="relative w-full max-w-lg p-6 mx-auto bg-white rounded-md shadow-lg">
                <div className="mt-2 text-center sm:text-left">
                    <h4 className="text-lg font-medium text-gray-800 mb-4">
                      { isAddingUser ? "Add User" : "Edit User" }
                    </h4>
                    <form className="form flex flex-col">
                      <div className="form-item flex flex-col w-full mb-3">
                        <label htmlFor="name" className="mb-2">
                          Name
                        </label>
                        <input
                          className="p-2 rounded border w-full"
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div className="form-item flex flex-col w-full mb-3">
                        <label htmlFor="username" className="mb-2">
                          Username
                        </label>
                        <input
                          className="p-2 rounded border w-full"
                          type="text"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                        />
                      </div>
                      <div className="form-item flex flex-col w-full mb-3">
                        <label htmlFor="email" className="mb-2">
                          Email
                        </label>
                        <input
                          className="p-2 rounded border w-full"
                          type="text"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      </form>
                    <div className="items-center gap-2 mt-3 sm:flex">
                      { isAddingUser ? (<button
                        className="w-full mt-2 p-2.5 flex-1 text-white bg-red-600 rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
                        onClick={handleSave}
                      >
                        Save
                      </button>) : (<button
                        className="w-full mt-2 p-2.5 flex-1 text-white bg-red-600 rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
                        onClick={handleUpdate}
                      >
                        Edit
                      </button>)}

                      <button
                        className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                        onClick={() =>
                          setIsModalOpen(false)
                        }
                      >
                        Batal
                      </button>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default UserTable;
