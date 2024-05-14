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
                            <h2>We can't find that page</h2>
                            <p>
                                We're fairly sure that page used to be here, but seems to have gone missing. We do apologise on its behalf.
                            </p>
                            <button style={{ margin: '0 auto', textAlign: 'center' }}> <a style={{ }} href="/">Home</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Page404
