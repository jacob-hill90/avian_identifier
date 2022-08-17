import axios from "axios"
import { useEffect, useState } from "react";

function BirdLog({user}) {

    const [sighting, setSighting] = useState(null)

    function listSighting(){
        axios.get('/listSighting').then((response)=> {console.log(response.data)
        setSighting(response.data)
    })
    }

    useEffect(() => {
        listSighting()
      }, [])

    return (
    <div className="content">
        <div className="banner_container">
            <img className="eagle" src="static/banner.jpeg"></img>
        </div>
        <a href='/#/logbird'>Log Bird</a>
        {user ? 
        <div className="birdTable">
            <div className="title">Title</div>
            <div className="description">Description</div>
            <div className="lat">Latitude</div>
            <div className="long">Longitude</div>
            <div className="weather">Weather</div>
        </div>
        : <div className="required">Please Log In to See Archived Birds<a href="/#/login">Log In Here</a></div>}
        {
            sighting &&
            sighting.map(x => <div className="title">{x.fields.title}{x.fields.description}</div>)

        }
    </div>
    )
  }

  export default BirdLog