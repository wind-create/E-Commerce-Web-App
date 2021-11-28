import React from 'react'
import category1 from '../images/category-1.jpg'

function Categories() {
    return (
        <div className="categories">
            <div className="row">
                <div className="col-3">
                    <img src={category1} alt="one" />
                </div>
                <div className="col-3"></div>
                <div className="col-3"></div>
            </div>
        </div>
    )
}

export default Categories
