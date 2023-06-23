import { FaTwitter , FaSkype , FaVimeoV, FaBars} from "react-icons/fa";
import { BsFillRocketFill } from "react-icons/bs";



export default function Header() {
  return (

    <nav className="w-100 navbar navbar-expand-lg bg-black fixed-top">
      <div className="container mx-md-5 mx-0 pb-0 pb-2">
        <span className="navbar-brand logo " href="/#">SolutionM4</span>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <FaBars color="white"/>
        </button>

        <div className="collapse navbar-collapse  text-center d-md-flex justify-content-md-end" id="navbarText">

          <ul className="navbar-nav  mb-lg-0 ">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">Pricing</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">Contacts</a>
            </li>
          </ul>

          <div className="icons  pb-sm-3">

            <a href="/#"><FaTwitter /></a>
            <a href="/#"><FaSkype /></a>
            <a href="/#"><FaVimeoV /></a>
          </div>


          <a className="header-btn px-3 " href="/#"><BsFillRocketFill /> GET STARTED</a>

        </div>
      </div>

    </nav>


  )

}
