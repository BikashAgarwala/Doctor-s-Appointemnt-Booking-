export default function MajorCatatories({image , heading , body}) {
    return (
      
        <div className='h-[280px] w-[220px] shadow-md shadow-slate-900 bg-white z-10 rounded-3xl overflow-hidden leading-tight text-sm'>
          <img className='h-[68%] w-[100%] rounded-t-3xl' src={image} alt={heading} />
          <div className='font-sans text-base font-bold p-2'>
            {heading}
          </div>
          <div className='font-titleFont text-gray-500 pl-2'>
            {body}
          </div>
          
        </div>
    )
  }