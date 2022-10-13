import React from "react";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Jobcard from './Jobcard'
import './css/About.css'
import axios from "axios";

const Jobs = () => {

    const [list, setlist] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);


    const getjobsdata = () => {
      axios.post('/getjobs')   //  http://localhost:3000/jobs
      .then((response) => response.data)
      .then((response) => {
          setlist(response)
        })

    //   console.log(typeof(list))
    }



    useEffect(() => {
        getjobsdata();
      },[])




    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
        // console.log(list)
    }, [pathname]);


    


    const searchchang = (e) => {
        const searchTerm = e.target.value;
        console.log(searchTerm)
        const result = list.filter((item) => item.title.toLowerCase().includes(searchTerm))
        if (searchTerm.length > 0) {
            setlist(result)
        } else {
            // setlist(props.list)
        }
    }


    const pagenumbers = [];
    for (let i = 1; i <= Math.ceil(list.length / 6); i++) {
        pagenumbers.push(i)
    }

    const indexOfLastPost = currentPage * 6;
    const indexOfFirstPost = indexOfLastPost - 6;
    const currentPosts = list.slice(indexOfFirstPost, indexOfLastPost);


    const paginate = pageNumber => setCurrentPage(pageNumber);


    return (
        <div>
            <div className="abouth jobsjpg" >
                <h1>Jobs</h1>
            </div >

            <div className="tagbar">
                <input type="search" placeholder="Search" onChange={searchchang}/>
            </div>
            <div className="jccont">
                {                    
                    // console.log(list)
                    // currentPosts
                    currentPosts.map((item,index) => <Jobcard key={index} datain={item} />)                 
                    
                }
            </div>
            <div className="pagination">
                <ul className="paginationul">                 
                    {
                         pagenumbers.map((num)=>(

                            
                             <li key={num} className="paginationli" >
                                 <a onClick={() => paginate(num)} href="#">{num}</a>
                             </li>
                         ))
                     }
                </ul>
            </div>

        </div>
    )
}
export default Jobs;