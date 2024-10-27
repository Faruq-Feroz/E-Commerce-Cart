import React from 'react';

const UserCart = ({ cartCourses, deleteCourseFromCartFunction, totalAmountCalculationFunction }) => {
    return (
        <div className="cart">
            <h2>Shopping Cart</h2>
            <ul className="list-group">
                {cartCourses.map(item => (
                    <li className="list-group-item d-flex justify-content-between align-items-center" key={item.product.id}>
                        <span>
                            {item.product.name} - {item.quantity} x KES {item.product.price} = KES {item.product.price * item.quantity}
                        </span>
                        <button className="btn btn-danger" onClick={() => deleteCourseFromCartFunction(item.product)}>Remove</button>
                    </li>
                ))}
            </ul>
            <h3>Total: KES {totalAmountCalculationFunction()}</h3>
        </div>
    );
};

export default UserCart;
