

export default function Button(props){
     
    return (
        <>
         <div className="button">
             <button type="submit">{props.name}</button>
         </div>
        </>
    )
}