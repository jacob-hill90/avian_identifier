import axios from 'axios'

function NavBar({user, whoAmI}){

    const logout = function(event){
        event.preventDefault()
        axios.post('/logout').then((response)=>{
          console.log('response from server: ', response)
          whoAmI()
          window.location.href = '/'
        })
      }

    return(
        <div>
            <div class="container">
                <div class="row">
                    <div class="col-sm"></div>
                    <div class="col-sm">
                        <a className='links' href='/#/weather'>Weather</a>
                    </div>
                    <div class="col-sm">
                        <a className='links' href='/#/random'>Random Bird</a>
                    </div>
                    <div class="col-sm logo">
                        <a href="/"><img src="static/bino_icon_black.png" width='50%'></img></a>
                    </div>
                    <div class="col-sm">
                        <a className='links' href='/#/search'>Search</a>
                    </div>
                    <div class="col-sm">
                        <a className='links' href='/#/birdlog'>Bird Log</a>
                    </div>
                    <div class="col-sm"></div>
                </div>
                {user ?  
                <div className="login">
                    <p>{user.email}</p>
                    <button onClick={logout}>Logout</button>
                </div>
                : 
                <div className="login">
                    <a href="/#/signup">Sign Up</a>
                    <a href="/#/login">Log In</a>
                </div>
                }
                
            </div>
        </div>
    )
}
export default NavBar
