import xinstyles from "../../styles/xin/aboutprofile.module.css";
import xinimage from "../../styles/xin/Rectangle1.png"

function AboutProfile() {
  return (
    <div>
      {/* <p className={xinstyles.x}>これはAbout Usです。</p> */}
      <div className={xinstyles.media}>
        <div className={xinstyles.card}>
          <div className={xinstyles.image}>
            <img src={xinimage}/>
          </div>
          <div className={xinstyles.info}>
            <p className={xinstyles.name}>近代太郎</p>
            <p className={xinstyles.text}>テキストテキストテキストテキストテキストテキストテキストテキスト
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
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