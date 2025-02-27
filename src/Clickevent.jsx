import image from './assets/images.jpg';
function Clickevent(){
    const clickevent=(e,name)=>{console.log(name+" clicked me!!");
    console.log(e);
    e.target.style.display="none"}

    return(
        <img onClick={(e)=>clickevent(e,"Dharmendra")} src={image}></img>
    )
}
export default Clickevent;
