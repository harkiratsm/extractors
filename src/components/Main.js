import React ,{useState} from 'react'
import Search from './Search'
import Result from './Result'
import '../css/Main.css'
import axios from '../utils/axios'
function Main() {
    const [videos,setvideos]=useState([])
    const [newdata,setnewdata]=useState([])
    const [backdata,setbackdata]=useState([])
    const handleSubmit = async (termFromSearchBar) => {
        await axios.get('/search', {
            params: {
                q: termFromSearchBar
            }
        })
        .then(async(response)=>{
        setvideos(response.data.items)
        console.log("this is resp",response);
        console.log(videos)
        response.data.items.map(async(i)=>{
            const response1= await axios.get('/channels',{
            params:{
                part:'statistics,snippet',
                id:i.snippet.channelId,
                maxResults:1
            }
            })
            // console.log("this is new",response1.data.items)
            setnewdata(prev => [...prev,response1.data.items[0]])
            // setnewdata(()=>{
            //   newdata.push(response1.data.items[0])
            // })
            
        })
        response.data.items.map(async(i)=>{
            
            if(i.id.kind==="youtube#channel"){
            (await function (){
                setbackdata(prev=>[...prev,{harry:"io"}])
            })();
            
            }
            else{
            const response2=await axios.get('./videos',{
                params:{
                part:'statistics,contentDetails',
                id:i.id.videoId
                }
            })
            setbackdata(prev=>[...prev,response2.data.items[0]])
            }
            
        })
        
        })   
    };
    const searchlol=()=>{
        setnewdata([])
    }
    const searchlol1=()=>{
        setbackdata([])
    }
    return (
        <div className="app">
            <div>
                <Search handleclick={handleSubmit} searchlol={searchlol} searchlol1={searchlol1}/>
            </div>
            <Result videos={videos}  newdata={newdata} backdata={backdata} />   
        </div>
    )
}

export default Main
