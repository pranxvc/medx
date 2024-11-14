function About() {
  return (
    <>
       <div className="flex w-full "> 
            <div className="mt-7 mb-2 mx-9 text-xl text-white font-bold text-center p-2  rounded-[25px]
              bg-black drop-shadow-xl px-7 py-2 
            ">  About Us </div>
        </div>


      <div className="border-2 border-gray-200 rounded-xl m-5 drop-shadow-lg bg-gray-50">

      <h1 className=" m-8 text-4xl font-semibold text-gray-600">
        What is MedX ?
      </h1>
      <p className="m-8 text-[20px] ">
        MedX is the most user-friendly app for ordering medications that you can
        find. In order to deliver better healthcare at lower costs, we bring
        together a variety of pharmaceutical businesses, diagnostic labs,
        healthcare goods, and clinicians with the highest levels of experience.
        As a result, our clients receive the best service possible throughout
        India.
      </p>
      <p className=" text-center m-8 text-[18px] italic  text-green-600 ">
   
        Healthcare made easy by the pharmacy you trust
      </p>

      </div>



      <div className="border-2 border-gray-200 rounded-xl m-5 drop-shadow-lg bg-gray-50">
      <p className="m-8 text-4xl font-semibold text-gray-600">


        Our Services
      </p>
      <p className="m-8 text-[20px] ">
        We provide consumers with the option of drone delivery, which allows
        them to obtain their things in minutes. As a result, we offer
        contactless payments, allowing them to stay safe in the comfort of their
        own homes. Booking online appointments and meeting doctors who are both
        qualified and experienced has never been easier with MedX. Additionally,
        we provide lab tests to clients at their homes, helping them to monitor
        their health.
      </p>
      </div> 
    </>
  );
}

export default About;
