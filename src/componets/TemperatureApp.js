import React, {useState} from "react";

function TemperatureApp () {
  const [temperatures, setTemperatures] = useState([
    {
      id: 1,
      name: 'reamur',
      value: '0'
    },
    {
      id: 2,
      name: 'fahrenheit',
      value: '0'
    },
    {
      id: 3,
      name: 'kelvin',
      value: '0'
    }
  ])
  const [value, setValue] = useState('')

  const handleChangeValue = () => {
    const tempEdit = temperatures.map((temperature) => {
      let value = 0

      switch (temperature.name) {
        case 'reamur':
          value = celciusToReamur()
          break
        case 'fahrenheit':
          value = celciusToFahrenheit()
          break
        case 'kelvin':
          value = celciusToKelvin()
          break
      }

      return {
        ...temperature,
        value
      }
    })

    setTemperatures(tempEdit)
  }

  // celcius to reamur
  const celciusToReamur = () => {
    let res = 0

    if (value) {
      res = Number(value) * (4 / 5)
    }

    return res
  }

  const celciusToFahrenheit = () => {
    let res = 0

    if (value) {
      res = Number(value) * 9 / 5 + 32
    }

    return res
  }

  const celciusToKelvin = () => {
    let res = 0

    if (value) {
      res = Number(value) + 273.15
    }

    return res
  }

  const handleClick = (event) => {
    setValue(value + event.target.name)
  }

  const handleClear = () => {
    setValue('')
    handleChangeValue()
  }

  const handleEqual = () => {
    handleChangeValue()
  }

  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-end  p-5  bg-slate-200">
        <div className="ms-auto text-base capitalize">
          Celcius
        </div>
        <div className="ms-auto text-2xl">
          {value || 0}
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 my-5">
        {
          temperatures.map((temperature, idx) => {
            return (
              <div key={idx} className="flex flex-col">
                <div className="text-base capitalize">
                  { temperature.name }
                </div>
                <div className="text-3xl">
                  { temperature.value }
                </div>
              </div>
            )
          })
        }
      </div>
      <div className="grid grid-cols-3 gap-4">
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
        {/* END : Third Row*/}
        {/* START : Fourth Row*/}
        <div className="basis-1/4">
          <button onClick={handleClick} name="0" className="p-2 rounded bg-slate-200 text-2xl font-bold w-full hover:bg-slate-300 transition duration-250 ease-in">
            0
          </button>
        </div>
        <div className="basis-1/4">
          <button onClick={handleClear} name="clear" className="p-2 rounded bg-slate-200 text-2xl font-bold w-full hover:bg-slate-300 transition duration-250 ease-in">
            CLEAR
          </button>
        </div>
        <div className="basis-1/4">
          <button onClick={handleEqual} name="=" className="p-2 rounded bg-slate-200 text-2xl font-bold w-full hover:bg-slate-300 transition duration-250 ease-in">
            =
          </button>
        </div>
        {/* END : Fourth Row*/}
      </div>
    </div>
  )
}

export default TemperatureApp
