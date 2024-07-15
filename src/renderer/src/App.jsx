import { Route, Routes } from "react-router-dom";
import '../src/App.css';
import Dashboard from "./View/Dashboard/Dashboard";
import AdminList from "./View/Admin/AdminList";

function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Dashboard />} />
        <Route path={"/admin-list"} element={<AdminList />} />
      </Routes>
    </>
  );
}
export default App;
