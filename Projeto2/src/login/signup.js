import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

function initialState() {
  return { user: "", password: "" };
}

export default function Login() {
  const [values, setValues] = useState(initialState);
  const [error, setError] = useState(0);
  const [errorPassword, setErrorWord] = useState(0);
  const history = useHistory();

  function onChange(event) {
    const { value, name } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  }

  async function signup({ user, password }) {
    try {
      const token = await axios.post("https://reqres.in/api/create", values);
      console.log(token);
      return token;
    } catch (err) {
      console.log("nao foi possivel cadastrar");
    }
  }

  async function onSubmit(event) {
    event.preventDefault();
    console.log(values.email);
    console.log(values.password);
    if (values.email === undefined) {
      setError("Preencha email para cadastrar!");
      console.log("Preencha email para cadastrar!");
    } else if (values.password === "") {
      setErrorWord("Preencha senha para cadastrar!");
    } else {
      const token = await signup(values);
      if (token) {
        return history.push("/login");
      } else {
        console.log("usuario nao cadastrado");
      }
    }
  }

  return (
    <div className="user-login">
      <h1 className="user-login__title">Cadastre-se</h1>
      <form autoComplete="nope" onSubmit={onSubmit}>
        <div className="user-login__form-control">
          <label htmlFor="email">Nome</label>
          <input
            id="name"
            type="text"
            name="name"
            autoComplete="off"
            onChange={onChange}
            value={values.name}
          />
        </div>
        <div className="user-login__form-control">
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="text"
            name="email"
            autoComplete="off"
            onChange={onChange}
            value={values.email}
          />
        </div>
        {error === 0 ? null : <p style={{ color: "red" }}>{error}</p>}
        <div className="user-login__form-control">
          <label htmlFor="password">Senha</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={onChange}
            value={values.password}
          />
        </div>
        {errorPassword === 0 ? null : <p style={{ color: "red" }}>{errorPassword}</p>}
        <button
          type="submit"
          theme="contained-green"
          className="user-login__submit-button"
          rounded
        >
          <p
            style={{
              fontWeight: "bold",
              fontSize: 15,
              color: "white",
              marginTop: 5,
            }}
          >
            Cadastrar
          </p>
        </button>
      </form>
      <a href="/login" style={{ fontSize: 20, textAlign: "center" }}>
        volte para página de Login
      </a>
    </div>
  );
}
