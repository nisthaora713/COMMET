import type{ FunctionComponent } from "react";
import './global.css'

const StartScreen: FunctionComponent = () => {
  return (
    <div className="w-full relative h-[1024px] overflow-hidden text-center text-[26px] text-white font-inter bg-gradient-to-br from-[#170220] to-[#4a0686]">
      {/* Stars */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              opacity: Math.random(),
              animation: `twinkle ${Math.random() * 3 + 2}s infinite alternate`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="absolute top-[677px] left-[590px] 
             rounded-[30px] w-[259px] h-[69px] 
             flex flex-row items-center justify-center 
             p-2.5 box-border text-ghostwhite 
             shadow-[0px_0px_15px_#9000ff] 
             [background:radial-gradient(50%_50%_at_50%_50%,_#8025e2,_#8800ff)] 
             hover:shadow-[0px_0px_15px_#00c4ff] 
             hover:[background:radial-gradient(50%_50%_at_50%_50%,_#257de2,_#00c4ff)] 
             transition-all duration-300">
            <b className="relative">GET STARTED</b>
      </div>

        <div className="absolute top-[560px] left-[512px] font-poppins text-white">Track, Collaborate, Grow together</div>
        <div className="absolute top-[267px] left-[calc(50%_-_536px)] text-[80px] font-semibold font-poppins text-lavender inline-block w-[1049px] h-[309px] [text-shadow:0px_0px_10px_rgba(255,_255,_255,_0.81)]">
        <p className="m-0 whitespace-pre-wrap">CONSISTENCY THROUGH</p>
        <p className="m-0">CONNECTION</p>
        </div>


      {/* Navbar */}
      <div className="absolute top-[30px] left-[55px] w-[1319px] h-14 text-left text-3xl text-snow-200">
      <div className="absolute top-[5px] left-[1175px] rounded-[30px] border-snow-100 border-solid border-[1px] box-border w-36 h-[46px] flex flex-row items-center justify-center p-2.5">
      <b className="relative">Login</b>
      </div>
      <b className="absolute top-[14px] left-[180px] text-white">About</b>
      <img className="absolute top-[0px] left-[0px] w-14 h-14 object-cover" alt="" src="commetlogo.svg" />
      </div>

      {/* Custom keyframes for twinkle */}
      <style>
        {`
          @keyframes twinkle {
            0% { opacity: 0.2; }
            50% { opacity: 1; }
            100% { opacity: 0.2; }                        
          }
        `}
      </style>
    </div>
  );
};

export default StartScreen;

