import Reacts from "react";




export default function Menu(){
    return(<>
    <nav className="Nav">
          <a href="/login">Login</a>
          <a href="/main">Main</a>
          <a href="/make">Make</a>
          <a href="/list">List</a>
          <button>Logout</button>
        </nav>
    </>)
}