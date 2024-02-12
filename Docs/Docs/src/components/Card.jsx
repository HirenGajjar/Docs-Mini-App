import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineDownloadForOffline } from "react-icons/md";
import { CgCloseO } from "react-icons/cg";
import  { motion } from "framer-motion"


function Card({data , reference }) {
  return (
       <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragElastic={0.5} className='relative w-60 h-80 bg-zinc-400 rounded-[20px] text-grey p-5 overflow-hidden flex-shrink-0'>
        <FaRegFileAlt/>
        <p className='text-sm mt-5 font-semibold leading-tight'>{data.desc}</p>
        <div className='footer absolute bottom-0  w-full   left-0 '>
            <div className='flex item-center justify-between px-8 py-3 mb-2'>
                <h5>{data.fileSize}</h5>
                <span className='w-8 h-8 bg-zinc-600  rounded-full flex items-center justify-center'>
                    {data.close ? <CgCloseO size="1.5em" color="#fff"/> :<MdOutlineDownloadForOffline size="1.5em" color="#fff" /> }
                    
                </span>
            </div>
            {data.tag.isOpen && (
                <div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex item-center justify-center`}>
              <h3 className='text-sm text-white'>{data.tag.tagTitle}</h3>
            </div>
            )
            }
            
        </div>
       </motion.div>
  )
}

export default Card