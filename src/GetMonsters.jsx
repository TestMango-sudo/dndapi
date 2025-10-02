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
        console.log("FROM GETMONSTERS ><>",monster)
        
            //navigate(`${data.name.replaceAll(" ", "-").toLowerCase()}`, {state: {monster, imgUrl}})
            // alert(`Monster Name: ${data.name} \n Alignment: ${data.alignment} \n Hit Points: ${data.hit_points} \n Hit Dice: ${data.hit_dice} \n 
            //     Strength: ${data.strength} \n Dexterity: ${data.dexterity} \n Constitution: ${data.constitution} \n Intelligence: ${data.intelligence} \n 
            //     Wisdom: ${data.wisdom} \n Charisma: ${data.charisma} \n 
            //     Armor Class: ${Object.entries(...data.armor_class).map(([key, value]) => `${key}: ${value}`).join(', ')} \n
            //     Speed: ${Object.entries(data.speed).map(([key, value]) => `${key}: ${value}`).join(', ')} \n 
            //     Special Abilities: ${data.special_abilities ? data.special_abilities.map(ability => ability.name).join(', ') : 'N/A'} \n
            //     Actions: ${data.legendary_actions ? data.legendary_actions.map(ability => ability.name).join(', ') : 'N/A'} \n` 
            // )
                      
        //})
        
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
                    <button onClick={() => {
                        getAllMonsters().then((data)=>{
                            setMonsterData(data.results)
                            setMonstersLoading(false)
                        })
                    }}>Reset</button>
                </div>
            </section>

            <section id="monsters">
                <h2 id="monsters.title">Monsters</h2>
                <h3>{ MonstersLoading ? 'Loading Monsters...' : monsterData.filter((monster)=> monster.name.startsWith(letter)).map((monster)=>{
                    return <ul id="spellbox" key={monster.index}>
                        <p>Monster Name: {monster.name}</p>
                        <div className="monsterDetails">
                            <button className="monsterbutton" onClick={showMonster} value={monster.name}>Show {monster.name} Details</button>
                        </div>
                        </ul>
                })}</h3>
            </section>
        </div>
    )
}   

export default GetMonsters