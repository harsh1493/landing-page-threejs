import React ,{useRef,useEffect}from 'react'
import gsap from "gsap";
const Landing = () => {
    const top1 = useRef();
    const top2= useRef();
    const bottom = useRef();
    useEffect(() => {
        gsap.fromTo(top1.current,{y:-100,opacity:0}, { y:10 ,opacity:1,duration:1,delay:0.5});
        gsap.fromTo(top2.current,{y:-100,opacity:0}, { y:10 ,opacity:1,duration:1,delay:0.4});
        gsap.fromTo(bottom.current,{y:100,opacity:0}, { y:10 ,opacity:1,duration:1,delay:0.3});
    
    }, [])
    
    return (

        <div className="text-black z-20 flex flex-row justify-center absolute items-center">
            <div className=" p-10 mt-10 ml-48 flex-col">
                <div ref={top1} className='text-5xl font-bold ' >Security and compilance <br />at the core</div>
                <div ref={top2} className='text-l font-medium pt-5' style={{ color: "#a09fbb" }} >Secure System and Reliable Partner at your safety</div>

                <div ref={bottom} className="flex pt-32">
                    <img src = "check.png" className='h-5 w-5 mx-5 mt-5' alt = "Test Image" />
                    <div className='text-sm font-medium ' style={{ color: "#7edea9" }} >
                        Lorem ipsum dolor sit amet consectetur adipisicing <br />
                        elit. Qui voluptas reiciendis, sed pariatur ea quia<br />
                        dolores labore .
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Landing