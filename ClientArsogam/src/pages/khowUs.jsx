//React-hooks
import { useEffect } from "react"
//Bull Image
import bullImage from './static/img/knowUs/bullKhow.png'
//Styles
import './static/styles/KhowUs.css'

function KhowUs(){

    useEffect(() => {
        document.title = "Conocenos"
    })

    return(
        <section className="sectionKhowUs">
            <div className="containerKhowUsLogo">
                <img src = {bullImage} alt="bullKnow" />
            </div>
            <div className="infoKhowUs">
                <h2>
                    Que es Arsogam?
                </h2>
                <p>
                    La Asociación Regenerativa y Sostenible de GANADEROS en la AMAZONIA ARSOGAM,
                    es una asociación que toma personería jurídica el 29 de mayo del 2024, con el objetivo
                    de promover y difundir modelos de ganadería en las regiones, basadas en prácticas regenerativas 
                    que promueven el mejoramiento del suelo, la protección del medio ambiente, la conservación de la selva
                    amazónica y el bienestar animal. Con ello logrando generarun impacto positivo tanto a nivel social como
                    ambiente. A su vez, la asociación fomenta la colaboración entre ganaderos, instituciones y
                    organizaciones no solo a nivel nacional si no internacional, para avanzar hacia un modelo de desarrollo
                    sostenibles  y resiliente en las regiones.
                </p>
            </div>
            <div className="infoKhowUs">
                <h2>
                    Su nombre
                </h2>
                <p>
                    Este nombre representa una transición de la ganadería tradicional a una ganadería regenerativa y Sostenible,
                    que permitió descrubir a un grupo de ganaderos en la región amazónica, que trabajan para desarrollar prácticas ganaderas sostenibles,
                    restaurando exosistemas dañados o agotados.
                </p>
            </div>
            <div className="infoKhowUs">
                <h2>
                    Mision
                </h2>
                <p>
                    Trabajar, promover y difundir la ganadería regenerativa, protegiendo el medio ambiente y la biodiversidad,
                    vinculando a la comunidad e impulsando el desarrollo económico y social de las Regiones.
                </p>
            </div>
            <div className="infoKhowUs">
                <h2>
                    Vision
                </h2>
                <p>
                    Seremos una asociación comprometida con la actividad ganadera, actuando como agentes de cambio
                    en la regeneración del ecosistema, la biodiversidad y el bienestar de la comunidad. A través de prácticas
                    innovadoras, buscando transformar la ganadería regenerativa en un motor socioeconómico sostenible, estableciendo
                    alianzas estratégicas a nivel local, nacional e internacional. 
                </p>
            </div>
        </section>
    )
}

export default KhowUs