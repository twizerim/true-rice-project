import Button from "./button"

function Postproduct(){
    return(
        <div className="postproduct">
            <h3 >Post product that is available to buy</h3>
            <form action="" id="formos">
                <div className="division">
                    <h3 className="label">Title:</h3>
                    <label htmlFor="">
                        <input type="text" />
                    </label>
                </div>
                <div className="division">
                <h3 className="label">Price:</h3>
                    <label htmlFor="">
                        <input type="text" />
                    </label>
                </div>
                <div className="division">
                <h3 className="label">Name:</h3>
                    <label htmlFor="">
                        <input type="text" />
                    </label>
                </div>
                <div className="division">
                <h3 className="label">Image:</h3>
                    <label htmlFor="">
                        <input type="file" />
                    </label>
                </div>
                <div className="division">
                <h3 className="label">Quontity:</h3>
                    <label htmlFor="">
                        <input type="text" />
                    </label>
                </div>
                <div className="division">
                <h3 className="label">Description:</h3>
                    <label htmlFor="">
                        <textarea name="" id="" cols="" rows=""></textarea>
                    </label>
                </div>
               
                <Button name="Submit now!!"/>
            </form>
        </div>
    )

}
export default Postproduct