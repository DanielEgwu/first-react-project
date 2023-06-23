import { FaPaperPlane } from "react-icons/fa"

export default function Hero() {
    return (
        <div className="hero-image">
            <div className="overlay"></div>
            <div className="container hero-content">
                <div className="row d-flex justify-content-center align-items-content">
                    <div className="col-md-10 col-12 ">
                        <h1 className="text-center"><strong>MARKETING SOLUTION AGENCY</strong></h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className="pt-md-2 pt-4  text-center">
                            <a className=" hero-btn"><FaPaperPlane fontSize="20px"/>&nbsp; GET STARTED</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}