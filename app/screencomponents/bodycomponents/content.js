import Container from "./container";
import { Button } from "@/components/ui/button";
import CarouselScreen from "../carousel/body.carousel";
import Link from "next/link";
export default function Content({ content, carouselContent }) {
  return (
    <Container>
      <div className="w-full flex  items-start  flex-col p-4 gap-4">
        <span className="font-edu-vic  font-bold text-lg md:text-4xl text-yellow-400">
          {content.title}
        </span>
        <div className="w-full items-start flex md:justify-between flex-col  md:flex-row md:items-center gap-8">
          <div className="md:w-[80vh]">
            <span className="text-2xl md:text-5xl font-bold text-black md:leading-16 max-w-lg">
              {content.subtitle}
            </span>
          </div>

          <Link href="/destination">
            <Button className="md:px-8 md:py-6 text-lg font-bold hover:bg-yellow-400 cursor-pointer">
              {content.button.label}
            </Button>
          </Link>
        </div>
        <CarouselScreen contents={carouselContent}></CarouselScreen>
      </div>
    </Container>
  );
}
