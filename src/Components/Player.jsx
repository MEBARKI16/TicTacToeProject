import { useState } from "react";
const Player = ({ name, symbol, isActive, HandleChangeName }) => {
    const [isEdit, setIsEdit] = useState(false);
    const [nom, setNom] = useState(name)
    const HandleChange = (e) => {
        e.preventDefault;
        setNom(e.target.value)
    }
    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">

                {
                    !isEdit ?
                        <span className="player-name">{nom}</span>
                        :
                        <input type="text" value={nom} onChange={HandleChange} />
                }


                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={() => { setIsEdit(x => !x); HandleChangeName(symbol, nom) }}>{!isEdit ? "Edit" : "Save"}</button>
        </li>
    );
}
export default Player;