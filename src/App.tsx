import { Route, Routes } from "react-router-dom";
import { RoutesPaths } from "./models/enums/routesPaths";
import { Login } from "./pages/Login";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Routes>
        <Route path={RoutesPaths.Login} element={<Login />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
        draggable
        theme="colored"
      />
    </>
  );
}

export default App;
