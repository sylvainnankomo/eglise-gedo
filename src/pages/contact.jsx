import React from 'react';

const Contact = () => {
    return (
        <div>
            
            <main className="container mx-auto py-8">
                <section>
                    <h2 className="text-2xl font-semibold mb-4">Contactez-nous</h2>
                    <p>Pour toute question ou demande d'information, n'hésitez pas à nous contacter en utilisant le formulaire ci-dessous :</p>
                    <form className="mt-4">
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700">Nom</label>
                            <input type="text" id="name" name="name" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700">Email</label>
                            <input type="email" id="email" name="email" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-gray-700">Message</label>
                            <textarea id="message" name="message" rows="4" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"></textarea>
                        </div>
                        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Envoyer</button>
                    </form>
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

export default Contact;
