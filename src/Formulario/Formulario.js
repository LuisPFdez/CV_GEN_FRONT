import React from "react";

export default class Formulario extends React.Component {

    constructor(props, nombre) {
        super(props);
        this.nombre = nombre;
        if (typeof this.props.manejador != "function") {
            throw Error("Es necesario pasar una funcion por la propiedad manejador");
        }
    }

    cambiarDatos = (id, e) => {
        //Evita el warning por cambiar directa
        const lista = [...this.state.lista];
        lista[id][e.target.name] = e.target.value;
        this.props.manejador(lista, this.nombre);
        this.setState({ lista: lista })
    }

    nuevaFila = (objeto) => {
        let lista = [...this.state.lista];
        lista.push(objeto);
        this.setState({ lista: lista });
    }

    borrarElemento = async (index) => {
        console.log(index);
        let lista = [...this.state.lista];
        lista.splice(index, 1);
        this.setState({ lista: lista });
    }

    getTitulo() {
        return this.titulo;
    }

}