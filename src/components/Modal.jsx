// import React from "react";
import { X } from "lucide-react";

function Modal({ isOpen, onClose, content }) {
    if (!isOpen) return null;    
    return (
        <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm justify-center items-center flex'>
            <div className='mt-10 flex flex-col gap-5 text-white' onClick={onClose}>
                <button className='place-self-end'><X size={30}/></button>
                <div className="bg-indigo-600 p-5 rounded">
                    <h1>Monster Name</h1>
                </div>
            </div>
        </div>
    )
}
export default Modal;