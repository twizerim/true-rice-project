

function Farmerdashboard(){
    return (
        <>
            <div class="admin-contaner">
            <div class="navigate">
                <nav><i class="fa-sharp fa-solid fa-delete-left" onclick="navad()"></i></nav>
                <div class="loge">
                      <img src="" alt="ifi" />
                    <h1>TWIZERIMANA Gedeon</h1>
                </div>
                <div class="links">
                    <li><a href="#" onclick="contact()">Messgage</a></li>
                    <li><a href="#" onclick="blogs()">Blogs</a></li>
                    <li><a href="">Comment</a></li>
                    <li><a href="#" onclick="table()">Users</a></li>
                    <li><a href="">Notification</a></li>
                    <li><a href="./index.html">Home</a></li>
                </div>
            </div>
            <div class="activities">
                <div class="nav">
                    <div class="lod">
                        <i class="fa-sharp fa-solid fa-bars" onclick="naver()"></i>
                    <h1>Farmers dash board</h1>
                    </div>
                    <div class="notifc">
                        Notification
                    </div>
                </div>
                <div class="cards">
                    <div class="card">
                        <h2>Blog likes</h2>
                        <li>fist blog.....<p>50</p></li>
                        <li>last blog.....<p>50</p></li>
                        <li>third blog.....<p>50</p></li>
                    </div>
                    <div class="card">
                        <h2>Blog dislikes</h2>
                        <li>fist blog.....<p>50</p></li>
                        <li>last blog.....<p>50</p></li>
                        <li>third blog.....<p>50</p></li>
                    </div>
                    <div class="card">
                        <h2>Blog comments</h2>
                        <li>fist blog.....<p>50</p></li>
                        <li>last blog.....<p>50</p></li>
                        <li>third blog.....<p>50</p></li>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Farmerdashboard