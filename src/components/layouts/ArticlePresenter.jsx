import React from 'react'
import Hiduke from '../hatake/hiduke';
import Ikon from '../hatake/ikon';
import Midasi1 from '../hatake/midasi1';
import Midasi2 from '../hatake/midasi2';
import Midasi3 from '../hatake/midasi3';
import articles from "../../db/data.json";
import { useParams } from 'react-router-dom';
import CommentForm from '../saya/CommentForm';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Comments from '../saya/Comments';

const ArticlePresenter = () => {
  const { id } = useParams();
  const data = articles.find((data) => data.id === Number(id));
  const queryClient = new QueryClient();
  
  return (
    <div>

      <div>
        <Hiduke
          title={data.title}
          hiduke={data.createdAt}
          />
          <Midasi3
          text={data.index}
          />
      {
        data.contents.map((data) => {
            if (data.heading === 1){
              return <Midasi2
              melit={data.title}
                text={data.description}
              />
            } else if(data.heading === 2){
              return <Midasi2
              melit={data.title}
              text={data.description}
              />
            } else if (data.heading === 3) {
              return <Midasi2
                melit={data.title}
                text={data.description}
              />
            } else if(data.heading === 4){
              return <Midasi1
                midashi={data.title}
                text={data.description}
              />
            } else {
              return <></>
            }
  })
        }
        <Ikon
          ProfileImage={data.imagePath}
          NAME={data.name}
          text={data.description}
        />
      </div>
      <QueryClientProvider client={queryClient}>
        <CommentForm
          articleId={id}
        />
        <Comments
          articleId={id}
        />
      </QueryClientProvider>
    </div>
  )
}

export default ArticlePresenter