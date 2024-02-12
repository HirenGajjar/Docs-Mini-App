import React from 'react'
import Card from './Card'
import { useRef } from 'react';


function Foreground() {
    const ref=useRef(null);
    const data=[{
        desc :"Job is coming , high paid happiness",
        fileSize:"0.9mb",
        close : false,
        tag:{isOpen:true, tagTitle:"Upload", tagColor:"blue",},
    },
    {
        desc :"Job is coming , high paid happiness",
        fileSize:"0.9mb",
        close : true,
        tag:{isOpen:true, tagTitle:"Upload", tagColor:"blue",},
    },
    {
        desc :"Job is coming , high paid happiness",
        fileSize:"0.9mb",
        close : false,
        tag:{isOpen:true, tagTitle:"Download Now", tagColor:"green",},
    },
];
  return (
    <div ref={ref} className='fixed z-[3] top-0 left-0 w-full h-full flex gap-5 flex-wrap p-5'> 
{data.map((item,index)=>(
<Card data={item} reference={ref} />
    ))}

    </div>
  )
}

export default Foreground