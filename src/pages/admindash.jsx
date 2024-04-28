import {CloseOutlined} from "@ant-design/icons"
import {MenuOutlined} from "@ant-design/icons"
import React,{useState} from "react"
import Usertable from "../component/usertable"
import Message from "../component/message"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import SmsFailedIcon from '@mui/icons-material/SmsFailed';
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import DiningIcon from '@mui/icons-material/Dining';
import Postproduct from "../component/postproduct"
import logoimage from "../assets/agri-log.png"


function Admindashboard(){
    const [showNav,setshowNav]=useState(false)
    const [menuicon,setmenu]=useState(true)
    const [mess,setmess]=useState(true)
    const [user,setuser]=useState(false)
    const [product,setproduct]=useState(false)


    const Messages = () =>{
        setmess(false)
        setuser(true)
        setproduct(false)
    }
    const Users = () =>{
        setmess(true)
        setuser(false)
        setproduct(false)
    }
    const Product = () =>{
        
        setmess(false)
        setuser(false)
        setproduct(true)
    }
    
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
                     <img src={logoimage} alt="" />
                       <h1>Gatsibo agriculture and trading</h1>
                   </div>
                   <div class="linksadmin">
                       <li><GroupAddIcon/><a href="#" onClick={Users}> Users</a></li>
                       <li><Diversity1Icon/> <a href="">Farmers</a></li>
                       <li><DiningIcon/><a href="#" onClick={Product}>Product</a></li>
                       <li><SmsFailedIcon/><a href="#" onClick={Messages}>Messgage</a></li>
                       <li><AddShoppingCartIcon/><a href="/oder">New oder</a></li>
                       <li><ChildFriendlyIcon/> <a href="/farmerpanel">Production</a></li>
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
                        <button><a href="/">Log out</a></button>
                    </div>
                </div>
                <div className="allactivities-controll">
                    {mess &&( <div className="user"> <Usertable/> </div>)}
                    {user && ( <div className="mess">
                    <h1>This is the message from contact us</h1>
                        <Message/>
                    </div>)}
                    {product && (<Postproduct/>)}
                </div>
            </div>
        </div>
        </>
    )
}
export default Admindashboard