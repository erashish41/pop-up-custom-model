import { useState } from "react"
import { ModalPopUp } from "./ModalPopUp"

export const Modal = () => {

    const [showModalPopUp, setShowModalPopUp] = useState(false);

    const handleToggleModelPopUp = () => {
        setShowModalPopUp(!showModalPopUp);
    }

    function onClose(){
        setShowModalPopUp(false)
    }

    return (
        <div>
            <button className="box-modal" onClick={handleToggleModelPopUp}>Open Model Pop up</button>
            {
                showModalPopUp && 
                <ModalPopUp
                    id={"custom-id"}
                    header={<h1>Customised Header</h1>}
                    footer={<h1>Customised Footer</h1>}
                    onClose={onClose}/>
            }
        </div>
    )
}