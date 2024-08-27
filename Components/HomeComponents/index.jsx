import React from "react"
import Homepage from "./Homepage"
// import TimeLine from "./TimeLine"
import PublicEye from "./PublicEye"
import GettingCandid from "./GettingCandid"
import MeUnfiltered from "./MeUnfiltered"

const index = () => {
  return (
    <div>
      <Homepage />
      {/* <TimeLine/> */}
      <PublicEye />
      <GettingCandid />
      <MeUnfiltered />
    
    </div>
  )
}

export default index
