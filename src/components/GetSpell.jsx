import { data, useParams} from "react-router";
import { useEffect, useState } from "react";
import { getSpellImage } from "../api";



function GetSpell(){
    const spellName = useParams().id;
    const [spellLoading, setSpellLoading] = useState(true)
    const [spellData, setSpellData] = useState({});
    console.log("Spell Name >>", spellName)
    
    useEffect(() => {
    getSpell(spellName).then(data => { 
            console.log(data)
            setSpellData(data)
            setSpellLoading(false)
            getSpellImage(data.desc).then(dataUri => {
                spellImg = dataUri;
                console.log(spellImg);
            });
    })
},[])
    
    
    return (
        <section id="spell">
            <div id="spellbox">
                <h3>{ spellLoading ? 'Loading Spell...' : 
                    <ul id="spell.name" key={spellData.name}>
                        <p>Spell Name: {spellData.name}</p>
                        <p>Level: {spellData.level}</p>
                        <p>Range: {spellData.range}</p>
                        <p>Duration: {spellData.duration}</p>
                        <p>Casting Time: {spellData.casting_time}</p>
                        <p>Components: {spellData.components ? spellData.components.join(', ') : 'N/A'}</p>
                        <p>Material: {spellData.material ? spellData.material : 'N/A'}</p>
                        <p>School: {spellData.school ? spellData.school.name : 'N/A'}</p>
                        <div className="SpellDetails">
                            <p>Description: {spellData.desc ? spellData.desc.map((desc, index) => (
                                <span key={index}>{desc}<br/></span>
                            )) : 'N/A'}</p>
                        </div>
                        </ul>
                }</h3>
            </div>
        </section>
    )
}

export default GetSpell