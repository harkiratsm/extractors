import React from 'react'
import '../css/Result.css'
import Youlog from './Youlog'
import Clut from './Clut'

function Result({videos,newdata,backdata}) {
    console.log("👽",videos)
    console.log("🎮",newdata)
    console.log("🚀",backdata)
    
    const rendervid=videos.map((i,index)=>{
        const link=newdata[index]
        const link1=backdata[index]
        if(i.id.kind==="youtube#channel"){  
            return <Youlog thumbnail={i.snippet.thumbnails.high.url} key={i.etag} title={link?.snippet?.title} sub={link?.statistics?.subscriberCount} desc={link?.snippet?.description} vid={link?.statistics?.videoCount}></Youlog>
        }
        else{
            return <Clut  description={i.snippet.description}  logochannel={link?.snippet.thumbnails.high.url} key={i.etag} thumbnail={i.snippet.thumbnails.high.url} title={i.snippet.title} channelname={link?.snippet?.title} views={link1?.statistics?.viewCount} time={i?.snippet?.publishedAt} />
        }
    });
    return (
        <div className="result">
            <div>
                {rendervid}
            </div>
            
        </div>
    )
}

export default Result
