import React, { useState } from "react";
import axios from "axios";
import "./UserQuery.css";
import { toast } from "react-toastify";

const url = "http://localhost:4000";

const UserQuery = () => {
    const [data, setData] = useState({
        name: "",
        mail: "",
        query: ""
    });

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        try {
            // Map 'name' to 'user' as required by the API
            const payload = {
                user: data.name,
                mail: data.mail,
                query: data.query
            };
    
            const response = await axios.post(`${url}/api/query/send`, payload);
    
            if (response.data.success) {
                toast.success(response.data.message);
                setData({
                    name: "",
                    mail: "",
                    query: ""
                });
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error("Something went wrong. Please try again.");
            console.error(error);
        }
    };
    
    const onChangeHandler = (event) => { // clears the values
        const { name, value } = event.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
    };

    return (
        <div className="query-container">
            <div className="query-box">
                <form className="flex-col" onSubmit={onSubmitHandler}>
                    <h2>Submit Your Query</h2>
    
                    <div className="query-field flex-col">
                        <p>User Name</p>
                        <input
                            name="name"
                            onChange={onChangeHandler}
                            value={data.name}
                            type="text"
                            placeholder="Enter your name here"
                            required
                        />
                    </div>
    
                    <div className="query-field flex-col">
                        <p>User Mail</p>
                        <input
                            name="mail"
                            onChange={onChangeHandler}
                            value={data.mail}
                            type="email"
                            placeholder="Enter your mail address here"
                            required
                        />
                    </div>
    
                    <div className="query-field flex-col">
                        <p>Query Description</p>
                        <textarea
                            name="query"
                            onChange={onChangeHandler}
                            value={data.query}
                            rows={6}
                            placeholder="Write your query here"
                            required
                        />
                    </div>
    
                    <button type="submit" className="query-btn">
                        SUBMIT QUERY
                    </button>
                </form>
            </div>
        </div>
    );
}  

export default UserQuery;