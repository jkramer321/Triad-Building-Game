import React from 'react'
import "./styles/Modal.css";

export default function Modal({ isVisable, onConfirm, onCancel }) {
    if (!isVisable) return null;

    return (
        <div className="modal-overlay">
            <div className='modal-content'>
                <h2>Confirm Action</h2>
                <p>Are you sure you want to proceed to the next question</p>
                <div className='modal-buttons'>
                    <button onClick={onConfirm}>Yes</button>
                    <button onClick={onCancel}>No</button>
                </div>
            </div>
        </div>
    )
}
