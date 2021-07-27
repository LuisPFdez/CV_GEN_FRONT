import Formulario from "./Formulario";
import { IconButton, TextField, Container, Button } from "@material-ui/core";
import { Delete, Add } from "@material-ui/icons"

export default class Experiencia extends Formulario {

    constructor(props) {
        super(props, "Experiencia");

        this.state = {
            lista: [{ ID: "", Fecha_inicial: "", Fecha_fin: "", Empresa: "", Funcion: "", Ciudad: "", Link: "" }]
        };
    }

    render() {
        return (
            <Container>
                <h2>Experiencia</h2>
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
                            label="Fecha Inicial"
                            name="Fecha_inicial"
                            value={datos.Fecha_inicial}
                            onChange={event => { this.cambiarDatos(id, event) }}
                        />
                        <TextField
                            variant="standard"
                            type="text"
                            label="Fecha Final"
                            name="Fecha_fin"
                            value={datos.Fecha_fin}
                            onChange={event => { this.cambiarDatos(id, event) }}
                        />
                        <TextField
                            variant="standard"
                            type="text"
                            label="Empresa"
                            name="Empresa"
                            value={datos.Empresa}
                            onChange={event => { this.cambiarDatos(id, event) }}
                        />
                        <TextField
                            variant="standard"
                            type="text"
                            label="Funcion"
                            name="Funcion"
                            value={datos.Funcion}
                            onChange={event => { this.cambiarDatos(id, event) }}
                        />
                        <TextField
                            variant="standard"
                            type="text"
                            label="Ciudad"
                            name="Ciudad"
                            value={datos.Ciudad}
                            onChange={event => { this.cambiarDatos(id, event) }}
                        />
                        <TextField
                            variant="standard"
                            type="text"
                            label="Link"
                            name="Link"
                            value={datos.Link}
                            onChange={event => { this.cambiarDatos(id, event) }}
                        />
                        <IconButton
                            onClick={() => { this.borrarElemento(id) }}
                        ><Delete /></IconButton>
                    </article>
                ))}

                <Button
                    variant="outlined"
                    onClick={() => { this.nuevaFila({ ID: "", Fecha_inicial: "", Fecha_fin: "", Empresa: "", Funcion: "", Ciudad: "", Link: "" }) }}
                    endIcon={<Add />}
                >Añadir Campos</Button>
            </Container>
        );
    }

}