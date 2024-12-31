import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <h1 className="text-red-600">App</h1>
    </>
  );
}

export default App;
