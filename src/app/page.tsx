"use client"
import Background from "@/app/components/Background"
import Card from "@/app/components/Card"
import { useRef } from "react";

export default function Home() {
  alert("You can drag all the cards!")
  let data = [
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, quibusdam!",
      fileSize: "9MB",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" }
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, quibusdam!",
      fileSize: "2MB",
      close: false,
      tag: { isOpen: true, tagTitle: "Upload", tagColor: "blue" }
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, quibusdam!",
      fileSize: "4MB",
      close: true,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" }
    }
  ]
  let ref = useRef(null)
  return (
    <div ref={ref} className="h-screen w-full relative overflow-hidden">
      <Background />
      <div className="flex flex-wrap gap-5 absolute lg:flex-row flex-col -top-36 left-5 justify-center items-center h-full">
        {data.map((item, index) => {
          return <Card data={item} reference={ref} />
        })}
      </div>
    </div>
  );
}
