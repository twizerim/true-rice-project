import {CloseOutlined} from "@ant-design/icons"
import {MenuOutlined} from "@ant-design/icons"
import React,{useState} from "react"


function Admindashboard(){
    const [showNav,setshowNav]=useState(false)
    const [menuicon,setmenu]=useState(true)
    
    const buttonhide = () =>{
        setshowNav(false)
        setmenu(true)
    }  
    const buttonshower = () =>{
        setshowNav(true)
        setmenu(false)
        
    }
    return (
        <>
            <div class="admin-contaner">
                {showNav && (
                    <div class="navigate">
                    <div className="bitenav">
                    <CloseOutlined onClick={buttonhide} className="white"/>
                    
                    </div>
                   <div class="loge">
                   
                         <img src="" alt="ifi" />
                       <h1>TWIZERIMANA Gedeon</h1>
                   </div>
                   <div class="linksadmin">
                       <li><a href="#" onclick="contact()">Messgage</a></li>
                       <li><a href="#" onclick="blogs()">Users</a></li>
                       <li><a href="">Farmers</a></li>
                       <li><a href="#" onclick="table()">Product</a></li>
                       <li><a href="">New oder</a></li>
                       <li><a href="/farmerpanel">Production</a></li>
                   </div>
               </div>
                )}
            
            <div class="activities">
                <div class="nav">
                    <div class="lod">
                        {menuicon && (
                           <MenuOutlined onClick={buttonshower} className="white"/>
                        )}
                   
                    <h1>Admin dash board</h1>
                    </div>
                    <div class="notifc">
                        <button><a href="/login">Log out</a></button>
                    </div>
                </div>
                <div className="allactivities-controll">
                </div>
            </div>
        </div>
        </>
    )
}
export default Admindashboard