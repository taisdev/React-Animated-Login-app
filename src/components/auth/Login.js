import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import loginImage from "../../assets/loginImage.svg";

const Login = ({ onRegister, onReset }) => {
  const [showPassword, setShowPassword] = useState(false)

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  }
  
  return (
    <div className="main-container --flex-center">
      <div className="img-container">
        <img src={loginImage} alt="login" />
      </div>
      <div className="form-container --bg-palette">
        <form className="form-control">
          <h2 className="--color-palette --text-center --m2">Login</h2>
         <input type="text" className="inputs --width-100" placeholder="Usuário" />
         <div className="password">
         <input type={showPassword ? "text" : "password"} className="inputs --width-100" placeholder="Senha" />
         <span className="icon" onClick={handleTogglePassword}>
          {showPassword ? <AiOutlineEye size="15" color="#BA68C8"/> : <AiOutlineEyeInvisible size="15" color="#BA68C8"/>}
         </span>
         </div>
         <button className="--btn --btn-block --btn-purple">Entrar</button>
         <div className="--m">
         <button className="--color-palette --btn-link" onClick={onReset}>Esqueceu sua senha?</button>
         <span className="--text-sm --block">Não possui conta? 
         <button className="--color-palette --btn-link" onClick={onRegister}> Cadastre-se</button></span>
         </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
