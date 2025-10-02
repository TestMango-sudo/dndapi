import { useEffect, useState } from "react"
import {getAllSpells} from "./api"
import { data, useNavigate } from "react-router"

function Getspells(){
    const navigate = useNavigate();
    const apiUrl = "https://www.dnd5eapi.co"
    const [spellData, setSpellData] = useState([])
    const [spellsLoading, setSpellsLoading] = useState(true)
    useEffect(() => {
        getAllSpells().then((data)=>{
            setSpellData(data.results)
            setSpellsLoading(false)
        })
    },[])
function showSpell(event) {
    const spell = event.target.value.toLowerCase().replaceAll(" ","-")
    console.log(spell)
    navigate(`/spells/${spell}`)
    // alert("Feature coming soon!")
}

    return (
        <section id="spells">
            <h2>Spells</h2>
            <p>{ spellsLoading ? 'Loading Spells...' : spellData.map((spell)=>{
                return <ul id={spell.name}>
                    <div id="spellbox">
                        <p>Spell Name: {spell.name}</p>
                        <p>Level: {spell.level}</p>
                        <button onClick={showSpell} value={spell.name}>Show Spell</button>
                        <a href={apiUrl+spell.url} >Spell Description URL: {spell.url}</a>
                    </div>
                    </ul>
            })}</p>
        </section>
    )
}   

export default Getspells