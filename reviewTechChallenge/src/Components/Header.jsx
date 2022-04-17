import React from 'react';

export default ({ back }) => 
    <header
        className='p-3 bg-dark'>
        <div
            className='container'>
            <div
                className='col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0'>
                <a
                    href='#'
                    className='text-decoration-none text-secondary'>
                    <h1
                        onClick={back}>
                        Reviews
                    </h1>
                </a>
            </div>
        </div>
    </header>
;