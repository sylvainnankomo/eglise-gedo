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
            <main className="container mx-auto py-8">
              
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-gray-200 p-4 rounded-md">
                        <img src="src/assets/images (5).jpeg" alt="Image 1" className="w-full rounded-md" />
                    </div>
                    <div className="bg-gray-200 p-4 rounded-md">
                        <img src="src/assets/temple.jpeg" alt="Image 2" className="w-full rounded-md" />
                    </div>
                    <div>
                    <h2 className="text-2xl font-semibold mb-4">L'égelise Gedo est un phare d'unité et d'espoir.</h2>
                    <p>Au cœur d'un village tranquille, l'église Gedo était un phare d'unité et d'espoir. Chaque veille de Noël, ses salles sont remplies de familles, leurs visages brillants d'impatience.</p>
                    <p>Le Père Thomas, sage et gentil, a parlé de l'amour et de l'humble naissance qui a changé le monde. Les chandelles dansaient, les voix s’élevaient en harmonie et le message résonnait. Emily, une voyageuse fatiguée, a trouvé du réconfort à l'intérieur, le cœur touché par ces mots.</p>
                    <p>Elle est devenue un membre précieux, son art et sa musique insufflant une nouvelle vie à l'église. Par la foi et la communauté, la lumière de l'égelise Gedo a brillé, illuminant le chemin de tous ceux qui la cherchaient.</p>
                    </div>
                </div>
            </main>
            <div className="container  py-8">
            <div className="grid grid-cols-2 gap-8 px-20 text-2xl ">
                <div className="flex justify-end h-full ">
                    <p>Qu'est-ce qu'une église ?

Une église est un lieu de culte pour les adeptes du christianisme. Il sert de communauté permettant aux croyants de se rassembler pour des activités religieuses, notamment le culte, la prière et l'enseignement.</p>
                </div>
                <div className="flex justify-start ">
                    <p>Quel est le but d’une église ?

Le but principal d’une église est de fournir un espace permettant aux croyants de se réunir pour adorer Dieu, grandir dans leur foi et se soutenir mutuellement dans leur cheminement spirituel.</p>
                </div>
                <div className="flex justify-end ">
                    <p>Toutes les églises sont-elles pareilles ?

Non, il existe différentes confessions au sein du christianisme, chacune avec ses propres croyances, pratiques et traditions. Les confessions communes comprennent les catholiques, les protestants, les orthodoxes et autres.</p>
                </div>
                <div className="flex justify-start ">
                    <p>Que se passe-t-il pendant un service religieux ?

Un service religieux typique peut inclure le chant d'hymnes, des prières, des lectures de la Bible, un sermon ou un enseignement, et parfois des rituels comme la communion ou le baptême, selon la dénomination.</p>
                </div>
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

export default About;
