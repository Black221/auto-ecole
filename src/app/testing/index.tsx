


const TestingPage = () => {

    return (<>
        <div className="text-center mt-20 space-y-12">
            <h1 className="text-4xl font-bold w-6/12 mx-auto">Évaluez vos connaissances avec notre Test QCM sur la Conduite</h1>
            <p className="text-gray-500 mt-4 w-8/12 mx-auto">
            Plongez-vous dans notre Test QCM noté sur 100 points pour évaluer vos compétences en matière de code de la route et de conduite automobile. Répondez à une série de questions variées et mesurées, conçues pour évaluer votre compréhension approfondie des règles de conduite. Ce test interactif est l'outil parfait pour vous préparer à réussir votre examen de conduite et progresser sur la route en toute confiance.
            </p>
            <button>
                <a href="/test/start" target="_blank" rel="noreferrer" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300">
                    Commencer le Test
                    <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </button>
        </div>  
    </>)
}

export default TestingPage;