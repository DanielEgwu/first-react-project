import { FaRegPaperPlane, FaRegEdit } from "react-icons/fa";
import { BiDollarCircle } from "react-icons/bi";
import { BsFillRocketFill, BsMagic, BsArrowRightCircle } from "react-icons/bs";
import { TfiShoppingCartFull } from "react-icons/tfi";
import '../style.css';
import Card from "./card"


export default function Features() {

    const paperplane = <FaRegPaperPlane />;
    const dollars = <BiDollarCircle />
    const rocket = <BsFillRocketFill />
    const pen = <FaRegEdit />
    const wand = <BsMagic />
    const cart = <TfiShoppingCartFull />
    const arrow = <BsArrowRightCircle />
  
    return (
        <div className="features">
            <div className="container card-cover">
                <div className="row  d-flex justify-content-center">
                    <Card 

                    id="1"
                        arrow={arrow}
                        title="Digital Marketing"
                        icon={paperplane}
                    />
                    <Card
                    id="2"
                        arrow={arrow}
                        title="Trade Shows"
                        icon={dollars} />
                    <Card
                    id="3"
                        arrow={arrow}
                        title="Branding"
                        icon={rocket} />

                    <Card
                    id="4"
                        arrow={arrow}
                        title="Content Creation"
                        icon={pen} />
                    <Card
                    id="5"
                        arrow={arrow}
                        title="Graphic Design"
                        icon={wand}
                    />
                    <Card
                    id="6"
                        arrow={arrow}
                        title="Media Buying"
                        icon={cart}
                    />
                </div>
            </div>
        </div>
    )
}