import celebrationpic from './assets/images.jpg'
function Picture(){
    return(
   <div className="body">
    <img className="image" src={celebrationpic} alt="img"/>
    <h2>Dharmendra Patel</h2>
    </div>
    )
}
export default Picture