import React from 'react'
import '../styles/404.css';

function Page404() {
    return (
        <>
            <h1 style={{ textAlign: 'center' }}>404</h1>
            <div className="cloak__wrapper" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div className="cloak__container">
                    <div className="cloak">
                        <div className="info" style={{ textAlign: 'center' }}>
                            <h2>Page non retrouvé</h2>
                            <p>
                                Nous sommes presque sûrs que cette page existait auparavant, mais elle semble avoir disparu. Nous nous excusons en son nom.
                            </p>
                            <button style={{ margin: '0 auto' }}> <a style={{}} href="/">Home</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Page404
