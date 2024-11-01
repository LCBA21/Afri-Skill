import React from 'react'
import aficaIcon from '../images/africaIcon.png';
import ComputerIcon from '../images/StudentIcon2.png';



const Home = () => {
  return (
    <div >
        <div>
            <div className=' absolute mt-[130px] ml-[60px]'>
                <h1 className='font-bold text-3xl'>Afri;skill</h1>

            <img
            src={aficaIcon}
            className="absolute"
            style={{
              width: '30px',
              height: '30px',
              top: '4px',
              left: '120px',
            }}
            />
            </div>

            <div className='absolute ml-[500px] mt-[128px] flex flex-row space-x-4 text-2xl'>
                    <div>Explore</div>
                    <div>Online degree</div>
                    <div>Master track</div>
                    <div>Certificate</div>
            </div>

            <div className='absolute mt-[-100px] ml-[2300px]'>
            <button className='absolute w-[140px] h-[50px] bg-[#3c005a] rounded-full pt-2 pr-2 pl-0.5 pb-2 text-[#FFFFFF] ml-[-900px] mt-[220px]'>Join For Free</button>
            </div>

            <div className='absolute mt-[-100px] ml-[2300px]'>
            <button className='absolute w-[140px] h-[50px] bg-[transperant] rounded-full pt-2 pr-2 pl-0.5 pb-2 text-[#000000] ml-[-780px] mt-[220px]'>Sign Up</button>
            </div>



            <div className="flex justify-center items-center h-screen">
                <div className="flex flex-col items-start space-y-1 ml-[-1080px] mt-[80px]">
                    <div>
                    <h1 className="text-8xl font-bold font-[Proxima Nova] text-[#3c005a]"><span className='text-[#4e28e2]'>Bounce</span> beyond</h1>
                    </div>

                    <div>
                    <h1 className="text-8xl font-bold text-[#3c005a]">limits online</h1>
                    </div>
                </div>
            </div>


            <div className='absolute mt-[-280px] ml-[80px] items-start'>
                <p>Embrace the flexibility to study anywhere,anytime and <br/>
                    bounce beyond the boundaries of traditional education <br/>
                    to achieve unparalleled success. <br/></p>
            </div>

            <div className=' mt-[-400px]'>
            <button className='absolute w-[140px] h-[50px] bg-[#3c005a] rounded-full pt-2 pr-2 pl-0.5 pb-2 text-[#FFFFFF] ml-[-800px] mt-[220px]'>Join For Free</button>
            </div>


            <div>
                <button className='absolute w-[140px] h-[50px] bg-[transperant] border border-[#000000] rounded-full pt-2 pr-2 pl-0.5 pb-2 text-[#3c005a] mt-[220px] ml-[-650px]'>Explore Courses</button>
            </div>

            <div>

            <img
            src={ComputerIcon}
            className="absolute"
            style={{
              width: '800px',
              height: '600px',
              top: '300px',
              left: '1020px',
            }}
            />
            
            </div>
            
        </div>
        
    </div>

    //     className="absolute bg-[#fcb4ca] min-h-[1117px] w-[1920px] ml-[-340px] mt-[-100px]"

  )
}

export default Home