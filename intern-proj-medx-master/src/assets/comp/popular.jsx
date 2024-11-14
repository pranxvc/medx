import { useEffect, useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'


function Popular() {
    const navigate = useNavigate()

    const [data, setdata] = useState([])

    useEffect( () => {
        ( async () => {

            const r = await fetch('https://meds-api.onrender.com/search/crocin')
            const d = await r.json()
            setdata(d)
            console.log(d)
            console.log(data[0].name)
            console.log(data[1].name)

        })();

    }, [])

     function nav(id) {
      navigate('/product/' + id)
    }

    return (
        <>
            <div className="flex"> 
                <div className="mt-7 mb-2 mx-9 text-xl text-white font-bold text-center p-2  rounded-[25px]
              bg-black drop-shadow-xl px-7 py-2
            ">  Popular </div>
            </div>

            <div> 
                <div className="grid grid-cols-5 gap-2 ">


                    {data.map(
                        (item) => (

                     <div className="m-5 border-[1px] border-gray-200 rounded-xl drop-shadow-sm p-1" 
                        onClick={() => { nav(item.url_key) }}
                        key={item.name}>
                        <img 
                        className="product-type border-2 border-gray-200 rounded-xl drop-shadow-sm bg-gray-50 "
                src={"https://newassets.apollo247.com/pub/media/catalog/product"+ item.thumbnail.slice(35)} 
                            />           
                        <div className="text-center font-semibold">{item.name}</div>
                        <div className="text-center"><span>Price : {' ₹'} </span>{item.price}</div>

                    </div>
                        ))}     
                    
                    


                </div>
            </div>

            <div className="text-center text-green-700 text-2xl font-bold"> 
                more...
            </div>

        </>
    )
}

export default Popular