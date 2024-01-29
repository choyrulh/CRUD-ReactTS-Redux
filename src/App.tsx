import "./App.css";
import { Navbar } from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Create from "./components/Create";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Dashboard />
        <Create />
      </main>
    </>
  );
}

export default App;
