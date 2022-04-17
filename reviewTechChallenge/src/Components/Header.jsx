import React from 'react';

export default ({ back }) => 
    <header
        className='p-3 bg-dark text-white'>
        <div
            className='container'>
            <div
                className='col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0'>
                <a
                    href='#' >
                    <h1
                        onClick={back}
                        className='text-secondary'>
                        Reviews
                    </h1>
                </a>
            </div>
        </div>
    </header>
;