import { useEffect, useState } from "react"
import './Spells.scss'
import { SpellsCard } from "../../components/SpellsCard/SpellsCard";
import { Paginate } from "../../components/Paginate/Paginate";
export const Spells=()=>{
    const [spells, setSpells]=useState([]);
const [currentSpells, setcurrentSpells]=useState([])
    async function fetchSpells() {
        try{
            const response= await fetch('https://potterhead-api.vercel.app/api/spells')
            const data= await response.json()
            setSpells(data)
        }catch(error){
            console.log(error);
        }
        
    }
    useEffect(()=>{
        fetchSpells()
    },[])

    
    return(
    <>
    <div className="spells">
        {
            currentSpells?(<ul className="spells-grid">{currentSpells.map((spell)=><SpellsCard key={spell.id} spell={spell}></SpellsCard>)}</ul>):(<p>Loading ....</p>)
        
        }
   
    <Paginate itemsPerPage={10} itemsData={spells} setCurrentItems={setcurrentSpells}  ></Paginate> </div>
    </>
    )
}