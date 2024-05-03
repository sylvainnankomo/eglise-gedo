import React from 'react';

const Services = () => {
    return (
        <div>
          
            <main className="container mx-auto py-8">
                <section>
                    <h2 className="text-2xl font-semibold mb-4">Nos Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="bg-gray-200 p-4 rounded-md">
                            <h3 className="text-lg font-semibold mb-2">Culte du Dimanche</h3>
                            <p className="text-gray-700">Horaires : 9h00 et 11h00</p>
                            <p className="text-gray-700">Lieu : Église Gedo</p>
                        </div>
                        <div className="bg-gray-200 p-4 rounded-md">
                            <h3 className="text-lg font-semibold mb-2">Étude Biblique</h3>
                            <p className="text-gray-700">Jours : Mercredi et Vendredi</p>
                            <p className="text-gray-700">Heure : 18h30</p>
                            <p className="text-gray-700">Lieu : Salle de réunion</p>
                        </div>
                        <div className="bg-gray-200 p-4 rounded-md">
                            <h3 className="text-lg font-semibold mb-2">Groupe de Jeunes</h3>
                            <p className="text-gray-700">Jour : Samedi</p>
                            <p className="text-gray-700">Heure : 14h00</p>
                            <p className="text-gray-700">Lieu : Salle des jeunes</p>
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

export default Services;
