import React from 'react'

const IndustryCards = ({title,image}) => {
    console.log(title);
    console.log(image);
  return (
    <div className="md:h-[450px] h-[400px] w-[100%] max-w-[350px] group mr-5 rounded-xl relative bg-black">
     <img className='w-[100%] h-[100%] relative rounded-xl group-hover:opacity-30' src={image} alt="" />
      <div className='absolute inset-0 flex justify-center items-end mb-2'>
        <h2 className='text-white text-[40px] text-center'>{title}</h2>
      </div>
    </div>
  )
}

export default IndustryCards
