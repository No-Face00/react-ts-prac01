import banner from "../../assets/banner-main.png";
import shado from "../../assets/bg-shadow.png";


const Banner = () => {





    
  return (
    <div className="banner relative h-[400px] container mx-auto mt-5 overflow-hidden rounded-[20px] bg-black">
      <img
        src={shado}
        alt="Shadow"
        className="absolute inset-0 h-full w-full object-cover rounded-[20px] opacity-50"
      />

      <div className="relative z-10 flex h-full items-center justify-center">
        <img src={banner} alt="Banner" className="max-h-full w-auto object-contain" />
      </div>
    </div>
  )
}

export default Banner
