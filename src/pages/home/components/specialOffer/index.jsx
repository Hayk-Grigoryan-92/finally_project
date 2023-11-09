import { Link } from "react-router-dom"
import './style.scss'

export const SpecialOffer = (props) => {

    return (
        <div className="offerContainer" style={{backgroundImage:`url(${props.image})`}}>
            <div>
                <h6>{props.tittle}</h6>
                <h3>{props.description}</h3>
                <Link>{props.submit}</Link>
            </div>
        </div>
    )
}