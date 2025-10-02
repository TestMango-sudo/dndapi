

export default function Getspells(){


    return  (
    <section id="spelldata">
        {spellsdata.length === 0 ? 'No Spells to display currently': 
            spellsdata.map((spell) =>{
                <ul key={spell.index}>
                    <li>{spell.level}</li>
                    <li>{spell.name}</li>
                    <li>{spell.url}</li>
                </ul>
                })}
    </section>
    )
}
