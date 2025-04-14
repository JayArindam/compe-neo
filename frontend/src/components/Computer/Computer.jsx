import React, { useContext } from 'react';
import './Computer.css';
import { StoreContext } from '../../Context/StoreContext';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { AiOutlinePlus } from 'react-icons/ai';

const Computer = ({ image, name, price, desc, id }) => {
    const { cartItems, addToCart, removeFromCart, url } = useContext(StoreContext);

    const handleAddToCart = () => {
        addToCart(id);
    };

    const handleRemoveFromCart = () => {
        removeFromCart(id);
    };

    return (
        <div className='computer-item'>
            <div className='computer-img-container'>
                <img className='computer-item-image' src={`${url}/images/${image}`} alt={name} />
                <div className='quantity-control'>
                    <p className='quantity-label'></p>
                    {!cartItems[id] ? (
                        <div className="quantity-btn single">
                            <AiOutlinePlus onClick={handleAddToCart} />
                        </div>
                    ) : (
                        <div className="quantity-btn-group">
                            <FaMinus onClick={handleRemoveFromCart} />
                            <span>{cartItems[id]}</span>
                            <FaPlus onClick={handleAddToCart} />
                        </div>
                    )}
                </div>
            </div>
            <div className="computer-item-info">
                <div className="computer-item-name-rating">
                    <p>{name}</p>
                    {/* <img src="https://i.ibb.co/qRJyW7r/star.png" alt="Rating stars" /> */}
                </div>
                <p className="computer-item-desc">{desc}</p>
                <p className="computer-item-price">Rs. {price}</p>
            </div>
        </div>
    );
};

export default Computer;
