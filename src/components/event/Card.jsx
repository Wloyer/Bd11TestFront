import React from 'react';
import decorated from '/public/decorated.jpg';


function CardHome() {

return (
    <>
         <div class="card">
                <img src={decorated}  />
                <div class="container">
                    <button>En savoir plus</button>
                </div>
        </div>
    </>
)
}

export default CardHome
