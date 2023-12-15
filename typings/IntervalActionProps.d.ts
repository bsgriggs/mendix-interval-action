/**
 * This file was generated from IntervalAction.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { ActionValue, DynamicValue } from "mendix";
import { Big } from "big.js";

export interface IntervalActionContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    interval: DynamicValue<Big>;
    debugMode: boolean;
    action?: ActionValue;
}

export interface IntervalActionPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    interval: string;
    debugMode: boolean;
    action: {} | null;
}
