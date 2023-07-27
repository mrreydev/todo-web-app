import { Helmet } from "react-helmet";
import CrudMahasiswa from "../componets/CrudMahasiswa";

function Mahasiswa() {
  return (
    <>
      <Helmet>
        <title>CRUD Mahasiswa</title>
      </Helmet>
      <div className="container">
        <CrudMahasiswa />
      </div>
    </>
  )
}

export default Mahasiswa
