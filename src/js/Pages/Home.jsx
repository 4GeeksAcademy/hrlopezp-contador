import { useState, useEffect } from "react"
import "../../styles/home.css"

//Page Home
 
const Home = () => {
	const [contador, setContador] = useState(0);
    const myString = String(contador).padStart(6, "0").split("");
    const [stopCounter, setStopCounter] = useState(false);


     useEffect(() => {
        if(stopCounter) return;
        const intervaloID = setInterval(() => {
            setContador((prev)=> prev+1)
        }, 1000)  
        return () => clearInterval(intervaloID)
    }, [contador, stopCounter])


	return (
	<div className="container">
		<div className="row justify-content-center bg-black">
			<div className="col-11 bg-black gap-4 py-4 d-flex justify-content-center">
				<div className="text-white rounded d-flex align-items-center px-4 mb-2 letra opaco">
                    <i class="fa-solid fa-clock"></i>
                </div>
            {
            myString.map((item, index) => (
                    <h1 key={index} className='text-white rounded px-4 letra numero opaco'>{item}</h1>
            ))}
			</div>
		</div>
        <div className="m-5 d-flex justify-content-center">
            <button className= {`fs-1 fw-bold px-5 btn ${stopCounter ? "btn-success" : "btn-danger"}`}
            onClick= {()=> setStopCounter(!stopCounter)}>
            {stopCounter ? "Start" : "Stop"}</button>
        </div>
	</div>
	);
}; 

export default Home;