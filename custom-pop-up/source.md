-components
    - Modal.jsx
    - ModalPopUp.jsx


-showModalPopUp && <ModalPopUp />
- It checks if showModalPopUp is true. If it is, it renders the ModalPopUp component. If not, 
    nothing is rendered.

- In Modal.jsx we have customised the data like header, footer. This means we can update the data 
    from parent component and pass to the child to web page.

- <div className="header">
    <span onClick={onClose} className="close-modal-icon">x</span>
    <h2>{header ? header : "Header"}</h2>
</div>
- The <span> element acts as a button for closing the modal. When clicked, it triggers the 
    onClose function passed as a prop from the parent component, hiding the modal.
