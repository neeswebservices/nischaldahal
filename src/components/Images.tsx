"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import Masonry from "react-masonry-css";
import styles from "@/styles/Imagegrid.module.css";
import { imageArr } from "@/types";

async function getImages(): Promise<imageArr[]> {
  const response = await fetch("/api/images");

  const images = await response.json();

  return images;
}

export default function Images() {
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    800: 3,
  };

  const [data, setData] = useState<imageArr[]>([]);
  const [pop, setPop] = useState<boolean>(false);
  const [opened, setOpened] = useState<imageArr>();

  useEffect(() => {
    async function fetchImages() {
      const data = await getImages();
      setData(data);
    }

    fetchImages();

    return () => {};
  }, []);

  console.log(opened);

  return (
    <div className="w-full flex">
      <div className="m-auto max-w-screen-lg">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className={`${styles.masonryGrid}`}
          columnClassName={styles.masonryGridColumn}
        >
          {data?.map((item, index) => {
            return (
              <Image
                className="skeleton mb-5"
                width={Number(item.width)}
                height={Number(item.height)}
                src={`${item.path}`}
                alt={index.toString()}
                key={index}
                onClick={() => {
                  setPop(true);
                  setOpened({ ...item });
                }}
              ></Image>
            );
          })}

          {pop && (
            <div className="fixed top-0 left-0 z-80 w-screen h-screen bg-black/70 flex justify-center items-center">
              <button
                onClick={() => {
                  setPop(false);
                }}
              >
                close
              </button>
              <Image
                alt="Opened image"
                className="w-500 h-500"
                src={opened?.path as string}
                height={opened?.height as SafeNumber}
                width={opened?.width as SafeNumber}
              ></Image>
            </div>
          )}
        </Masonry>
      </div>
    </div>
  );
}
