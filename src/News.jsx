export default function News(props)
{

    return(
        <div className="news">
            <div className="news-img">
              <img src={props.article.urlToImage} alt="" />
            </div>
            <h1>{props.article.title}</h1>
            <p>{props.article.description?.substring(0,100).concat("...")}  <a href={props.article.url} target="blank">Readmore</a></p>
          
            <div className="source">
                <p>{props.article.author?.substring(0,10)}</p>
                <p>{props.article.source.name?.substring(0,10)}</p>
            </div>
        </div>
    )
}