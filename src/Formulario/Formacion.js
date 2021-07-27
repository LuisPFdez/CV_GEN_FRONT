import Formulario from "./Formulario";
import { IconButton, TextField, Container, Button } from "@material-ui/core";
import { Delete, Add } from "@material-ui/icons"

export default class Formacion extends Formulario {

    constructor(props) {
        super(props, "Formacion");

        this.state = {
            lista: [{ ID: "", Fecha_inicial: "", Fecha_fin: "", Titulo: "", Centro: "", Ciudad: "", Link: "" }]
        };
    }

    render() {
        return (
            <Container>
                <h2>Formacion</h2>
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
                            label="Titulo"
                            name="Titulo"
                            value={datos.Titulo}
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
                    onClick={() => { this.nuevaFila({ ID: "", Fecha_inicial: "", Fecha_fin: "", Titulo: "", Centro: "", Ciudad: "", Link: "" }) }}
                    endIcon={<Add />}
                >Añadir Campos</Button>
            </Container>
        );
    }

}