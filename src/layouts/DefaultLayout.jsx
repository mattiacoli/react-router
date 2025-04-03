import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Alert from "../components/Alert";

export default function DefaultLayout() {

  return (

    <>
      <Header />
      <Alert />
      <Outlet />
      <Footer />
    </>


  )

}