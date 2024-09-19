import React from "react";
import Whatsapp from "./Whatsapp";
import Formsection from "../../components/Formsection/Formsection";
import Faqsection from "../../components/Faqsection/Faqsection"
const ApiwhatsappPage = () => {
    return(
        <div>
            <Whatsapp/>
            <Faqsection/>
            <Formsection/>
        </div>
    )
};
export default ApiwhatsappPage;