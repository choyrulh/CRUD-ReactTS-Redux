import "./App.css";
import { Navbar } from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Create from "./components/Create";
import { useSelector } from "react-redux";
import { RootState } from "@reduxjs/toolkit/query";
import Update from "./components/update";

function App() {
  const isModalOpen = useSelector((state: RootState) => state.modal.isOpen);
  console.log(isModalOpen);
  return (
    <>
      <Navbar />
      <main>
        <Dashboard />
        {isModalOpen && <Create />}
        {/* {isModalOpen && <Update />} */}
      </main>
    </>
  );
}

export default App;
