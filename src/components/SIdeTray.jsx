import { SideCard } from "./SideCard";

export function SideTrey({prop}){
    return (
        <div style={{
            background : "#2F373A",
            width : '300px'
        }}>
            {prop.map(prop => <SideCard prop={prop} />)}
        </div>
    )
}