import jwtDecode from "jwt-decode";
import { useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import { logInActionCreator } from "./redux/features/userSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { User, UserInfo } from "./types/types";

function App() {
  const dispatch = useAppDispatch();
  const { logged } = useAppSelector((state: { user: User }) => state.user);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token as string) {
      const { username, name }: UserInfo = jwtDecode(token as string);
      dispatch(logInActionCreator({ username, name }));
      navigate("/home");
    }
  }, [dispatch, logged, navigate]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
