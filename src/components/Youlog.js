import React from 'react'
import '../css/You_log.css'
function Youlog({thumbnail,title,sub,vid,desc}) {
    return (
        <div className="video-logo-container">
            <img src={thumbnail} alt="log"></img>
            <div className="title-logo-con">                
                <div className="view-logo-con">
                    <h4>{title}</h4>
                    <p>{sub} subscribers  &#183; {vid} videos</p>
                    <p className="desc-con">{desc}</p>
                </div>
            </div>
        </div>
    )
}

export default Youlog
