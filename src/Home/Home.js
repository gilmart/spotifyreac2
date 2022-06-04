// TODO COMPONENTE ES UNA FUNCIOND E JS (AUNQ SE PUEDE HACER COMPONENTES EN FORMA DE CLASES POO)
import './Home.css'
import { FormularioRegistro } from '../Formulario/Formulario.js'
export function Home(){

    // TODO COMPONENTE DEBE RETORNAR UN HTML

    return(
        <section className='banner'>
            <FormularioRegistro/>
    
        </section>
    )
}