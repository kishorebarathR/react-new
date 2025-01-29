import React from "react"
import Image from "next/image"

const MyConsistencyPage = () => {
  return (
   
      <div className="  bg-[url('/home_images/about_satheesan_background.png')] mx-auto  w-full h-full ">
      <div className="conatiner mx-auto">
        <h1 className="text-4xl text-[#035C96] text-center font-semibold pt-10">
        My Constituency
        </h1>

        <div className="flex flex-col md:flex-row lg:px-10 md:pt-8 pb-10 container mx-auto">
          <div className="lg:w-[80%] h-full conatiner mx-auto">
            <h2 className="text-xl p-4 lg:p-0">
              North Paravur is an area with a rich and vibrant history. Paravur
              gets its name from the old word Parayur, which means “site of the
              ancient tribe of Paravar.” The Paravar were the predominant
              population of Kerala’s coastal districts, particularly around the
              Chera dynasty’s old capital, Mohodayapuram. North Paravur is also
              thought to be one of the 64 villages that lord Parashurama built.
              Before their conversion to Syrian Christianity in the first
              century and their relocation to Israel following its formation,
              this town had a strong Jewish community. Notable landmarks
              include:
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xl lg:mt-5  p-3 lg:p-0">
            <span className="flex  items-center">
              <span className="text-red-600 mr-2 ">•</span>Paliam Palace
            </span>
            <span className="flex items-center">
              <span className="text-red-600 mr-2 ">•</span>Don Bosco Church
            </span>
            <span className="flex items-center">
              <span className="text-red-600 mr-2 ">•</span>Jewish Synagogue Museum
            </span>
            <span className="flex items-center">
              <span className="text-red-600 mr-2 ">•</span>Dakshina Mookambika Temple
            </span>
            <span className="flex items-center">
            <span className="text-red-600 mr-2 mb-7 md:mb-0">•</span>Kottakkavu Mar Thoma Syro-Malabar Church
            </span>
           
           
          </div>

            <h3 className="text-xl pt-5 pb-5 p-4 lg:p-0 lg:mt-5">
              Paravur was historically known for traditional businesses like
              coir, handlooms, and agriculture. Located about 20 kilometers away
              from the Kochi city center, the town is now transforming into a
              significant residential suburb.
            </h3>
          </div>
          <div className="lg: p-4">
            <Image
              width={400}
              height={350}
              src="/my_constituency/About_paravur.png"
              className="h-full lg:w-[40vw]"
              alt="About Paravur"
            />
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default MyConsistencyPage
