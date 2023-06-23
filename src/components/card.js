// import { useState } from "react";

export default function Card(props) {
// const [card, setCard] =useState(0);
   return (
        
        <div className=" col-12 col-md-6 col-lg-4 mb-4">
            <div className="card card-wrapper rounded-0"  >
                {props.id == 1 && <div className="first"></div>}
                {props.id == 6 && <div className="last"></div>}
                <div className="item px-3  py-5 card-body text-center text-white" >
                    <a className="btn pb-2" href="/#">{props.icon} </a>
                    <h4>{props.title}</h4>
                    <p >Lorem ipsum dolor sit mattis amet consectetur adipiscing</p>
                    <a className="btn no-color " href="/#">{props.arrow}</a>
                </div>

            </div>
        </div>
    )
}