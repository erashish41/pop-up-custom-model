import { useState } from "react"
import { ModalPopUp } from "./ModalPopUp"

export const Modal = () => {

    const [showModalPopUp, setShowModalPopUp] = useState(false);

    const handleToggleModelPopUp = () => {
        setShowModalPopUp(!showModalPopUp);
        
        
    }

    return (
        <div>
            <button onClick={handleToggleModelPopUp}>Open Model Pop up</button>
            {
                showModalPopUp && <ModalPopUp />
            }
        </div>
    )
}