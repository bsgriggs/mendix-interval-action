import { ReactElement, createElement, useEffect, useMemo, useCallback } from "react";
import { IntervalActionContainerProps } from "../typings/IntervalActionProps";
import "./ui/IntervalAction.css";
import classNames from "classnames";

export const IntervalAction = (props: IntervalActionContainerProps): ReactElement => {
    const log = useCallback(
        (message?: any, ...optionalParams: any[]) =>
            props.debugMode ? console.info(message, ...optionalParams) : undefined,
        [props.debugMode]
    );

    const interval = useMemo(() => Number(props.interval.value), [props.interval]);
    useEffect(() => {
        const intervalAction = setInterval(() => {
            if (props.action && props.action.canExecute) {
                log("Executing interval action", { interval, action: props.action, debugMode: props.debugMode });
                props.action.execute();
            }
        }, interval);
        return () => {
            clearInterval(intervalAction);
        };
    }, [interval, props.action, log, props.debugMode]);

    return (
        <div
            id={props.name}
            className={classNames(
                "mendix-interval-action",
                { "debug alert alert-warning": props.debugMode },
                props.class
            )}
            style={props.style}
        >
            <p className="mx-text">Interval Action Debug mode is enabled. This should be disabled prior to releases.</p>
        </div>
    );
};
