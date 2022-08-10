/**
 * This file was generated from IntervalAction.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
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
    action?: ActionValue;
}

export interface IntervalActionPreviewProps {
    className: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    interval: string;
    action: {} | null;
}
