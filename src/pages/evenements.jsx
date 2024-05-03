import React from 'react';

const Events = () => {
    return (
        <div>
            
            <main className="container mx-auto py-8">
                <section>
                    <h2 className="text-2xl font-semibold mb-4">Événements à Venir</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="bg-gray-200 p-4 rounded-md">
                            <h3 className="text-lg font-semibold mb-2">Concert de Noël</h3>
                            <p className="text-gray-700">Date : 25 décembre 2024</p>
                            <p className="text-gray-700">Heure : 19h00</p>
                            <p className="text-gray-700">Lieu : Église Gedo</p>
                        </div>
                        <div className="bg-gray-200 p-4 rounded-md">
                            <h3 className="text-lg font-semibold mb-2">Réunion de Prière</h3>
                            <p className="text-gray-700">Date : 10 janvier 2025</p>
                            <p className="text-gray-700">Heure : 18h30</p>
                            <p className="text-gray-700">Lieu : Église Gedo</p>
                        </div>
                        <div className="bg-gray-200 p-4 rounded-md">
                            <h3 className="text-lg font-semibold mb-2">Retraite Spirituelle</h3>
                            <p className="text-gray-700">Date : 20-22 février 2025</p>
                            <p className="text-gray-700">Lieu : Camp de montagne</p>
                        </div>
                    </div>
                </section>
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

export default Events;
