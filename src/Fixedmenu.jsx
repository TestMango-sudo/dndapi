import { Link } from "react-router"

export default function Fixedmenu(){
    
    return (
        <section id="navigation">
            <ul id="navbar">
                <Link to="/"><button>Home</button></Link>
                <Link to="/spells"><button>Get Spells</button></Link>
                <Link to="/monsters"><button>Get Monsters</button></Link>
                <Link to="/"><button>Possible Other Option</button></Link>  
            </ul>
        </section>
    )
}