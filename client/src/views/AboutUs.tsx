import { FaRegUser } from "react-icons/fa";
import { Button } from "@nextui-org/react";


const AboutUs = () => {
  return (
    <div id='about-us' className='h-auto w-screen flex flex-col'>
      <section className="text-black body-font flex justify-between">
        <div className="mx-auto flex px-5 py-24 md:flex-row items-center w-full ">
          <div className="mx-10">
            <img className="rounded" alt="hero" src="https://dummyimage.com/720x600" />
          </div>
          <div className="items-start flex flex-col">
            <h3 className="title-font sm:text-4xl text-start text-3xl mb-4 font-medium text-gray-900" style={{ fontSize: 50 }}>
              Somos Healthy Beauty
              <br className="lg:inline-block" />Centro de estetica femenina
            </h3>

            <p className="mt-5 leading-relaxed">Descubre un santuario de belleza y bienestar diseñado para revitalizarte por completo. Desde relajantes tratamientos faciales hasta masajes terapéuticos, te ofrecemos una experiencia de cuidado personalizada que te dejará radiante y renovada. ¡Es hora de brillar con confianza!.</p>
            <div className="items-center">
              <Button color="danger" variant="bordered" className="mt-10" endContent={<FaRegUser />}>
                SingUp
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>


  )
}

export default AboutUs
