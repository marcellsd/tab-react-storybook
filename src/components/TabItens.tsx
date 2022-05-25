import React from "react"
import { isPropertySignature } from "typescript"
import './TabItens.css'

interface TabItemProps{
    tabs: string[]
    text: string[]
    onSelect: Function
    selection: number
}

export function TabItem(props: TabItemProps){
    const btns = props.tabs.map((tab, index) => (
    <button key={tab}
    className = { index === props.selection ? 'selected' : '' }
    onClick ={ () => props.onSelect(index) }
    >{ tab }
    </button>
    ))

    return(
        <div className='tabs'> 
            <div className="tab">
                <h2>{ btns }</h2>
            </div>

            <div className="text">
                <h3> { props.text[props.selection] } </h3>
            </div>
        </div>
    )
}