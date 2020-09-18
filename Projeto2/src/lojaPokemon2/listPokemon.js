import React, { useState, useEffect } from "react";
import axios from "axios";
import Water from "../imagens/5.png";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import PropTypes from 'prop-types';

export default function ListPokemon(props) {
  const [pokemon, setPokemon] = useState([]);
  const [preco, setPreco] = useState('5,00')

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/type/11").then((res) => {
      setPokemon(res.data.pokemon.map((p) => p.pokemon.name));
    });
  }, []);

  function handleComprar(event, pokemon){
    event.preventDefault();

    props.adicionarPokemon(pokemon);
    props.exibirMensagem(pokemon);

  }

  function render() {
    
    const cards = pokemon.map(pokemon => 
      <Card 
        
        style={{ width: "14rem", margin: "10px", float: "left" }}>
        <Card.Img variant="top" src={Water} />
        <Card.Body className="text-center">
          <Card.Title style={{ height: "40" }}>
            {pokemon}
          </Card.Title>
          <Card.Text>R$ {preco}</Card.Text>
          <Button variant="warning" style={{ width: "100%" }} onClick={(event) => handleComprar(event, pokemon)}>
            Adicionar
          </Button>
        </Card.Body>
      </Card>
    );
    return cards;
  }

  return render();

  // <div>
  //   {pokemon.map(p => (
  //     <div key={p}>{p}</div>
  //   ))}
  // </div>
}

ListPokemon.propTypes = {
  adicionarPokemon: PropTypes.func.isRequired,
  exibirMensagem: PropTypes.func.isRequired,
}
