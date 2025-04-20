"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";
import { ColourfulText } from "./ui/colourful-text";

export function ScrollAnimation() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl md:text-[6rem] font-bold mb-5 leading-none text-black dark:text-white">
              <span className="text-gradient-premium text-4xl md:text-[3rem]">Unleash the power of</span> <br />
              <ColourfulText text="Netflix AI" />
            </h1>
          </>
        }
      >
        <video
            className="size-full overflow-hidden rounded-[55.75px] object-cover"
            src={"/dog.mp4"}
            autoPlay
            loop
            muted
            playsInline
          />
      </ContainerScroll>
    </div>
  );
}
