import { NavLink } from "react-router-dom"
import "../index.css"
export default function Page404(){
    return(
        <div>
        <h1>Üzgünüz bir şeyler ters gitti <i className="material-icons">sentiment_dissatisfied</i></h1>
        <NavLink className="nav-link-primary" aria-current="page" to="/">Anasayfaya geri dön</NavLink>
        </div>
        
    )
}