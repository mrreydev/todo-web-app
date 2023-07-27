import CalculatorApp from "../componets/CalculatorApp";
import { Helmet } from "react-helmet";

function Calculator () {
  return (
    <>
      <Helmet>
        <title>Calculator App</title>
      </Helmet>
      <div className="container">
        <CalculatorApp />
      </div>
    </>
  )
}

export default Calculator
