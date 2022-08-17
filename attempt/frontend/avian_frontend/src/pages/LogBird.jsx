import axios from 'axios';

function LogBird({user}) {

    function saveBird(){
        const title = document.getElementById('title').value
        const description = document.getElementById('description').value
        const lat = document.getElementById('lat').value
        const long = document.getElementById('long').value

        axios.post("/logBird", {title : title, description : description, lat : lat, long : long, user: user}).then((response) =>{
            window.location.href = '/#/birdlog'
            console.log('it worked')
        })
    }

    return (
    <div className="content">
        <div className="banner_container">
            <img className="eagle" src="static/banner.jpeg"></img>
        </div>
        <h1>Add New Bird</h1>
        <label>Title:</label>
        <input id = "title"></input>
        <br></br>
        <label>Description:</label>
        <input id = "description"></input>
        <br></br>
        <label>Lat:</label>
        <input id = "lat"></input>
        <br></br>
        <label>Long:</label>
        <input id = "long"></input>
        <br></br>
        <button type='submit' onClick={saveBird}>Submit!</button>
    </div>
    )
  }

  export default LogBird