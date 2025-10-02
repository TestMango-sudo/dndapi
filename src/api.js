import axios from "axios";
import { data } from "react-router";
import ('text-to-image')

const api = axios.create({
    baseURL:"https://www.dnd5eapi.co"
    })

function getAllSpells(){
return api.get('/api/2014/spells').then(({data}) => {
    return data
}).catch(error => {
    window.alert(error)
}); 
}

function getAllMonsters(){
return api.get('/api/2014/monsters').then(({data}) => {
    return data
}).catch(error => {
    window.alert(error)
}); 
}

function getMonster(monster){
    console.log("from api >>", monster)
    const monsterName = monster
    return api.get(`/api/2014/monsters/${monsterName}`).then(({data}) => {
    return data
}).catch(error => {
    window.alert(error)
});
}

function getSpell(spell){
    console.log("from api >>", spell)
    const spellName = spell
    return api.get(`/api/2014/spells/${spellName}`).then(({data}) => {
    return data
}).catch(error => {
    window.alert(error)
});
}

function getSpellImage(spellDesc){
    const description = spellDesc
     textToImage.generate(data.desc, { debug: true }).then(function (dataUri) {
                spellImg = dataUri;
                console.log(spellImg);
            });
    return dataUri
};



export {getAllSpells, getAllMonsters, getMonster, getSpell, getSpellImage}

