import xinstyles from "../../styles/xin/aboutprofile.module.css";
// import xinimage from "../../styles/xin/Rectangle1.png"

function AboutProfile({name,imagePath,description}) {
  return (
    <div>
      {/* <p className={xinstyles.x}>これはAbout Usです。</p> */}
      <div className={xinstyles.media}>
        <div className={xinstyles.card}>
          <div className={xinstyles.image}>
            <img src={imagePath} alt="画像です"/>
          </div>
          <div className={xinstyles.info}>
            <p className={xinstyles.name}>{name}</p>
            <p className={xinstyles.text}>{description}
              </p>
          </div>
        </div>

        {/* <div className={xinstyles.card}>2</div>
        <div className={xinstyles.card}>3</div>
        <div className={xinstyles.card}>4</div> */}
      </div>
    </div>

  )
}

export default AboutProfile;