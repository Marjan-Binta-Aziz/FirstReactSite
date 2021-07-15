import React from 'react'

 function Header(props) {
    return (
        <div>
            <h2>Student Name is {props.abc} and ID no is {props.id}</h2>       
        </div>
    )
}
export default Header;