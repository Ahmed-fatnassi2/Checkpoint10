import React, { useEffect, useState } from "react";
import axios, { Axios } from "axios";
import "./UserList.css";
// import { UseEffect, UseState } from "react";

const UserList = () => {
    const [listOfUser, setListOfUser] = useState([]);

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then(function (response) {
                // handle success
                setListOfUser(response.data);
                console.log(listOfUser);
                // console.log(response);

                // console.log(listOfUser);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    });

    return (
        <div className="body">
            <h1>Here's the list of users:</h1>
            {listOfUser.map((course) => (
                <ul className="list">
                    <li>{course.name}</li>
                </ul>
            ))}
        </div>
    );
};

export default UserList;
// .get("https://jsonplaceholder.typicode.com/users");
// .get("https://jsonplaceholder.typicode.com/users")
