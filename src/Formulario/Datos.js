import Formulario from "./Formulario";
import { IconButton, TextField, Container, Button } from "@material-ui/core";
import { Delete, Add } from "@material-ui/icons"

export default class Datos extends Formulario {

    constructor(props) {
        super(props, "Datos");

        this.state = {
            lista: [{ ID: "", Nombre: "", Descripcion: "" }]
        };
    }

    render() {
        return (
            <Container>
                <h2>Datos</h2>
                {this.state.lista.map((datos, id) => (
                    <article key={id}>
                        <TextField
                            variant="standard"
                            type="text"
                            label="ID"
                            name="ID"
                            value={datos.ID}
                            onChange={event => { this.cambiarDatos(id, event) }}
                        />
                        <TextField
                            variant="standard"
                            
                            type="text"
                            label="Nombre"
                            name="Nombre"
                            value={datos.Nombre}
                            onChange={event => { this.cambiarDatos(id, event) }}
                        />
                        <TextField
                            variant="standard"
                            
                            type="text"
                            label="Descripcion"
                            name="Descripcion"
                            value={datos.Descripcion}
                            onChange={event => { this.cambiarDatos(id, event) }}
                        />
                        <IconButton
                            onClick={() => { this.borrarElemento(id) }}
                        ><Delete /></IconButton>
                    </article>
                ))}

                <Button
                    variant="outlined"
                    onClick={() => { this.nuevaFila({ ID: "", Nombre: "", Descripcion: "" }) }}
                    endIcon={<Add />}
                >Añadir Campos</Button>
            </Container>
        );
    }

}