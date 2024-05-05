import React from 'react';

const Events = () => {
    return (
        <div>
            
            <main className="container mx-auto py-8">
                <section>
                <h2 className="text-2xl font-semibold mb-4">Événements à Venir</h2>
                <div className="grid grid-cols-2 gap-8 px-20 text-2xl ">
                <div className="flex justify-end h-full ">
                    <p>Cultes spéciaux : Des cultes spéciaux pour des occasions telles que Noël, Pâques, la Pentecôte, la fête de l'action de grâce, etc.
Retraites spirituelles : Des retraites de quelques jours ou de week-ends pour se retirer du quotidien, se ressourcer, et approfondir sa relation avec Dieu.</p>
                </div>
                <div className="flex justify-start ">
                    <p>Conférences : Des conférences sur des sujets spécifiques tels que la prière, la Bible, le leadership, le mariage, la parentalité, etc.
Concerts de louange : Des événements musicaux avec des groupes de louange pour célébrer et adorer ensemble.</p>
                </div>
            </div>
                </section>
                <section>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="bg-cover bg-center py-20" style={{ backgroundImage: "url('src/assets/images (11).jpeg')" }}>
                            <h3 className="text-lg font-semibold mb-2">Concert de Noël</h3>
                            <p className="text-white">Date : 25 décembre 2024</p>
                            <p className="text-white">Heure : 19h00</p>
                            <p className="text-white">Lieu : Église Gedo</p>
                        </div>
                        <div className="bg-cover bg-center py-20" style={{ backgroundImage: "url('src/assets/téléchargement (4).jpeg')" }}>
                            <h3 className="text-lg font-semibold mb-2">Réunion de Prière</h3>
                            <p className="text-white">Date : 10 janvier 2025</p>
                            <p className="text-white">Heure : 18h30</p>
                            <p className="text-white">Lieu : Église Gedo</p>
                        </div>
                        <div className="bg-cover bg-center py-20" style={{ backgroundImage: "url('src/assets/images (21).jpeg')" }}>
                            <h3 className="text-lg font-semibold mb-2">Retraite Spirituelle</h3>
                            <p className="text-white">Date : 20-22 février 2025</p>
                            <p className="text-white">Lieu : Camp de montagne</p>
                        </div>
                    </div>
                </section>
            </main>
            <div className="grid grid-cols-2 gap-8 px-20 text-2xl ">
                <div className="flex justify-end h-full ">
                    <p>Activités de service communautaire : Des projets pour servir la communauté locale, comme des distributions alimentaires, des nettoyages de quartier, des collectes de vêtements, etc.
Événements sociaux : Des activités sociales telles que des pique-niques, des soirées jeux, des repas partagés, des barbecues, etc., pour renforcer les liens entre les membres de l'église.</p>
                </div>
                <div className="flex justify-start ">
                    <p>Groupes de prière et de jeûne : Des moments spéciaux de prière et de jeûne pour chercher la direction de Dieu et intercéder pour des besoins spécifiques.
Fêtes et célébrations : Des événements pour célébrer les anniversaires, les baptêmes, les mariages, les promotions, etc., au sein de la communauté.</p>
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

export default Events;
