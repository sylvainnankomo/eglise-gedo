import React from 'react';

const Services = () => {
    return (
        <div>
           <div className="container  py-8">
           <section>
                    <h2 className="text-2xl font-semibold mb-4">Nos Services</h2>
                    
</section>
            <div className="grid grid-cols-2 gap-8 px-20 text-2xl ">
                <div className="flex justify-end h-full ">
                    <p>Cultes réguliers : Des services de culte hebdomadaires ou bihebdomadaires comprenant des moments de louange, de prière, d'enseignement biblique et de communion.
Études bibliques : Des groupes d'étude de la Bible organisés régulièrement pour approfondir la compréhension des Écritures et encourager la croissance spirituelle.</p>
                </div>
                <div className="flex justify-start ">
                    <p>Ministères de la jeunesse : Des programmes spécifiques pour les enfants, les adolescents et les jeunes adultes, comprenant des activités, des enseignements et des événements visant à encourager leur foi et leur développement personnel.
Groupes de soutien : Des groupes de soutien pour aider les personnes confrontées à des défis tels que la dépression, l'addiction, le deuil ou les relations familiales.</p>
                </div>
                <div className="flex justify-end ">
                    <p>Ministère de la louange et de la musique : Des équipes de louange et de musique qui dirigent la louange lors des cultes et des événements spéciaux.
Œuvres de charité et d'aide sociale : Des programmes visant à aider les personnes dans le besoin, tels que les distributions alimentaires, les refuges pour sans-abri, les soins médicaux gratuits, etc.</p>
                </div>
                <div className="flex justify-start ">
                    <p>Activités communautaires : Des événements et des activités destinés à renforcer les liens au sein de la communauté locale, tels que des barbecues, des soirées de jeux, des événements sportifs, etc.
Événements spéciaux : Des séminaires, des conférences, des retraites et d'autres événements spéciaux axés sur des sujets tels que le mariage, la parentalité, la croissance spirituelle, etc.</p>
                </div>
            </div>
        </div>
            <main className="container mx-auto py-8">
                
                <section>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="bg-cover bg-center py-20" style={{ backgroundImage: "url('src/assets/images (20).jpeg')" }}>
                            <h3 className="text-lg font-semibold mb-2">Culte du Dimanche</h3>
                            <p className="text-white">Horaires : 9h00 et 11h00</p>
                            <p className="text-white">Lieu : Église Gedo</p>
                        </div>
                        <div className="bg-cover bg-center py-20" style={{ backgroundImage: "url('src/assets/téléchargement (2).jpeg')" }}>
                            <h3 className="text-lg font-semibold mb-2">Étude Biblique</h3>
                            <p className="text-white">Jours : Mercredi et Vendredi</p>
                            <p className="text-white">Heure : 18h30</p>
                            <p className="text-white">Lieu : Salle de réunion</p>
                        </div>
                        <div className="bg-cover bg-center py-20"style={{ backgroundImage: "url('src/assets/téléchargement (3).jpeg')" }}>
                            <h3 className="text-lg font-semibold mb-2">Groupe de Jeunes</h3>
                            <p className="text-white">Jour : Samedi</p>
                            <p className="text-white">Heure : 14h00</p>
                            <p className="text-white">Lieu : Salle des jeunes</p>
                        </div>
                    </div>
                </section>
            </main>
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

export default Services;
