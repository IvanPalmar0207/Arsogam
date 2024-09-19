//React-hooks
import { useEffect } from "react";

function News(){

    useEffect(() => {
        document.title = "Noticias"
    })

    return(
        <div>
            Noticias
        </div>
    )

}

export default News