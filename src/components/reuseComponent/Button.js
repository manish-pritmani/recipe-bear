import React from 'react';

const Button = ({ btnText, handleClickRequest }) => {
    return (
        <button className="btn" onClick={handleClickRequest}>
            {btnText}
        </button>
    )
}

export default Button;