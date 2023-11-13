import { useState } from "react";
const Player = ({ name, symbol }) => {
    const [isEdit, setIsEdit] = useState(false);
    const [nom, setNom] = useState(name)
    const HandleChange = (e) => {
        e.preventDefault;
        setNom(e.target.value)
    }
    return (
        <li>
            <span className="player">
                
                    {
                        !isEdit ?
                       <span className="player-name">{nom}</span>
                            :
                            <input type="text" value={nom} onChange={HandleChange} />
                    }

              
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={() => { setIsEdit(!isEdit) }}>{!isEdit ? "Edit" : "Save"}</button>
        </li>
    );
}
export default Player;