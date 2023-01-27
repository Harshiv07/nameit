import React from 'react';
import './Header.css';

const Header = ({headerTitle, headerExpaned}) => {
    return (
        <div className="head-container">
            <img 
                src="https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png" 
                className={`head-image ${headerExpaned? `head-image-expanded`:`head-image-contracted`}`}
                alt="header logo" 
            />
            <h1 
                className={`head-text ${headerExpaned? `head-text-expanded`:`head-text-contracted`}`}
            >{headerTitle}</h1>
        </div>
    );
}

export default Header;