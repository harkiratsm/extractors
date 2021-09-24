import React from 'react'
import '../css/Clut.css'
function Clut({ thumbnail , title, views, time ,description}) {
    const convertTime=(d1)=>{
            var dt1=new Date(d1)
            var d2=new Date();
            function monthDiff1(dateFrom, dateTo) {
                return dateTo.getMonth() - dateFrom.getMonth() + (12 * (dateTo.getFullYear() - dateFrom.getFullYear()))
            }
           function getYear(dateFrom,dateTo){
                return Math.abs(Math.round((dateFrom.getFullYear() -  dateTo.getFullYear())))
           }
           function hoursDiff(dateFrom,dateTo){
               return Math.abs(Math.round((dateFrom.getTime() -  dateTo.getTime())/(1000*60*60)))
           }
           function getdays(dateFrom,dateTo){
               return Math.abs(Math.round((dateFrom.getTime() -  dateTo.getTime())/(1000*60*60*24)))
           }
           var month=monthDiff1(dt1,d2)
           var year=getYear(dt1,d2)
           var hour=hoursDiff(d2,dt1)
           var day=getdays(d2,dt1)
           console.log("month :",month," year ",year,"day ",day,"hour  ",hour)
           if(hour<=24){
               return hour+" hours "
           }
           else if(day<=30){
               return day+" days "
           }
           else if(month<=12){
               return month+" month "
           }
           else if(year>=1){
               return year+" year "
           }
    }
    return (
        <div className="video-container">
            <img src={thumbnail} alt="log"></img>
            <div className="title-con">                
                <div className="view-con">
                    <h4>{title}</h4>
                    <p>{views} &#183; {convertTime(time)}</p>
    
                    <p className="descript">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default Clut
