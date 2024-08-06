import React from 'react';

const PressReleasesBanner = () => {
    return (
        <>
          <div className="relative">
        <img className="w-full" src="/press_release/press.jpeg" />
        <h6 className="absolute top-1/2 lg:left-28 transform -translate-y-1/2 text-center text-6xl  text-[#033B5F]">
          Press Releases
        </h6>
      </div>  
        </>
    );
};

export default PressReleasesBanner;