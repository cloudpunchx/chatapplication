// ExitChatroomBtn.jsx

import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import "./exitChatroomBtn.scss";

function ExitChatroomBtn({onExitConfirmed}) {
    const [isDialogVisible, setIsDialogVisible] = useState(false);
    const navigate = useNavigate(); // Using useNavigate hook

    const showDialog = () => setIsDialogVisible(true);
    const hideDialog = () => setIsDialogVisible(false);

    const confirmExit = () => {
        onExitConfirmed(); // Execute the exit logic passed down as a prop
        hideDialog(); // Close the dialog
        navigate("/"); // Navigate back to the root path
    };

    return (
        <>
            <button onClick={showDialog} className="exit-chatroom-btn">
                Exit Chatroom
            </button>
            {isDialogVisible && (
                <div className="confirmation-dialog-overlay">
                    <div className="confirmation-dialog">
                        <p>Are you sure you want to exit the chatroom?</p>
                        <div className="dialog-actions">
                            <button
                                onClick={confirmExit}
                                className="confirm-btn"
                            >
                                Yes
                            </button>
                            <button onClick={hideDialog} className="cancel-btn">
                                No
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default ExitChatroomBtn;
