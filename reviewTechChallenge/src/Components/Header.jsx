import React from 'react';

export default ({ back }) => {
    return (
        <header className='p-3 bg-dark text-white'>
            <div className='container'>
                <div className='d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start'>
                    <ul className='nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0'>
                        <li>
                            <a href='#' >
                                <h1 onClick={back} className='nav-link px-1 text-secondary'> Reviews </h1>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};