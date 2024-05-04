import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8 px-8">
            <div className="container mx-auto flex flex-wrap justify-between">
                <div className="w-full md:w-1/3">
                    <h2 className="text-lg font-semibold mb-4">À propos de l'Église Gedo</h2>
                    <p>L'Église Gedo est une communauté chrétienne dynamique dédiée à partager l'amour de Jésus-Christ et à servir notre communauté.</p>
                </div>
                <div className="w-full md:w-1/3">
                    <h2 className="text-lg font-semibold mb-4">Nos Horaires de Culte</h2>
                    <p>Rejoignez-nous pour nos services de culte chaque dimanche à 9h00 et 11h00.</p>
                </div>
                <div className="w-full md:w-1/3">
                    <h2 className="text-lg font-semibold mb-4">Contact</h2>
                    <p>Adresse : 123 Rue de l'Église, Ville</p>
                    <p>Téléphone : (123) 456-7890</p>
                    <p>Email : info@eglise-gedo.com</p>
                </div>
            </div>
            <div className="text-center mt-4">
                <p>&copy; 2024 Église Gedo. Tous droits réservés.</p>
            </div>
        </footer>
    );
};

export default Footer;

