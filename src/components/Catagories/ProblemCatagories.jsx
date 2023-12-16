export default function ProblemCatagories ({image , problem , price }) {
    return(
      <div className='relative m-5 ml-10 hover:scale-110'>
   
          <div className='h-[280px] w-[210px] bg-white z-10 overflow-hidden leading-loose text-sm'>
            <img className='h-[190px] w-[212px] rounded-full ' src={image} alt={problem} />
            <div className="font-sans text-base font-bold p-1 leading-5 text-center">{problem}</div>
            <div className="text-center text-blue-600 font-bold">CONSULT NOW</div>
          </div>
         
        </div>
    )
  }