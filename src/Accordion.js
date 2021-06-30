import React, { useState } from 'react'

const Accordian = (props) => {
    const [show, setShow] = useState(false);
    return (
        <>
            <div className="main-heading">
                <p className="sign" onClick={() => setShow(!show)}> {show ? " ➖ " : " ➕ "} </p>
                <h3>{props.question}</h3>

            </div>
            {show ? (<p className="answers"> {props.answer} </p>) : null}

        </>
    )
}

export default Accordian