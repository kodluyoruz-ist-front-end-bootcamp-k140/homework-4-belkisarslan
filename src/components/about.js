import { NavLink } from "react-router-dom"
import "../index.css"
export default function About(){
    return(
        <div className="card text-bg-dark">
        <img src="https://picsum.photos/id/882/800/600" className="card-img" alt="..."/>
        <div className="card-img-overlay">
          <h5 className="card-title text-center fs-1">Hakkımızda</h5>
          <p className="card-text text-center fs-5">Kahve demlemenin tekniklerinden bahsetmek için kurulduk.</p>
          <p className="card-text text-center"><NavLink className="nav-link-primary" aria-current="page" to="/">Blog yazılarımız için <i className="material-icons">arrow_back_ios</i></NavLink></p>
        </div>
      </div>
    )
}