import { List } from "@mui/material";
import React from "react";
import LinearWithValueLabel from '../component/ProgressBar.tsx';

export default function Skills() {
    return (<>
        <div style={{ position: "relative", right: "-20rem" }}>
            <>
                <h4>Java Spring Boot</h4>
                <LinearWithValueLabel value={80} />
            </>
            <h4>React Js</h4>
            <LinearWithValueLabel value={50} />
            <>
                <h4>MS SQL Server</h4>
                <LinearWithValueLabel value={70} />
            </>
            <div>
                <h2>Programming Languages Known</h2>
                <dl>
                    <dd>Java</dd>
                    <dd>HTML & CSS</dd>
                    <dd>JavaScript, JSX</dd>
                    <dd>TypeScript, TSX</dd>
                    <dd>SQL</dd>
                </dl>
            </div>
        </div>
    </>)
}