import {useEffect, useState} from "react";

function CrudMahasiswa() {
  const baseUrl = process.env.REACT_APP_BASE_API_URL

  const [students, setStudents] = useState([]);

  const [editingStudent, setEditingStudent] = useState(null);

  const [nim, setNim] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [major, setMajor] = useState('');
  const [yearClass, setYearClass] = useState('');

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddingStudent, setIsAddingStudent] = useState(false);

  useEffect(() => {
    handleGetStudents()
  }, []);

  const handleGetStudents = async () => {
    const url = `${baseUrl}/api/mahasiswa`;

    try {
      const resp = await fetch(url)
      const data = await resp.json()
      setStudents(data.data)
    } catch (error) {
      console.log(error)
    }
  }

  const clearForm = () => {
    setNim('');
    setEmail('');
    setName('');
    setAddress('');
    setMajor('');
    setYearClass('');
  }

  const handleDelete = async (id) => {
    if (window.confirm('Apakah anda yakin ingin menghapus data?')) {

      try {
        const resp = await fetch(`${baseUrl}/api/mahasiswa/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-type': 'application/json; charset=UTF-8'
          }
        })

        await resp.json();

        await alert('Berhasil Meghapus Data Mahasiswa');

        await handleGetStudents();
      } catch (error) {
        console.log(error)
      }
    }
  }

  const handleEdit = (student) => {
    setEditingStudent(student);

    setNim(student.nim);
    setEmail(student.email);
    setName(student.nama);
    setAddress(student.alamat);
    setMajor(student.prodi);
    setYearClass(student.angkatan);

    setIsAddingStudent(false);
    setIsModalOpen(true);
  }

  const handleUpdate = async () => {
    const edited = {
      nim,
      email,
      nama: name,
      alamat: address,
      prodi: major,
      angkatan: yearClass
    }

    try {
      const resp = await fetch(`${baseUrl}/api/mahasiswa/${editingStudent.id}`, {
        method: 'PUT',
        body: JSON.stringify(edited),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      })

      await resp.json();

      await alert('Berhasil Mengubah Data Mahasiswa');

      await handleGetStudents();

      setEditingStudent(null);
      clearForm();
      setIsModalOpen(false);
    } catch (error) {
      console.log(error)
    }
  }

  const handleAdd = () => {
    setIsAddingStudent(true);
    setIsModalOpen(true)
  }

  const handleSave = async () => {
    const newStudent = {
      nim,
      email,
      nama: name,
      alamat: address,
      prodi: major,
      angkatan: yearClass
    }

    try {
      const resp = await fetch(`${baseUrl}/api/mahasiswa`, {
        method: "POST",
        body: JSON.stringify(newStudent),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      });

      await resp.json();

      await alert('Berhasil Menambah Data Mahasiswa');

      await handleGetStudents();

      clearForm();
      setIsModalOpen(false);
      setIsAddingStudent(false);
    } catch (error) {
      console.log(error)
    }
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
            <th className="table-cell text-left p-3">NIM</th>
            <th className="table-cell text-left p-3">Name</th>
            <th className="table-cell text-left p-3">Prodi</th>
            <th className="table-cell text-left p-3">Email</th>
            <th className="table-cell text-left p-3">Angkatan</th>
            <th className="table-cell text-left p-3">Actions</th>
          </tr>
          </thead>
          <tbody className="table-row-group">
          {students.map((student) => (
            <tr className="table-row border" key={student.id}>
              <td className="table-cell p-3">{student.id}</td>
              <td className="table-cell p-3">{student.nim}</td>
              <td className="table-cell p-3">{student.nama}</td>
              <td className="table-cell p-3">{student.prodi}</td>
              <td className="table-cell p-3">{student.email}</td>
              <td className="table-cell p-3">{student.angkatan}</td>
              <td className="table-cell p-3">
                <button
                  className="p-2 bg-violet-700 text-white rounded mr-2"
                  onClick={() => handleEdit(student)}>
                  Edit
                </button>
                <button
                  className="p-2 bg-red-600 text-white rounded"
                  onClick={() => handleDelete(student.id)}>
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
                    { isAddingStudent ? "Tambah Mahasiswa" : "Edit Mahasiswa" }
                  </h4>
                  <form className="form flex flex-col">
                    <div className="form-item flex flex-col w-full mb-3">
                      <label htmlFor="nim" className="mb-2">
                        NIM
                      </label>
                      <input
                        className="p-2 rounded border w-full"
                        type="text"
                        value={nim}
                        onChange={(e) => setNim(e.target.value)}
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
                      <label htmlFor="name" className="mb-2">
                        Alamat
                      </label>
                      <textarea
                        className="p-2 rounded border w-full"
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </div>
                    <div className="form-item flex flex-col w-full mb-3">
                      <label htmlFor="name" className="mb-2">
                        Prodi
                      </label>
                      <input
                        className="p-2 rounded border w-full"
                        type="text"
                        value={major}
                        onChange={(e) => setMajor(e.target.value)}
                      />
                    </div>
                    <div className="form-item flex flex-col w-full mb-3">
                      <label htmlFor="name" className="mb-2">
                        Tahun Angkatan
                      </label>
                      <input
                        className="p-2 rounded border w-full"
                        type="number"
                        value={yearClass}
                        onChange={(e) => setYearClass(e.target.value)}
                      />
                    </div>
                  </form>
                  <div className="items-center gap-2 mt-3 sm:flex">
                    { isAddingStudent ? (<button
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

export default CrudMahasiswa;
