"use client";
import { Carousel } from "@material-tailwind/react";
import Image from "next/image";
// import poolImg from "public/Images/Banners/pool.jpg";
// import food1 from "public/Images/Banners/food1.jpg";
// import food2 from "public/Images/Banners/food2.jpg";

export function Banner() {
  return (
    <Carousel
      className=" bg-black h-96 relative -mt-2-0" // Ensure fixed height
      autoplay={true}
      autoplayDelay={3000}
      loop={true}
      prevArrow={false}
      nextArrow={false}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-[#C39D63]" : "w-4 bg-white/80"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      {/* Wrapping each Image in a div with relative positioning */}

      <div className="relative h-full w-full">
        <Image
          src="/Images/Banners/pool.jpg"
          alt="image 2"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="relative h-full w-full">
        <Image
          src="/Images/Banners/food1.jpg"
          alt="image 2"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="relative h-full w-full">
        <Image
          src="/Images/Banners/food2.jpg"
          alt="image 2"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </Carousel>
  );
}
