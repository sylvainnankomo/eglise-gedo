import React from 'react';
import MyCarousel from '../components/carroussel';

const Accueil = () => {
    return (
        <div>
       < MyCarousel/>
            <main className="container mx-auto py-8">
              
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-gray-200 p-4 rounded-md">
                        <img src="src/assets/images (2).jpeg" alt="Image 1" className="w-full rounded-md" />
                    </div>
                    <div className="bg-gray-200 p-4 rounded-md">
                        <img src="src/assets/images (2).jpeg" alt="Image 2" className="w-full rounded-md" />
                    </div>
                    <div className="bg-gray-200 p-4 rounded-md">
                        <img src="src/assets/temple.jpeg" alt="Image 3" className="w-full rounded-md" />
                    </div>
                </div>
            </main>
            <footer className="bg-gray-800 text-white py-8">
                <div className="container mx-auto flex justify-between">
                    <div>
                        <p>&copy; 2024 Église Gedo. Tous droits réservés.</p>
                    </div>
                    <div>
                        <ul className="flex">
                            <li className="ml-4"><a href="#" className="hover:text-gray-300">Facebook</a></li>
                            <li className="ml-4"><a href="#" className="hover:text-gray-300">Twitter</a></li>
                            <li className="ml-4"><a href="#" className="hover:text-gray-300">Instagram</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Accueil;
