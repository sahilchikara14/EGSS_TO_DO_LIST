import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import List from './List';
import "./style.css"

const ToDoList = () => {

    const [item, setItem] = useState("");
    const [newitem, setNewItem] = useState([]);

    const itemEvent = (event) => {
        setItem(event.target.value);
    };

    const listOfItems = () => {


        setNewItem((prevValue) => {
            return [...prevValue, item];
        });


        setItem("");


    };

    return (
        <>
            <div className="main_div">


                <div className="center_div">


                    <br />


                    <h1> ToDo List </h1>


                    <br />


                    <input


                        type="text"


                        value={item}


                        placeholder="Add an Items"


                        onChange={itemEvent}


                    />


                    <br />

                    <button type="button" className="btn btn-primary btn-sm" onClick={listOfItems}>Add</button>
                    <br />
                    <ol>


                        {newitem.map((val, index) => {


                            return <List key={index} text={val} />;


                        })}


                    </ol>
                    


<br />


</div>


</div>

                </>
                )
}

                export default ToDoList