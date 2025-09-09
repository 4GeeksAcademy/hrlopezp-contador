import { useState, useEffect } from "react"
import "../../styles/home.css"

//Page Home
 
const Home = () => {
	const [contador, setContador] = useState(0);
    const myString = String(contador).padStart(6, "0").split("");


     useEffect(() => {
        let intervaloID = setInterval(() => {
            setContador(contador + 1)
        }, 1000)  
        return () => clearInterval(intervaloID)
    }, [contador])


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
            <button className="btn btn-danger fs-1 fw-bold px-5">Stop</button>
        </div>
	</div>
	);
}; 

export default Home;