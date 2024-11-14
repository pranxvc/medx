import { useRef, useState } from "react"

const FaqsCard = (props) => {

    const answerElRef = useRef()
    const [state, setState] = useState(false)
    const [answerH, setAnswerH] = useState('0px')
    const { faqsList, idx } = props

    const handleOpenAnswer = () => {
        const answerElH = answerElRef.current.childNodes[0].offsetHeight
        setState(!state)
        setAnswerH(`${answerElH + 20}px`)
    }

    return (
        <div 
            className="space-y-3 mt-5 overflow-hidden border-b"
            key={idx}
            onClick={handleOpenAnswer}
        >
            <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-700 font-medium">
                {faqsList.q}
                {
                    state ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                    )
                }
            </h4>
            <div
                ref={answerElRef} className="duration-300"
                style={state ? {height: answerH } : {height: '0px'}}
            >
                <div>
                    <p className="text-gray-500">
                        {faqsList.a}
                    </p>
                </div>
            </div>
        </div>
    )
}

function Faq() {
  const faqsList = [
        {
            q: "I have received damaged items?",
            a: "We regret that you had to go through this. On the apps home page, click the Account icon, select Orders from the drop-down menu, select the appropriate order, select view details for the shipment, and then select Return. We ll work to fix this as soon as possible."
        },
        {
            q: "When will I receive my order / shipment(s)?",
            a: "The Estimated delivery date promised at the time of order placement will be met for your shipment. By choosing your order from the Orders section, you can verify this. Watch out for updates on the delivery of your order."
        },
        {
            q: "How do I book a lab test?",
            a: "Without a prescription, you can choose the test(s) straight from the vast selection on the website. Choose the lab you desire and the address and patient can be added or chosen. Choose a time and date that works for you."

        },
        {
            q: "What are the payment modes at MedX?",
            a: `Credit Card
                Debit Card
                Net Banking
                Digital Wallets (Mobikwik, Paytm, Ola Money, Airtel Payments Bank, Amazon Pay, PayPal, Freecharge, PhonePe)
                UPI (PhonePe, Google Pay, Paytm UPI, Amazon Pay UPI, BHIM)
                Cash on Delivery (COD)
                UPI QR at the time of delivery
                When placing an order, you will also be able to see the supported options on the Select Payment Option page. At the time of placing your order, you can choose the option of your choice.
                `
        },
        {
            q: "I am facing issues while trying to order?",
            a: "Sorry for the experience. Please reach out to us on +91 100100100 and we will help you to place an order immediately."
        }
    ]
  
    return (
        <section className="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 lg:px-8">
            <div className="space-y-3 text-center">
                <h1 className="text-3xl text-gray-800 font-semibold">
                    Frequently Asked Questions
                </h1>
                <p className="text-gray-600 max-w-lg mx-auto text-lg">
                    Answered all frequently asked questions, Still confused? feel free to contact us.
                </p>
            </div>
            <div className="mt-14 max-w-2xl mx-auto">
                {
                    faqsList.map((item, idx) => (
                        <FaqsCard
                            idx={idx}
                            faqsList={item}
                        />
                    ))
                }
            </div>
        </section>
    )
  
}

export default Faq