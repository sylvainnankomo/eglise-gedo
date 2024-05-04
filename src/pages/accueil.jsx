import React from 'react';
import Minister from '../components/minister';

const Accueil = () => {
    return (
        <div>
      
      
          <div className="bg-gedo-texture bg-center h-screen h-full max-h-96">
          <div className="text-center px-6 text-white pt-16">
             <h2 className="text-4xl font-bold tracking-tight sm:text-6xl ">Église Gedo</h2>
           </div>
         </div>
            <main className="container mx-auto py-8">
              
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-gray-200 p-4 rounded-md">
                        <img src="src/assets/images (8).jpeg" alt="Image 1" className="w-full rounded-md" />
                    </div>
                    <div className="bg-gray-200 p-4 rounded-md">
                        <img src="src/assets/images (2).jpeg" alt="Image 2" className="w-full rounded-md" />
                    </div>
                    <div className="bg-gray-200 p-4 rounded-md">
                        <img src="src/assets/téléchargement.jpeg" alt="Image 3" className="w-full rounded-md" />
                    </div>
                </div>
            </main>
            <div className="container mx-auto py-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Minister image="src/assets/images (14).jpeg" texte="Ministère des enfants "/>
                <Minister image="src/assets/images (16).jpeg" texte="Ministère de la femme"/>
                <Minister image="src/assets/images (17).jpeg" texte="Ministère de l'homme"/>
                <Minister image="src/assets/images (19).jpeg" texte="Ministère de la jeunesse"/>
                </div>
            </div>
            <div className="bg-gray-800 text-white py-8">
                <div className="container mx-auto flex justify-between">
                   
                    <div>
                        <ul className="flex">
                            <li className="ml-4"><a href="#" className="hover:text-gray-300">Facebook</a></li>
                            <li className="ml-4"><a href="#" className="hover:text-gray-300">Twitter</a></li>
                            <li className="ml-4"><a href="#" className="hover:text-gray-300">Instagram</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accueil;




