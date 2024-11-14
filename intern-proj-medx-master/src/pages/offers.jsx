import Hero from "../assets/comp/hero"
import Search from "../assets/comp/search"

function Offers() {

    return(
        <>
            <Search />
            <Hero/>          
            <div className="flex w-full "> 
            <div className="mt-7 mb-2 mx-9 text-xl text-white font-bold text-center p-2  rounded-[25px]
              bg-black drop-shadow-xl px-7 py-2">  Offers </div>
        </div>
        </>
    )
}

export default Offers