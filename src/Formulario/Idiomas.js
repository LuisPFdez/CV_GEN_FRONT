import Formulario from "./Formulario";
import { IconButton, TextField, Container, Button } from "@material-ui/core";
import { Delete, Add } from "@material-ui/icons"

export default class Idiomas extends Formulario {

    constructor(props) {
        super(props, "Idiomas");

        this.state = {
            lista: [{ ID: "", Idioma: "", Nivel: "", Centro: "" }]
        };

    }

    render() {
        return (
            <Container>
                <h2>Idiomas</h2>
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
                            label="Idioma"
                            name="Idioma"
                            value={datos.Idioma}
                            onChange={event => { this.cambiarDatos(id, event) }}
                        />
                        <TextField
                            variant="standard"
                            
                            type="text"
                            label="Nivel"
                            name="Nivel"
                            value={datos.Nivel}
                            onChange={event => { this.cambiarDatos(id, event) }}
                        />
                        <TextField
                            variant="standard"
                            
                            type="text"
                            label="Centro"
                            name="Centro"
                            value={datos.Centro}
                            onChange={event => { this.cambiarDatos(id, event) }}
                        />
                        <IconButton
                            onClick={() => { this.borrarElemento(id) }}
                        ><Delete /></IconButton>
                    </article>
                ))}

                <Button
                    variant="outlined"
                    onClick={() => { this.nuevaFila({ ID: "", Idioma: "", Nivel: "", Centro: "" }) }}
                    endIcon={<Add />}
                >Añadir Campos</Button>
            </Container>
        );
    }

}