//React-Hooks
import { useEffect } from "react"
//Styles
import './static/styles/main.css'
//Components
import CarouselHome from "../components/Slider"
//Images
import imgFarm from './static/img/knowFarm.png'

function Home(){

    useEffect(() => {
        document.title = "Pagina Principal"
    })

    return (
        <section className="sectionHome">
            <div className="containerInfoHome">
                <div className="containerTitle">
                    <h1 className="titleMain">ARSOGAM</h1>
                </div>
                <h3 className="subtitleMain">
                    ASOCIASION REGENERATIVA Y SOSTENIBLE
                    <br />
                    DE GANADEROS EN LA AMAZONIA    
                </h3>
                <div className="imageFarm">
                    <img className="subtitleImage" src={imgFarm} alt="farmImage" />
                </div>                
            </div>
            <div className="containerCarrousel">
                <CarouselHome />
            </div>                    
        </section>
    )
}

export default Home