import React,{useState} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css"

const List = (props) => {

    const [line, setLine] = useState(false);

    const strikeIt = () => {


        setLine(!line);
    
    
      };

  return (
    
    <>

<div className="todo_style">
<span onClick={strikeIt}>

<button type="button" className="btn btn-light btn-sm">X</button>



</span>
    <span style={{ textDecoration: line ? "line-through" : "none" }}>


     {props.text}


</span>
</div>
    </>
  )
}

export default List