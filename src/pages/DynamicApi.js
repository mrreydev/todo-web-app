import { Helmet } from "react-helmet";
import UserTable from "../componets/dynamic-api/UserTable";

function DynamicApi () {
  return (
    <>
      <Helmet>
        <title>DynamicApi</title>
      </Helmet>
      <div className="container">
        <UserTable />
      </div>
    </>
  )
}

export default DynamicApi
