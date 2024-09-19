//React-hooks
import { useEffect } from "react"

function KhowUs(){

    useEffect(() => {
        document.title = "Conocenos"
    })

    return(
        <div>
            Conocenos
        </div>
    )
}

export default KhowUs