"use client"
import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { IoClose } from "react-icons/io5"
import { motion } from "framer-motion"

const card = ({ data,reference }: any) => {
    return (
        <motion.div whileDrag={{scale:1.1}} dragElastic={.1} dragTransition={{bounceStiffness:300,bounceDamping:10}} drag dragConstraints={reference} className="card h-72 w-64 rounded-[40px] p-6 bg-zinc-900 text-white mt-0 overflow-hidden relative top-0 left-0">
            <FaRegFileAlt size="20px" cursor="pointer" />
            <p className="font-medium mt-5">
                {data.desc}
            </p>
            <div className="cardDetail flex items-center justify-between mt-10">
                <h5 className="font-medium">{data.fileSize}</h5>
                <span className="bg-zinc-500 p-2 text-lg flex items-center justify-center text-zinc-500 rounded-full">
                    {data.close ? <FaDownload cursor="pointer" color="black" /> : <IoClose color='black' />}
                </span>
            </div>
            {data.tag.isOpen && <div className={`cardFootern p-3 absolute flex items-center justify-center bottom-0 left-0 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} w-full`}>
                <h1 className="font-semibold text-[1.2vw] cursor-pointer">{data.tag.tagTitle}</h1>
            </div>}
        </motion.div>
    )
}

export default card

