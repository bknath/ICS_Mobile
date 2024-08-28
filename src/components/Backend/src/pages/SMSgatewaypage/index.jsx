import React from "react";
import SMSgateway from "./SMSgateway";
import Formsection from "../../components/Formsection/Formsection";
import Communication from "../../components/communication/Communication"
const SMSgatewaypage = () => {
    return(
        <div>
            <SMSgateway/>
            <Communication/>
            <Formsection/>
        </div>
    )
}
export default SMSgatewaypage;