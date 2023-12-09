


const HeroSection = () => {

    return (<>
        <section className="bg-white ">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl ">
                        Cours de conduite en ligne : Roulez vers la réussite!
                    </h1>
                    
                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl ">
                    Préparez-vous au succès sur la route de la conduite avec notre plateforme d'apprentissage en ligne, où la sécurité et la réussite se rencontrent. Bienvenue dans une expérience d'auto-école moderne, efficace et adaptée à votre rythme.
                    </p>
                    
                    <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300">
                        Rejoignez nous
                        <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </a>
                    
                </div>
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img src={"./driving.png"} alt="mockup"/>
                </div>                
            </div>
        </section>
    </>)
}

export default HeroSection;