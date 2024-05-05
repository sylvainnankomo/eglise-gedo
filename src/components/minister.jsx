import React from 'react';

function Minister  ({image,texte})  {
    return (
       
                <div className="relative">
                    <img src= {image} alt="Image 1" className="w-full" />
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center ">
                        <p className="text-white text-center">{texte}</p>
                    </div>
                </div>
                
          
    );
};

export default Minister;



