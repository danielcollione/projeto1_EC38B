import React, { useState, useEffect } from "react";
import ListPokemon from "./listPokemon";
import PropTypes from "prop-types";
import Alert from "react-bootstrap/Alert";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Modal,
} from "react-bootstrap";

export default function Pokemons(props) {

  const [exibirMsg, setExibirMsg] = useState(false);
  const [pokemon, setPokemon] = useState("");
  const [filtroPokemon, setFiltroPokemon] = useState('');

 



  function visivel() {
    return props.visivel ? null : "hidden";
  }

  function exibirMensagem(pokemon) {
    setExibirMsg(true);
    setPokemon(pokemon);
    setTimeout(() => {
      setExibirMsg(false);
    }, 3000);
  }

  function searchPokemon(PokemonToSearch){

  }

  return (
    <div className={visivel()}>
      <Alert variant="success" style={{ margin: "10px"}} show={exibirMsg}>
        <b>{pokemon}</b> adicionado com sucesso ao carrinho!
      </Alert>
      <Navbar>
        <Form inline>
          <FormControl 
          type="text"
          placeholder="Procurar Pokemon" 
          onChangeText={text => {searchPokemon(text)}}
          />
          <Button variant="danger">GO!</Button>
        </Form>
      </Navbar>
      <div style={{width: '100%', height: '800px' , overflowY: 'scroll', textAlign: "center"}}>
      <ListPokemon
            exibirMensagem={exibirMensagem}
            adicionarPokemon={props.adicionarPokemon}
          />
      </div>
      
    </div>
  );
}

Pokemons.propTypes = {
  visivel: PropTypes.bool.isRequired,
  adicionarPokemon: PropTypes.func.isRequired,
};
