import AboutProfile from "./aboutprofile";
import aboutusdata from "../../db/aboutus.json"

function AboutUs() {
  return (
    <>
    {
      aboutusdata.map((member) => {
        return <AboutProfile 
        name={member.name}
        imagePath={member.imagePath}
        description={member.description}
        />
      })
    }
    </>
  )
}

export default AboutUs;