import Size from "./size"
import Region from "./Region"
import Color from "./Color"

function MainContent(){
    return(
        <div className="content">
            <div className="banner_container">
                <img className="eagle" src="static/banner.jpeg"></img>
                <div className="banner_text">
                    <h1>Welcome to Avian Identifier</h1>
                    <h3>Identify species of birds based on:</h3>
                    <h5>Color</h5>
                    <h5>Size</h5>
                    <h5>Region</h5>
                </div>
            </div>
            <Size />
            <Region />
            <Color />
        </div>
    )
}
export default MainContent