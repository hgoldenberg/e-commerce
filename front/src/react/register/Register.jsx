import React from "react";

export default ({ handleInputEmail, handleInputPass, handleSubmit, handleInputName, handleInputLastName, handleInputDirection, name,lastname,email,password,direccion}) => {
  return (
    <form onSubmit={handleSubmit}>
      NOMBRE: <input onChange={handleInputName} value={name} type="text" />
      APELLIDO: <input onChange={handleInputLastName} value={lastname} type="text" />
      DIRECCION: <input onChange={handleInputDirection} value={direccion} type="text" />
      EMAIL: <input onChange={handleInputEmail} value={email} type="email" />
      PASSWORD: <input onChange={handleInputPass} value={password} type="password" />
      <button type="submit" >
        Register
      </button>
    </form>
  );
};