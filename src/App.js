import { useContext, useState } from "react";
import "./App.css";
import LoginFrom from "./components/LoginFrom";
import Navigation from "./components/Navigation";
import SigninForm from "./components/SigninForm";
import UserForm from "./components/UserForm";
import AuthContext from "./contexts/AuthContext";

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <div className="container">
      <Navigation />
      {authCtx.isLogin && <UserForm />}
      {!authCtx.isLogin && authCtx.isSignup && <SigninForm />}
      {!authCtx.isLogin && !authCtx.isSignup && <LoginFrom />}
    </div>
  );
}

export default App;
