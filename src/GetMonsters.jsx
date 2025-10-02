import { useEffect, useState } from "react"
import {getAllMonsters, getMonster} from "./api"
import { data, useNavigate } from "react-router"


function GetMonsters(){

    const [monsterData, setMonsterData] = useState([])
    const [MonstersLoading, setMonstersLoading] = useState(true)
    const [letter, setLetter] = useState("A")
    const navigate = useNavigate();
    useEffect(() => {
        getAllMonsters().then((data)=>{
            setMonsterData(data.results)
            setMonstersLoading(false)
        })
    },[letter])

    function showMonster(event) {        
        const monster = event.target.value.replaceAll(" ","-").toLowerCase()
        navigate(`/monsters/${monster}`)   
    }

    function addUrls(){
        for (let monster of monsterData) {
            monster["imageURL"] = "https://www.dnd5eapi.co/api/images/monsters/"+monster.name.replaceAll(" ","-").toLowerCase()+".png"
        }
    }
    return (
        <div className="filterBet">
            <section id="letter-filter">
                <h2>Filter by Alphabet</h2>
                <div className="letter-buttons">
                    {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(letter => (
                        <button key={letter} onClick={() => {
                            setLetter(letter)
                            const filteredMonsters = monsterData.filter(monster => monster.name.startsWith(letter));
                            setMonsterData(filteredMonsters);
                        }}>{letter}</button>
                    ))}
                </div>
            </section>

            <section id="monsters">
                {addUrls()}
                { MonstersLoading ? 'Loading Monsters...' : monsterData.filter((monster)=> monster.name.startsWith(letter)).map((monster)=>{
                    return <ul id="monster-box" key={monster.index}>
                        <div className="monster-details">
                            <p>{monster.name}</p>
                            <img class="monster-list-image" src={monster.imageURL} alt={monster.name} />
                            <button className="monsterbutton" onClick={showMonster} value={monster.name}>Show {monster.name} stats</button>
                        </div>
                        </ul>
                })}
            </section>  
        </div>
    )
}   

export default GetMonsters