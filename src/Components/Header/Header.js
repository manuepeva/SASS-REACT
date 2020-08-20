import React from 'react'
import CuscoAfternoon from '../Images/CuscoAfternoon.jpeg';
export const Header = () => {
    return (
        <div className="body">
            <header className="showcase">
                <div className="container">
                    <nav>
                        <h1 className="logo">My Website</h1>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Services</a></li>
                        </ul>
                    </nav>

                    <div className="showcase-content">
                        <div>
                            <h1>Make Your Marketing Real</h1>
                            <p className="my-1">
                                Some Randome txt over here
                                Some Randome txt over here
                                Some Randome txt over here
                                Some Randome txt over here
                                Some Randome txt over here
                                Some Randome txt over here
                            </p>
                            <a href="#" className="btn-primary">Learn More</a>
                            <a href="#" className="btn-secondary">Sign Up</a>
                        </div>
                        <img
                            src={CuscoAfternoon} />
                    </div>
                </div>
            </header>
        </div>
    )
}


export default Header;