import React from "react"
import Image from "next/image"

const MyConsistencyPage = () => {
  return (
    <div>
      <div className="  bg-[url('/home_images/about_satheesan_background.png')] mx-auto  w-full h-full">
        <p className="text-4xl text-[#035C96] text-center font-semibold pt-10">
          In the Public Eye
        </p>

        <div className="flex flex-col md:flex-row lg:px-10 pt-10 pb-10 merriweather-regular">
  <div className="lg:w-[68%] h-full p-4">
    <p className="text-xl">
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
    </p>
    <div className="flex flex-col md:flex-row text-xl pt-5">
      <div className="flex-1">
        <ul className="list-disc list-inside space-y-3 ">
          <li>Paliam Palace</li>
          <li>Jewish Synagogue Museum</li>
          <li>Kottakkavu Mar Thoma Syro-Malabar Church</li>
        </ul>
      </div>
      <div className="flex-1">
        <ul className="list-disc list-inside space-y-3">
          <li>Don Bosco Church</li>
          <li>Dakshina Mookambika Temple</li>
        </ul>
      </div>
    </div>
    <p className="text-xl pt-5 pb-5 ">
      Paravur was historically known for traditional businesses like
      coir, handlooms, and agriculture. Located about 20 kilometers away
      from the Kochi city center, the town is now transforming into a
      significant residential suburb.
    </p>
  </div>
  <div className="lg:w-[32%]  p-4">
    <Image
      width={400}
      height={350}
      src="/my_constituency/About_paravur.png"
      className="h-full w-full"
      alt="About Paravur"
    />
  </div>
</div>

      </div>
    </div>
  )
}

export default MyConsistencyPage
