"use client";
import React, { useEffect, useRef } from "react";
import Background from "@/app/components/Background";
import Card from "@/app/components/Card";

interface Tag {
  isOpen: boolean;
  tagTitle: string;
  tagColor: string;
}

interface CardData {
  desc: string;
  fileSize: string;
  close: boolean;
  tag: Tag;
}

const Home: React.FC = () => {
  const data: CardData[] = [
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, quibusdam!",
      fileSize: "9MB",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, quibusdam!",
      fileSize: "2MB",
      close: false,
      tag: { isOpen: true, tagTitle: "Upload", tagColor: "blue" },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, quibusdam!",
      fileSize: "4MB",
      close: true,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" },
    },
  ];

  const ref = useRef<HTMLDivElement>(null);

  // Use useEffect to ensure alert runs only on the client
  useEffect(() => {
    alert("You can drag all the cards!");
  }, []);

  return (
    <div ref={ref} className="h-screen w-full relative overflow-hidden">
      <Background />
      <div className="flex flex-wrap gap-5 absolute lg:flex-row flex-col -top-36 left-5 justify-center items-center h-full">
        {data.map((item, index) => (
          <Card key={index} data={item} reference={ref} />
        ))}
      </div>
    </div>
  );
};

export default Home;
