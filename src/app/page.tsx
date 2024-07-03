import ButtonBar from "@/components/Buttonbar";
import Header from "@/components/Header";
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import { Button } from "@/components/ui/button";
import { yourName } from "@/lib/globals";
import { FiDownload } from "react-icons/fi";

/*
Aut dolor voluptatem eos consequuntur consequatur et explicabo laborum qui inventore placeat vel quas tenetur.
          Eum quod necessitatibus vel quibusdam molestias qui nostrum harum vel nulla recusandae id suscipit autem.
          Aut fugiat dolorem et natus distinctio ea aspernatur suscipit! Sit laudantium veritatis vel maiores perspiciatis
          et amet quam est temporibus dolores sed consequatur quisquam.
*/

export default function Home() {
  return (
    <section className="h-full mt-10">
      <div className="container mx-auto h-full">
        <div className="flex flex-col lg:flex-row items-center justify-between lg:pt-8 lg:pb-24">
          <div className="text-center lg:text-justify order-2 lg:order-none">
            <h2 className="text-lg italic">Software Developer</h2>
            <h1 className="h1 my-3">
              Hello, I'm <br /> <span className="thematic-text">{yourName}</span>
            </h1>
            <p className="max-w-[500px] mb-9">
              I excel at crafting beautiful designs and digital experiences. I'm also
              proficient in various programming languages, web frameworks and AI
              technologies.
            </p>
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                <span>Download CV</span>
                <FiDownload className="text-xl"/>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                containerStyles="flex gap-6"
                iconStyles="w-9 h-9 rounded-full flex justify-center items-center outline-button text-base hover:filled-button"
                />
              </div>
            </div>
          </div>
        <div className="order-1 lg:order-none mb-8 lg:mb-0">
            <Photo/>
          </div>
        </div>
      </div>
    </section>
  );
}
