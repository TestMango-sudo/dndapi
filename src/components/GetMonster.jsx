import { data, useParams} from "react-router";
import { useEffect, useState } from "react";
import { getMonster } from "../api";

function selectedMonster(){
    const  monsterName = useParams().id;
    const [monster, setMonster] = useState({});
    const [imgUrl, setImgUrl] = useState("");
useEffect(() => {
    getMonster(monsterName).then(data => { 
            //console.log("Monster AC from data >>", data.armor_class)
            setMonster(data)
            //console.log("Monster AC>>", monster.armor_class[0])
            setImgUrl("https://www.dnd5eapi.co"+data.image)
            console.log("imgURL>>", data.image)
    })
},[])
    return (
        <div className="monster-box">
            <div>
                <h2>{monster.name}</h2>
                <img class="monster-image" src={imgUrl} alt={monster.name} />
            </div>
            <div>
                <p>Alignment: {monster.alignment} </p>
                <p>Hit Points: {monster.hit_points} </p>
                <p>Hit Dice: {monster.hit_dice} </p>
                <p>Strength: {monster.strength} </p>
                <p>Dexterity: {monster.dexterity} </p>
                <p>Constitution: {monster.constitution} </p>
                <p>Intelligence: {monster.intelligence} </p>
                <p>Wisdom: {monster.wisdom} </p>
                <p>Charisma: {monster.charisma} </p>
            </div>
            {/* <p>Armor Class: {Object.entries(monster.armor_class).map((key, value) => `${key}: ${value}`)}</p>            */}
            {/* <p>Speed: {Object.entries(monster.speed).map(([key, value]) => `${key}: ${value}`).join(', ')}</p> */}
            {/* <p>Special Abilities: {monster.special_abilities ? monster.special_abilities.map(ability => ability.name).join(', ') : 'N/A'}</p> */}
            {/* <p>Actions: {monster.legendary_actions ? monster.legendary_actions.map(ability => ability.name).join(', ') : 'N/A'}</p> */}
        </div>
    )

}

export default selectedMonster