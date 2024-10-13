import Image from "next/image";
import Slider from "./components/Slider";
import Tg from "../app/assets/tg.png"
import Dex from "../app/assets/dex.png"

export default function Home() {
  return (
    <div>
        <main className="bg-[#2c3d56]">
            <div className={"flex items-center justify-center bg-[url(../app/assets/back.webp)] bg-cover min-h-[100vh] w-[99vw] mobile:bg-contain mobile:bg-no-repeat mobile:min-h-[25vh]"}>
                <h1 className="text-6xl text-[#f22754] drop-shadow-glow">FANTASY</h1>
            </div>

            <div className={"h-[100vh] w-[99vw]"}>
                <div className="flex justify-center items-start mt-10">
                  <div className="bg-[#1b2a41] p-5 rounded-lg">
                    <Slider />
                  </div>
                </div>
                <div className="flex-col justify-center mt-10">
                  <div className="flex justify-center">
                    <h2 className="text-[#f22754] text-4xl"><span className="drop-shadow-glow">$FANTASY</span> Realm</h2>
                  </div>
                  <div className="flex justify-center">
                    <p className="text-white text-2xl w-[70vw]">Based dev, diamond hands holders, no jeets, good volume this is the <span className="text-[#f22754] drop-shadow-glow">$FANTASY</span>. To enter the <span className="text-[#f22754] drop-shadow-glow">$FANTASY</span> Realm you have to be a chad, because anty-jeets spell is protecting the <span className="text-[#f22754] drop-shadow-glow">$FANTASY</span> ca and only true chads are able to trade <span className="text-[#f22754] drop-shadow-glow">$FANTASY</span></p>
                  </div>
                </div>
            </div>
            
            <div className={"h-[50vh] w-[99vw]"}>
              <div className="flex-col justify-center">
                <div className="flex justify-center">
                  <h2 className="text-white text-4xl">Join <span className="drop-shadow-glow text-[#f22754]">$FANTASY</span></h2>
                </div>
                <div className="flex justify-center my-5">
                <h3 className="text-white text-xl">CA: Coming soon...</h3>
                </div>
                <div className="flex justify-center mt-5">
                  <div className="flex justify-between w-[20vw] mobile:w-[80vw]">
                    <Image className=" w-[3vw] h-[6vh] rounded-md mobile:w-[20vw] mobile:h-[10vh]" src={Dex} alt="dexscreener"/>
                    <Image className=" w-[3vw] h-[6vh] rounded-md mobile:w-[20vw] mobile:h-[10vh]" src={Tg} alt="telegram"/>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-[#f22754]">Made by @sol1dity</p>
        </main>
    </div>
  );
}
