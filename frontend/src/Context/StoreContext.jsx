import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const url = "http://localhost:4000";
    const [computer_list, setComputerList] = useState([]);
    const [cartItems, setCartItems] = useState({});
    const [token, setToken] = useState("");

    // Add item to cart ------------------------------------------------------------------------------------------------------------
    const addToCart = async (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
        } else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        }
        if (token) {
            await axios.post(`${url}/api/cart/add`, { itemId }, { headers: { token } });
        }
    };

    // Remove from cart -----------------------------------------------------------------------------------------------------------------
    const removeFromCart = async (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
        if (token) {
            await axios.post(`${url}/api/cart/remove`, { itemId }, { headers: { token } });
        }
    };

    // Calculate total cart amount ------------------------------------------------------------------------------------------------------
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = computer_list.find((product) => product._id === item);
                if (itemInfo) {
                    totalAmount += itemInfo.price * cartItems[item];
                }
            }
        }
        return totalAmount;
    };

    // Fetch computer list
    const fetchComputerList = async () => {
        try {
            const response = await axios.get(`${url}/api/computer/list`);
            console.log(response);
            setComputerList(response.data.data); // Update computer_list state with data from API
        } catch (error) {
            console.error("Failed to fetch computer list", error);
        }
    };

    // Load cart data with token
    const loadCartData = async (token) => {
        try {
            const response = await axios.post(`${url}/api/cart/get`, {}, { headers: { token } });
            setCartItems(response.data.cartData || {});  // Fallback to empty object
        } catch (error) {
            console.error("Failed to load cart data", error);
        }
    };

    // Fetch initial data on component mount
    useEffect(() => {
        async function loadData() {
            await fetchComputerList(); // Fetch computer list
            const storedToken = localStorage.getItem("token"); // Retrieve token from local storage
            if (storedToken) {
                setToken(storedToken); // Set token
                await loadCartData(storedToken); // Load cart data
            }
        }
        loadData();
    }, []);

    // Context value
    const contextValue = {
        url,
        computer_list,
        cartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        token,
        setToken,
        loadCartData,
        setCartItems,
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;