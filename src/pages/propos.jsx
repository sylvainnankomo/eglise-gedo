import React from 'react';

const About = () => {
    return (
        <div>
            
            <main className="container mx-auto py-8">
                <section>
                    <h2 className="text-2xl font-semibold mb-4">À Propos de l'Église Gedo</h2>
                    <p>L'Église Gedo est une communauté chrétienne dynamique dédiée à partager l'amour de Jésus-Christ et à servir notre communauté.</p>
                    <p>Nous offrons divers services spirituels, tels que des cultes réguliers, des études bibliques, des groupes de jeunes et des événements spéciaux tout au long de l'année.</p>
                    <p>Notre mission est de créer un environnement accueillant où chacun peut grandir dans sa foi et trouver un sens profond de communauté et d'appartenance.</p>
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

export default About;
