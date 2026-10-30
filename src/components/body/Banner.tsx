import React from "react";
import Container from "../header/Container";
import { banner } from "../constants";
import ShopButton from "./ShopButton";
import bannerImageOne from "@/app/assets/bannerImageOne.png";
import Image from "next/image";

export default function Banner() {
  return (
    <div className="bg-[#115061] py-16 text-gray-50">
      <Container>
        <section>
          <div className="mx-auto grid min-h-[360px] max-w-[1400px] grid-cols-1 items-center gap-8 px-5 py-10 sm:px-8 md:grid-cols-2 md:py-0 lg:px-12">
            {/* Banner Content */}{" "}
            <div className="relative z-10 order-1 text-white">
              <p className="mb-5 text-sm font-semibold sm:text-base">
                {banner.priceText}
              </p>
              <h1 className="mb-5 max-w-[500px] text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                {banner.title}
              </h1>
              <p className="mb-6 text-base font-semibold sm:text-lg">
                {banner.textOne}
                <span className="text-yellow-400">
                  
                  {banner.offerPrice}
                </span>
                {banner.textTwo}
              </p>
              <ShopButton href={banner.buttonLink} />
            </div>
            {/* Banner Image */}
            <div className="relative order-2 flex min-h-[220px] items-center justify-center md:min-h-[360px]">
          
              <Image
                src={bannerImageOne}
                alt="Smartwatch collection"
                priority
                sizes="(max-width: 600px) 90vw, 50vw"
                className="h-auto w-full max-w-[520px] object-contain"
              />
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}
