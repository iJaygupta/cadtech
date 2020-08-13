import React from 'react'
import './ProductCardHeading.scss'
const ProductCardHeading = (props) => {
    return (
        <div  id="PdCdHg">
            <h2 className="PdCdHg-title" style={{color:props.color}}>{props.name}</h2>
            <h3 className="PdCDHg-subtitle" style={{color:props.color}}>{props.description}</h3>
        </div>
    )
}

export default ProductCardHeading
