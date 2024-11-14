import { Link, useNavigate} from 'react-router-dom'


function ProductTypes() {
    const navigate = useNavigate()

    function nav(q) {
      navigate('/search/' + q)
    }

    return(
        <>
        <div className="flex"> 
            <div className="mt-7 mb-2 mx-9 text-xl text-white font-bold text-center p-2  rounded-[25px]
              bg-black drop-shadow-xl px-7 py-2
            ">  Shop by Choice  </div>
        </div>

        <div className="w-full flex overflow-x-scroll flex-nowrap no-scrollbar">

            <div className="product-container" onClick={() => { nav('Medicines') }}>
            <img 
                className="product-type"
                src="https://cdn.discordapp.com/attachments/1038025122369503282/1038111843908079677/20221104_204749_0000.png"
            />
            <div className="product-text">Medicines</div>

            </div>

            <div className="product-container " onClick={() => { nav('COVID') }}>
            <img 
                className="product-type"
                src="https://cdn.discordapp.com/attachments/1038025122369503282/1038285310443913267/png_20221105_082323_0000.png"
            />
            <div className="product-text">COVID</div>

            </div>

            <div className="product-container " onClick={() => { nav('Healthcare') }}>
            <img 
                className="product-type"
                src="https://cdn.discordapp.com/attachments/1038025122369503282/1038111844272971836/png_20221104_205350_0000.png"
            />
            <div className="product-text">Healthcare Products</div>

            </div>

            <div className="product-container ">
            <img 
                className="product-type"
                src="https://cdn.discordapp.com/attachments/1038025122369503282/1038111843597692928/png_20221104_204511_0000.png"
            />
            <div className="product-text">Tests</div>

            </div>

            <div className="product-container " onClick={() => { nav('Vitamins') }}>
            <img 
                className="product-type"
                src="https://cdn.discordapp.com/attachments/1037406020449861724/1037962730671448094/unknown.png"
            />
            <div className="product-text">Vitamins</div>

            </div>

            <div className="product-container ">
            <img 
                className="product-type"
                src="https://cdn.discordapp.com/attachments/1038025122369503282/1038111843232784435/png_20221104_204333_0000.png"
            />
            <div className="product-text">Healthcare Tools</div>

            </div>

            <div className="product-container ">
            <img 
                className="product-type"
                src="https://i.pinimg.com/564x/a3/86/e2/a386e20656242936715d0c79220e3431.jpg"
            />
            <div className="product-text">Doctor Consultation</div>          

            </div>

           

            <div className="product-container " onClick={() => { nav('Baby Care') }} >
            <img 
                className="product-type"
                src="https://cdn.discordapp.com/attachments/1038025122369503282/1038285310074822716/png_20221105_082246_0000.png"
            />
            <div className="product-text">Baby Care</div>          
            </div>

            <div className="product-container " onClick={() => { nav('Maternity') }}>
            <img 
                className="product-type"
                src="https://cdn.discordapp.com/attachments/1038025122369503282/1038285310859153538/png_20221105_082356_0000.png"
            />
            <div className="product-text">Maternity Care</div>          
            </div>

            

           


        </div>
        
        
        
        </>
    )

}

export default ProductTypes