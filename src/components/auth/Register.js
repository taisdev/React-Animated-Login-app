import React, { useEffect, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { GoPrimitiveDot } from "react-icons/go";
import { FaCheck } from "react-icons/fa";
import accountImage from "../../assets/accountImage.svg";

const Register = ({ onLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordRules, setShowPasswordRules] = useState(false);
  const [pass, setPass] = useState("");
  const [passLetter, setPassLetter] = useState(false);
  const [passNumber, setPassNumber] = useState(false);
  const [passChar, setPassChar] = useState(false);
  const [passLength, setPassLength] = useState(false);
  const [passComplete, setPassComplete] = useState(false);

  const handleShowRules = () => {
    setShowPasswordRules(true);
  };
  
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  }
  const handlePasswordChange = (e) => {
    setPass(e.target.value);
  };

  useEffect(() => {
    // maiúsculas e minúsculas
    if (pass.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
      setPassLetter(true);
    } else {
      setPassLetter(false);
    }

    // números
    if (pass.match(/([0-9])/)) {
      setPassNumber(true);
    } else {
      setPassNumber(false);
    }

    // símbolos
    if (pass.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
      setPassChar(true);
    } else {
      setPassChar(false);
    }

    // caracteres
    if (pass.length > 7) {
      setPassLength(true);
    } else {
      setPassLength(false);
    }

    // senha completa
    if (passNumber && passLetter && passChar && passLength) {
      setPassComplete(true);
      setShowPasswordRules(false);
    } else {
      setPassComplete(false);
      setShowPasswordRules(true);
    }
  }, [pass, passLetter, passNumber, passChar, passLength]);

  return (
    <div className="main-container --flex-center">
      <div className="form-container --bg-palette">
        <form className="form-control">
          <h2 className="--color-palette --text-center --m2">Criar conta</h2>
          <input
            type="text"
            className="inputs --width-100"
            placeholder="Usuário"
          />
          <input
            type="email"
            className="inputs --width-100"
            placeholder="E-mail"
          />
          <div className="password">
            <input
              type={showPassword ? "text" : "password"}
              className="inputs --width-100"
              placeholder="Senha"
              onFocus={handleShowRules}
              value={pass}
              onChange={handlePasswordChange}
            />
            <span className="icon" onClick={handleTogglePassword}>
              { showPassword ? (
                <AiOutlineEye size="15" color="#BA68C8" />
              ) : (
                <AiOutlineEyeInvisible size="15" color="#BA68C8" />
              )}
            </span>
          </div>
          <button
            className={passComplete ? "--btn --btn-block --btn-purple" : "--btn --btn-block --btn-purple btn-disabled" }
            disabled={!passComplete}
          >
            Cadastrar
          </button>
          <span className="--text-sm --block --m">
            Já possui uma conta?
            <button className="--color-palette --btn-link" onClick={onLogin}>
              Faça login
            </button>
          </span>
          <div className={showPasswordRules ? "show-rules" : "hide-rules"}>
            <ul className="--list-style-none --card --text-sm --bg-light --m --p">
              <p className="--text-sm --fw-bold --color-palette">
                A senha deve conter:
              </p>
              <li className={passNumber ? "pass-green" : "pass-red"}>
                <span className="--align-center">
                {passNumber ? <FaCheck /> : <GoPrimitiveDot />}
                  &nbsp;Números
                </span>
              </li >
              <li className={passLetter ? "pass-green" : "pass-red"}>
                <span className="--align-center">
                {passLetter ? <FaCheck /> : <GoPrimitiveDot />}
                  &nbsp;Letras maiúsculas e minúsculas
                </span>
              </li>
              <li className={passChar ? "pass-green" : "pass-red"}>
                <span className="--align-center">
                {passChar ? <FaCheck /> : <GoPrimitiveDot />}
                  &nbsp;Símbolos (exemplo: !"£$%^*&*)
                </span>
              </li>
              <li className={passLength ? "pass-green" : "pass-red"}>
                <span className="--align-center">
                {passLength ? <FaCheck /> : <GoPrimitiveDot />}
                  &nbsp;Ao menos 8 caracteres
                </span>
              </li>
            </ul>
          </div>
        </form>
      </div>
      <div className="img-container">
        <img src={accountImage} alt="login" />
      </div>
    </div>
  );
};

export default Register;
