import Link from 'next/link'
import React from 'react'
import crop_img from "../../../public/hero_i3.jpg"
import Image from 'next/image'
const MyCrops = () => {
  return (
   <>
   <section className="w-11/12 max-w-7xl mx-auto">
        <h1 className="text-center text-4xl font-bold mb-2">My Crops</h1>

        {/* Product grid */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10">
        
              <Link 
                className="border-2 border-[#f6f6f6] product_card transition-all cursor-pointer "
                href={`#`}
              >
                <div
                  className="relative w-full h-96 ">
                  <div>
                    <Image
                      src={crop_img}
                      alt="crops"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>

                
                    <div className="badge absolute top-4 right-4 text-xs bg-[#80B500]  px-3 py-1 rounded-tl-xl rounded-br-xl text-white">
                      NEW
                    </div>
                
                </div>
                <div className="mt-4 text-center mb-4">
                  <span className="font-bold">Crop name</span>
                  <div className="text-[#80B500] font-bold">
                    <span className="mr-3 font-semibold">$999</span>
                  </div>
                </div>
              </Link>
         
        </div>
      </section>
   </>
  )
}

export default MyCrops