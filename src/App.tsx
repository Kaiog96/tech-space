import { Route, Routes, useNavigate } from "react-router-dom";
import { RoutesPaths } from "./models/enums/routesPaths";
import { Login } from "./pages/Login";
import { ToastContainer } from "react-toastify";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebaseConection";
import { Feed } from "./pages/Feed";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();

  const checkLogin = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate(RoutesPaths.Feed);
      } else {
        navigate(RoutesPaths.Login);
      }
    });
  };

  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <>
      <Routes>
        <Route path={RoutesPaths.Login} element={<Login />} />
        <Route path={RoutesPaths.Feed} element={<Feed />} />
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
