import React, { useState } from "react";

function CalculatorApp () {
  const [result, setResult] = useState(0)
  const [value, setValue] = useState('')

  const handleClick = (event) => {
    setValue(value + event.target.name)
  }

  const handleClear = () => {
    setValue('')
    setResult(0)
  }

  const handleEqual = () => {
    setResult(eval(value))
  }

  return (
    <div className="flex flex-col">
      <div className="text-right p-5 bg-slate-200 text-2xl">
        {value}
      </div>
      <div className="text-right p-5 text-2xl font-bold">
        {result}
      </div>
      <div className="grid grid-cols-4 gap-4">
        {/* START : First Row*/}
        <div className="basis-1/4">
          <button onClick={handleClick} name="7" className="p-2 rounded bg-slate-200 text-2xl font-bold w-full hover:bg-slate-300 transition duration-250 ease-in">
            7
          </button>
        </div>
        <div className="basis-1/4">
          <button onClick={handleClick} name="8" className="p-2 rounded bg-slate-200 text-2xl font-bold w-full hover:bg-slate-300 transition duration-250 ease-in">
            8
          </button>
        </div>
        <div className="basis-1/4">
          <button onClick={handleClick} name="9" className="p-2 rounded bg-slate-200 text-2xl font-bold w-full hover:bg-slate-300 transition duration-250 ease-in">
            9
          </button>
        </div>
        <div className="basis-1/4">
          <button onClick={handleClick} name="/" className="p-2 rounded bg-slate-200 text-2xl font-bold w-full hover:bg-slate-300 transition duration-250 ease-in">
            /
          </button>
        </div>
        {/* END : First Row*/}
        {/* START : Second Row*/}
        <div className="basis-1/4">
          <button onClick={handleClick} name="4" className="p-2 rounded bg-slate-200 text-2xl font-bold w-full hover:bg-slate-300 transition duration-250 ease-in">
            4
          </button>
        </div>
        <div className="basis-1/4">
          <button onClick={handleClick} name="5" className="p-2 rounded bg-slate-200 text-2xl font-bold w-full hover:bg-slate-300 transition duration-250 ease-in">
            5
          </button>
        </div>
        <div className="basis-1/4">
          <button onClick={handleClick} name="6" className="p-2 rounded bg-slate-200 text-2xl font-bold w-full hover:bg-slate-300 transition duration-250 ease-in">
            6
          </button>
        </div>
        <div className="basis-1/4">
          <button onClick={handleClick} name="*" className="p-2 rounded bg-slate-200 text-2xl font-bold w-full hover:bg-slate-300 transition duration-250 ease-in">
            *
          </button>
        </div>
        {/* END : Second Row*/}
        {/* START : Third Row*/}
        <div className="basis-1/4">
          <button onClick={handleClick} name="1" className="p-2 rounded bg-slate-200 text-2xl font-bold w-full hover:bg-slate-300 transition duration-250 ease-in">
            1
          </button>
        </div>
        <div className="basis-1/4">
          <button onClick={handleClick} name="2" className="p-2 rounded bg-slate-200 text-2xl font-bold w-full hover:bg-slate-300 transition duration-250 ease-in">
            2
          </button>
        </div>
        <div className="basis-1/4">
          <button onClick={handleClick} name="3" className="p-2 rounded bg-slate-200 text-2xl font-bold w-full hover:bg-slate-300 transition duration-250 ease-in">
            3
          </button>
        </div>
        <div className="basis-1/4">
          <button onClick={handleClick} name="-" className="p-2 rounded bg-slate-200 text-2xl font-bold w-full hover:bg-slate-300 transition duration-250 ease-in">
            -
          </button>
        </div>
        {/* END : Third Row*/}
        {/* START : Fourth Row*/}
        <div className="basis-1/4">
          <button onClick={handleClick} name="0" className="p-2 rounded bg-slate-200 text-2xl font-bold w-full hover:bg-slate-300 transition duration-250 ease-in">
            0
          </button>
        </div>
        <div className="basis-1/4">
          <button onClick={handleClick} name="." className="p-2 rounded bg-slate-200 text-2xl font-bold w-full hover:bg-slate-300 transition duration-250 ease-in">
            .
          </button>
        </div>
        <div className="basis-1/4">
          <button onClick={handleEqual} name="=" className="p-2 rounded bg-slate-200 text-2xl font-bold w-full hover:bg-slate-300 transition duration-250 ease-in">
            =
          </button>
        </div>
        <div className="basis-1/4">
          <button onClick={handleClick} name="+" className="p-2 rounded bg-slate-200 text-2xl font-bold w-full hover:bg-slate-300 transition duration-250 ease-in">
            +
          </button>
        </div>
        {/* END : Fourth Row*/}
      </div>
      <div className="flex justify-center mt-4">
        <div className="">
          <button onClick={handleClear} name="clear" className="p-2 rounded bg-slate-200 text-2xl font-bold w-full hover:bg-slate-300 transition duration-250 ease-in">
            CLEAR
          </button>
        </div>
      </div>
    </div>
  )
}

export default CalculatorApp
