import React from 'react';
import Image from 'next/image';

const PressReleasesBanner = () => {
    return (
        <>
          <div className="relative">
        <Image className="w-full h-full" width={1050} height={850} src="/press_release/press.jpeg" alt='press' />
        <p className="absolute top-1/2 lg:left-28 transform -translate-y-1/2 text-center text-6xl  text-[#033B5F]">
          Press Releases
        </p>
      </div>  
        </>
    );
};

export default PressReleasesBanner;