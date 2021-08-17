import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../App.css"
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons'
export default function Success() {
    return (
        <div className="success-page">
            <section className="success-content">
                
                <FontAwesomeIcon className="successicon" icon={faCheckCircle} />
                <h1>Order Successful</h1>
                <p>Order ID: 562478DR</p>
                <hr />
                <p>Delivery Information</p>
                <p>Amaka Samuel 08156632789</p>
                <p>2B Reeva Complex, Warri, Delta State</p>
                <button>Continue Shopping</button>
                <button className="success-button">View Order</button>

            </section>
            
        </div>
    )
}
