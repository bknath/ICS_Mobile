import React from "react";
import Chatbot from './Chatbot';
import Communication from "../../components/communication/Communication";
import Formsection from "../../components/Formsection/Formsection";


const ChatBotpage = () => {
    return(
        <div>
            <Chatbot/>
            <Communication/>
            <Formsection/>
        </div>
    )
}

export default ChatBotpage;