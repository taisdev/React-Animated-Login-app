import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import forgotImage from '../../assets/forgotImage.svg'
const Reset = ({ onLogin }) => {
    return (
        <div className="main-container --flex-center">
      <div className="form-container reset --bg-palette">
        <form className="form-control">
          <h2 className="--color-palette --text-center --m2">Nova senha</h2>
         <input type="email" className="inputs --width-100" placeholder="E-mail" />
         <button className="--btn --btn-block --btn-purple">Enviar</button>
         <span className="--text-sm --block --text-center --m2">
            Por favor, informe seu endereço de e-mail que enviaremos um link para criar uma nova senha.
         </span>
         <div className="close" onClick={onLogin}>
            <AiOutlineClose color='#BA68C8' size='20px'/>
         </div>
        </form>
      </div>
      <div className="img-container">
        <img src={forgotImage} alt="login" />
      </div>
    </div>
    )
}

export default Reset
