import { useCallback, useEffect, useRef, useState } from "react";



const StartTest = () => {

    const [timer, setTimer] = useState(0);
    const [start, setStart] = useState(false);
    const [over, setOver] = useState(false);
    const [question, setQuestion] = useState(0);
    const interval = useRef<string | number | NodeJS.Timeout | undefined>();

    const responses = useRef<string[]>([]); // ["A", "B", "C", "D"]
    const [currentResponse, setCurrentResponse] = useState<string>(""); // ["A", "B", "C", "D"]
    
    // const [correctAnswer, setCorrectAnswer] = useState<string[]>([]);

    function convertTimer (timer: number): string {
        let minutes = Math.floor(timer / 60).toString();
        let seconds = (timer % 60).toString();

        if (minutes.length < 2)
            minutes = "0" + minutes;
        if (seconds.length < 2)
            seconds = "0" + seconds;

        return `${minutes}:${seconds}`;
    }

    function next(value: number) : void {

        if (question + value < 1 || question + value > 25){
            if (question + value  > 25)
                stop();
            return;
        }
        setQuestion(question => question + value);

        responses.current[question - 1] = currentResponse;
        setCurrentResponse(responses.current[question + value - 1] ?? "");
        
    }

    function getStart() {
        setStart(true);
        setOver(false);
        setQuestion(1);
        setTimer(0);
        responses.current = Array.from(Array(25).keys()).map(() => "");
        interval.current = setInterval(() => {
            setTimer(timer => timer + 1);
        }, 1000);
    }

    function stop() {
        console.log("stop");
        setOver(true);
        clearInterval(interval.current);
    }

    function btnClick(e: any) {
        const btn = e.target;
        
        if (!currentResponse.includes(btn.id.toUpperCase())) {
            btn.classList.remove("bg-white", "text-gray-800");
            btn.classList.add("bg-blue-600", "text-white");
            setCurrentResponse(currentResponse + btn.id.toUpperCase());
        } else {
            btn.classList.remove("bg-blue-600", "text-white");
            btn.classList.add("bg-white", "text-gray-800");
            setCurrentResponse(currentResponse.replace(btn.id.toUpperCase(), ""));
        }
    }

    const  setBtn = useCallback (() => {
        const btns = document.querySelectorAll(".response-btn");
        btns.forEach(btn => {
            if (currentResponse.includes(btn.id.toUpperCase())) {
                btn.classList.remove("bg-white", "text-gray-800");
                btn.classList.add("bg-blue-600", "text-white");
            } else {
                btn.classList.remove("bg-blue-600", "text-white");
                btn.classList.add("bg-white", "text-gray-800");
            }
        });
    }, [currentResponse]);

    useEffect(() => {
        console.log(currentResponse);
        setBtn();
    }, [question, currentResponse, setBtn]);
    
    return (<>
        <div className="mt-20">
            <div className="flex w-8/12 mx-auto items-center space-x-8">
                <div className="flex-1">
                    <div className="text-xl font-semibold flex justify-between">
                        <p id="question-nb">Question {question}</p>
                        <p id="timer">{convertTimer(timer)}</p>
                    </div>
                    <div className="w-full h-[400px] bg-red-200">
                        <img id="question-img" className="w-full h-full" src={`../Mini-projet JS/tests/B01/B1-${question}.jpg`} alt={`./Mini-projet JS/tests/B01/B1-${question}.jpg`} />
                    </div>
                    {start ? ( !over ? <div>
                        <div className="flex items-center justify-center">
                            <div className="mt-4 space-x-8 ">
                                <button onClick={btnClick} id="a" className="response-btn w-16  bg-white hover:bg-blue-600 text-gray-800 hover:text-white border font-bold py-2 px-4 rounded-full">A</button>
                                <button onClick={btnClick} id="b" className="response-btn w-16  bg-white hover:bg-blue-600 text-gray-800 hover:text-white border font-bold py-2 px-4 rounded-full">B</button>
                                <button onClick={btnClick} id="c" className="response-btn w-16  bg-white hover:bg-blue-600 text-gray-800 hover:text-white border font-bold py-2 px-4 rounded-full">C</button>
                                <button onClick={btnClick} id="d" className="response-btn w-16  bg-white hover:bg-blue-600 text-gray-800 hover:text-white border font-bold py-2 px-4 rounded-full">D</button>
                            </div>
                        </div>
                        <div className="flex space-x-12 mt-8">
                            
                            <button onClick={() => {
                                next(-1);
                            }} id="previous" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
                                précédent
                            </button>
                            <button onClick={() => {
                                next(1);
                            }} id="next" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
                                { question === 25 ? "Terminer" : "Suivant"}
                            </button>
                        </div>
                    </div> : <div className="my-5 space-y-5">
                        <div className="flex items-center justify-center">
                            <p className="text-2xl font-semibold text-green-500">Test terminé</p>
                        </div>
                        <div className="flex items-center justify-center">
                            <button onClick={() => {
                                getStart()
                            }
                            } id="start" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
                                Recommencer
                            </button>
                        </div>
                    </div>) : <div className="flex items-center justify-center">
                        <button onClick={() => {
                            getStart()
                        }
                        } id="start" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
                            Commencer
                        </button>
                    </div>}
                </div>
                <div className="w-96 grid grid-cols-5 h-96 rounded p-2">
                    {Array.from(Array(25).keys()).map((value, index) => {
                        return <div key={index} className="flex items-center justify-center">
                            <button disabled={!start} onClick={() => {
                                if (currentResponse !== "") {
                                    responses.current[question - 1] = currentResponse;
                                }
                                setCurrentResponse(responses.current[value] ?? "");
                                setQuestion(value + 1);
                            }} className={`w-8 h-8 rounded-full ${question === value + 1 ? "bg-blue-500 text-white" : ( responses.current[value] === "" ? "bg-gray-300 text-gray-800" : "bg-green-500 text-white")} hover:bg-blue-600 hover:text-white`}>{value + 1}</button>
                        </div>
                    })}
                </div>
            </div>
        </div>
    </>)
}

export default StartTest;