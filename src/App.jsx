import { Outlet } from "react-router";
function App() {
  return (
    <>
      <main>
        <Outlet />
      </main>
      <h1 className="text-red-600">App</h1>
    </>
  );
}

export default App;
