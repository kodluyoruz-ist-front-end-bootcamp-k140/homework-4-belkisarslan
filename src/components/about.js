import { NavLink } from "react-router-dom"
import "../index.css"
export default function About(){
    return(
      <>
        <div className="card text-bg-dark">
        <img src="https://picsum.photos/id/882/800/600" className="card-img" alt="..."/>
        <div className="card-img-overlay">
          <h5 className="card-title text-center fs-1">Hakkımızda</h5>
          <p className="card-text text-center fs-5">Kahve demlemenin tekniklerinden bahsetmek için kurulduk.</p>
          <p className="card-text text-center"><NavLink className="nav-link-primary" aria-current="page" to="/blog">Blog yazılarımız için <i className="material-icons">arrow_back_ios</i></NavLink></p>
        </div>
      </div>
      <section id="teams" class="teams section-padding bg-light">
            <header class="section-header">
                <h2>Ekibimiz</h2>
                <p>Kahve İçiyoruz :D</p>
            </header>

            <div class="flex-items">
                <div>
                    <img src="https://i.pravatar.cc/1000?img=60" alt=""/>
                    <h2>İsim 1</h2>
                    <p>Kahve Uzmanı</p>
                </div>
                <div>
                    <img src="https://i.pravatar.cc/1000?img=44" alt=""/>
                    <h2>İsim 2</h2>
                    <p>Kahve Uzmanı</p>
                </div>
                <div>
                    <img src="https://i.pravatar.cc/1000?img=12" alt=""/>
                    <h2>İsim 3</h2>
                    <p>Kahve Uzmanı</p>
                </div>
            </div>
        </section>
      </>
    )
}