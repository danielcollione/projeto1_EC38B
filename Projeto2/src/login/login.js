import React, {useState} from 'react';
import './login.css';
import axios from "axios";
import { useHistory } from 'react-router-dom';

function initialState(){
  return { email: '', password: ''};
}

export default function Login () {

  const [values, setValues] = useState(initialState);
  const history = useHistory();
  const [error,setError] = useState(0)

  function onChange(event){
    const {value, name} = event.target;

    setValues({
      ...values,
      [name]: value
    });
  }

  async function login({ user, password}){
    try{
      const token = await axios.post('https://reqres.in/api/login', values);
      return token
    } catch(err){
      console.log('usuario nao encontrado');
    }
  }

  async function onSubmit(event) {
    event.preventDefault();

    
    const token = await login(values);
    console.log('Token de autenticação: ', token);
    if(token){
      return history.push('/lojapokemon');
      
    } else {
      setError('Houve um problema de autenticação')
      console.log('houve um problema de autenticação');
    }
    
  }

  return (
    <div className="user-login">
    <h1 className="user-login__title">Acessar a Loja</h1>

    <form autoComplete="nope" onSubmit={onSubmit}>
      <div className="user-login__form-control">
        <label htmlFor="email">E-mail</label>
        <input id="email" type="text" name="email" autoComplete="off" onChange={onChange}
            value={values.email}/>
      </div>
      <div className="user-login__form-control">
        <label htmlFor="password">Senha</label>
        <input id="password" type="password" name="password" onChange={onChange}
            value={values.password}/>
      </div>
      {error === 0 ? null : <p style={{ color: "red" }}>{error}</p>}
      <button
        type="submit"
        theme="contained-green"
        className="user-login__submit-button"
        rounded
      >
        <p style={{fontWeight: 'bold', fontSize: 15, color: 'white', marginTop: 5}}>Entrar</p>
      </button>
    </form>
    
    <a href='/signup' style={{fontSize: 20, textAlign: 'center'}}>Cadastre-se aqui</a>
  </div>
  )
}