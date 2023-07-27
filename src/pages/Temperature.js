import { Helmet } from "react-helmet";
import TemperatureApp from "../componets/TemperatureApp";

function Temperature() {
  return (
    <>
      <Helmet>
        <title>Temperature App</title>
      </Helmet>
      <div className="container">
        <TemperatureApp />
      </div>
    </>
  )
}

export default Temperature
