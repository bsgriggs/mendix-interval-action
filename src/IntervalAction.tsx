import { ReactElement, createElement, useEffect } from "react";
import {ValueStatus} from "mendix";
import { IntervalActionContainerProps } from "../typings/IntervalActionProps";

import "./ui/IntervalAction.css";

export function IntervalAction(props: IntervalActionContainerProps): ReactElement {

    if (props.interval.status === ValueStatus.Available && props.action !== undefined && props.action.canExecute){
        const interval = parseFloat(props.interval.value.toFixed(0));
        useEffect(()=> {
            //on mount
            console.log("on Mount");
            let intervalAction = setInterval(()=>{
                props.action?.execute();
            }, interval)
            //on un mount
            return ()=> {
                console.log("on UnMount");
                clearInterval(intervalAction);
            }
        },[])
    }

    return <div className="interval-action" style={{display: "none"}}>

    </div>;
}
