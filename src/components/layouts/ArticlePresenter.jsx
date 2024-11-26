import React from 'react'
import Hiduke from '../hatake/hiduke';
import Ikon from '../hatake/ikon';
import Midasi1 from '../hatake/midasi1';
import Midasi2 from '../hatake/midasi2';
import Midasi3 from '../hatake/midasi3';
import articles from "../../db/data.json";

const ArticlePresenter = () => {
  const data =articles[0];
  return (
    <div>

      {/* <div className={styles.container}> */}
      <Hiduke
        title={data.title}
        hiduke={data.createdAt}
        />
      {/* </div> */}

      {/* // <div className={styles.card}>
      // <div className={styles.image}>
      // <div className={styles.text}> */}
      <Ikon
        ProfileImage={data.imagePath}
        NAME={data.name}
        text={data.description}
      />
      {/* // </div>
      // </div>
      // </div> */}

      {/* <div className={styles.box}> */}
        <Midasi3
        text={data.index}
        />

      {/* <div className={styles.section}>
      <div className={styles.heading}>

      <div className={styles.content}> */}
    {
      data.contents.map((data) => {
        console.log(data);
          if (data.heading == 1){
            return <Midasi2
            melit={data.title}
              text={data.description}
            />
          }

          else if(data.heading == 2){
            return <Midasi2
            melit={data.title}
              text={data.description}
              />
          }

          else if(data.heading ==3){
            return <Midasi2
            melit={data.title}
            text={data.description}
            />    
          }

          else if(data.heading ==4){
            return <Midasi1
              midashi={data.title}
              text={data.description}
            />
          }
})
      }
      {/* </div>
      </div>
      </div>
      </div> */}
  
    </div>
  )
}

export default ArticlePresenter