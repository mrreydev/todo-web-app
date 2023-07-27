import illustration from '../images/login-illustration.svg'
import { Button } from 'flowbite-react';
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

function Login () {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInputEmail = (event) => {
    const { value } = event.target;
    setEmail(value);
  }

  const handleInputPassword = (event) => {
    const { value } = event.target;
    setPassword(value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/home');
  }

  return (
    <div className="container">
      <div className="flex flex-col md:flex-row justify-center h-screen md:items-center">
        <div className="basis-full md:basis-1/2 flex p-3 md:p-5 lg:p-7">
          <img alt="illustration login" onDragStart={(event) => { event.preventDefault()}} src={illustration} className="my-auto"/>
        </div>
        <div className="basis-full md:basis-1/2 flex flex-col justify-start p-3 md:p-5 lg:p-7">
          <h3 className="text-2xl font-bold mb-3">Todo List</h3>
          <p className="text-base mb-4">Login untuk mulai mencatat todo</p>
          <form onSubmit={handleSubmit} method="post" className="form mb-6" action="#">
            <div className="form-item flex flex-col justify-start mb-6">
              <label htmlFor="username" className="text-base mb-2">Email</label>
              <input value={email} onInput={handleInputEmail} autoComplete="off" type="email" id="username" className="p-2 bg-white border border-slate-300 rounded outline-0" placeholder="Masukan email anda" />
            </div>
            <div className="form-item flex flex-col justify-start mb-6">
              <label htmlFor="password" className="text-base mb-2">Password</label>
              <input value={password} onInput={handleInputPassword} autoComplete="off" type="password" id="password" className="p-2 bg-white border border-slate-300 rounded outline-0" placeholder="Masukan password anda" />
            </div>
            <Button color="purple" className="w-full" type="submit">Login</Button>
          </form>
          <div className="flex justify-center">
            <div className="text-gray-800">Belum punya akun ? <Link to="/register" className="text-indigo-700">Register Disini</Link></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;
