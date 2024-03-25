import CloseOutlined from "@ant-design/icons"
import MenuOutlined from "@ant-design/icons"


function Admindashboard(){
    return (
        <>
            <div class="admin-contaner">
            <div class="navigate">
                 <div className="bitenav">
                 <CloseOutlined className="white"/>
                 <MenuOutlined className="white"/>
                 </div>
                <div class="loge">
                
                      <img src="" alt="ifi" />
                    <h1>TWIZERIMANA Gedeon</h1>
                </div>
                <div class="linksadmin">
                    <li><a href="#" onclick="contact()">Messgage</a></li>
                    <li><a href="#" onclick="blogs()">Blogs</a></li>
                    <li><a href="">Comment</a></li>
                    <li><a href="#" onclick="table()">Users</a></li>
                    <li><a href="">Notification</a></li>
                    <li><a href="/farmerpanel">Home</a></li>
                </div>
            </div>
            <div class="activities">
                <div class="nav">
                    <div class="lod">
                    
                    <h1>Admin dash board</h1>
                    </div>
                    <div class="notifc">
                        <button><a href="">Log out</a></button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Admindashboard