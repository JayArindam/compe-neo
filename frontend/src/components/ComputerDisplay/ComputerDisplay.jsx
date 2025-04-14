import React, { useContext } from 'react';
import './ComputerDisplay.css';
import Computer from '../Computer/Computer';

import { StoreContext } from '../../Context/StoreContext';

const ComputerDisplay = ({ category }) => {
    const { computer_list } = useContext(StoreContext);

    const filteredList = computer_list?.filter(
        (item) => category === "All" || category === item.category
    );

    console.log("Filtered List:", filteredList); // Check the filtered items

    return (
        <div className='computer-display' id='computer-display'>
            <h2>Explore Our Computers</h2> <br />
            <h3>Top picks curated for you with great value...</h3>
            <div className='computer-display-list'>
                {filteredList.map((item) => (
                    <Computer
                    key={item.id}  // Changed from _id to id to match the response
                    image={item.image}
                    name={item.name}
                    desc={item.description}
                    price={item.price}
                    id={item.id}  // Change id for consistency
                    />
                ))}
            </div>
        </div>
    );
};

export default ComputerDisplay;
