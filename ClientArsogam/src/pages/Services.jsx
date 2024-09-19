//React-hooks
import { useEffect } from "react";

function Services(){

    useEffect(() => {
        document.title = "Servicios"
    })

    return(
        <div>
            Servicios
        </div>
    )

}

export default Services