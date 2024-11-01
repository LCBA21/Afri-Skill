import React from 'react'
import MarketingIcon from '../images/marketringIcon1.png';
import ArtIcon from '../images/ArtIcon1.png';
import financeIcon from '../images/FinanceIcon1.png';
import businessIcon from '../images/BusinessIcon1.png';
import designiCON from '../images/DesignIcon1.png';




// FinanceIcon1.png

// c:\Users\Lesibana Ngoepe\Downloads\marketringIcon1.png

const Explore = () => {
  return (
    <div className='absolute bg-[#3c005a] min-h-[1317px] w-[1920px] ml-[-340px] mt-[-100px]'>
    <div>
        {/* fdcddc */}
      <div className='absolute  w-[440px] h-[500px] bg-[#fff789] rounded-[32px] text-5xl ml-[200px] mt-[710px]  font-bold pt-[350px]'>
      <img
             src={designiCON}
             className="absolute"
             style={{
               width: '230px',
               height: '230px',
               top: '100px',
               left: '120px',
             }}
            
            />
          Design

      </div>

      <div className='absolute  w-[440px] h-[500px] bg-[#f96995] rounded-[32px] text-5xl ml-[680px] mt-[710px]  font-bold pt-[350px]'>
            <img
             src={financeIcon}
             className="absolute"
             style={{
               width: '230px',
               height: '230px',
               top: '100px',
               left: '120px',
             }}
            
            />
          Finance

      </div>

      <div className='absolute  w-[440px] h-[500px] bg-[#f96995] rounded-[32px] text-5xl  ml-[680px] mt-[150px] font-bold     pt-[350px]'>
      <img
             src={businessIcon}
             className="absolute"
             style={{
               width: '230px',
               height: '230px',
               top: '100px',
               left: '120px',
             }}
            
            />
          Business

      </div>

      <div className='absolute  w-[440px] h-[500px] bg-[#a9a9a9] rounded-[32px] text-5xl  ml-[200px] mt-[150px] font-bold     pt-[350px]'>
          IT and Software Development

      </div>

      <div className='absolute  w-[440px] h-[500px] bg-[#a9a9a9] rounded-[32px] text-5xl  ml-[1160px] mt-[710px]   font-bold   pt-[350px]'>
        <div>

            <img
             src={MarketingIcon}
             className="absolute"
             style={{
               width: '230px',
               height: '230px',
               top: '100px',
               left: '120px',
             }}
            
            />
        </div>
          Marketing
      </div>


      <div className='absolute  w-[440px] h-[500px] bg-[#fff789] rounded-[32px] text-5xl  ml-[1160px] mt-[150px]   font-bold   pt-[350px]'>
             <img
             src={ArtIcon}
             className="absolute"
             style={{
               width: '230px',
               height: '230px',
               top: '100px',
               left: '120px',
             }}
            
            />
          Art
      </div> 
  </div>
</div>  )
}

export default Explore