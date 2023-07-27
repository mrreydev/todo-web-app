import illustration from '../images/login-illustration.svg'
import { Button } from 'flowbite-react';
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

function Login () {
  const navigate = useNavigate();
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleInputName = (event) => {
    const { value } = event.target
    setName(value)
  }

  const handleInputPhone = (event) => {
    const { value } = event.target
    setPhone(value)
  }

  const handleInputEmail = (event) => {
    const { value } = event.target
    setEmail(value)
  }

  const handleInputPassword = (event) => {
    const { value } = event.target
    setPassword(value)
  }

  const handleInputConfirmPassword = (event) => {
    const { value } = event.target
    setConfirmPassword(value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/profile')
  }

  return (
    <div className="container">
      <div className="flex flex-col md:flex-row justify-center h-screen md:items-center">
        <div className="basis-full md:basis-1/2 flex p-3 md:p-5 lg:p-7">
          <img alt="illustration login" onDragStart={(event) => { event.preventDefault()}} src={illustration} className="my-auto"/>
        </div>
        <div className="basis-full md:basis-1/2 flex flex-col justify-start p-3 md:p-5 lg:p-7">
          <h3 className="text-2xl font-bold mb-3">Todo List</h3>
          <p className="text-base mb-4">Register untuk mulai mencatat todo</p>
          <form onSubmit={handleSubmit} method="post" className="form mb-6" action="#">
            <div className="form-item flex flex-col justify-start mb-6">
              <label htmlFor="name" className="text-base mb-2">Nama</label>
              <input value={name} onInput={handleInputName} autoComplete="off" type="text" id="name" className="p-2 bg-white border border-slate-300 rounded outline-0" placeholder="Masukan nama anda" />
            </div>
            <div className="form-item flex flex-col justify-start mb-6">
              <label htmlFor="phone" className="text-base mb-2">Nomor Telepon</label>
              <input value={phone} onInput={handleInputPhone} autoComplete="off" type="number" id="phone" className="p-2 bg-white border border-slate-300 rounded outline-0" placeholder="Masukan nomor telepon anda" />
            </div>
            <div className="form-item flex flex-col justify-start mb-6">
              <label htmlFor="email" className="text-base mb-2">Email</label>
              <input value={email} onInput={handleInputEmail} autoComplete="off" type="email" id="email" className="p-2 bg-white border border-slate-300 rounded outline-0" placeholder="Masukan email anda" />
            </div>
            <div className="form-item flex flex-col justify-start mb-6">
              <label htmlFor="password" className="text-base mb-2">Password</label>
              <input value={password} onInput={handleInputPassword} autoComplete="off" type="password" id="password" className="p-2 bg-white border border-slate-300 rounded outline-0" placeholder="Masukan password anda" />
            </div>
            <div className="form-item flex flex-col justify-start mb-6">
              <label htmlFor="confirm-password" className="text-base mb-2">Konfirmasi Password</label>
              <input value={confirmPassword} onInput={handleInputConfirmPassword} autoComplete="off" type="password" id="confirm-password" className="p-2 bg-white border border-slate-300 rounded outline-0" placeholder="Masukan konfirmasi password anda" />
            </div>
            <Button color="purple" className="w-full" type="submit">Register</Button>
          </form>
          <div className="flex justify-center">
            <div className="text-gray-800">Sudah punya akun ? <Link to="/" className="text-indigo-700">Login Disini</Link></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;
