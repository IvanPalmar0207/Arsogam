//React-Hooks
import { useEffect } from "react"
//Styles
import './static/styles/main.css'

function Home(){

    useEffect(() => {
        document.title = "Pagina Principal"
    })

    return (
        <section>
            <div>
                <h1>ARSOGAM</h1>
                <h3>
                    ASOCIASIÓN REGENERATIVA Y SOSTENIBLE
                    <br />
                    DE GANADEROS EN LA AMAZONIA    
                </h3>
                <div>
                    Imagen o logo    
                </div>                
            </div>
            <div>
                Slider    
            </div>        
        </section>
    )
}

export default Home