import React, {useState} from "react";
import { TabItem } from "./TabItens";


interface TabProps{
    tabsData: {tabName: string; tabText: string;}[]
}

export function Tab(props: TabProps){
    const tabNames = props.tabsData.map((tab) => tab.tabName)
    const tabTexts = props.tabsData.map((tab) => tab.tabText)
    const [currentTab, setCurrentTab] = useState(0)

    function select(tabIndex: number) {
        setCurrentTab(tabIndex)
        console.log("Selecionou " + tabIndex)
    }
    const tabss = (
        <div>
            <TabItem
                tabs ={ tabNames } 
                text = { tabTexts }
                onSelect = {select}
                selection= {currentTab}
            />
        </div>
    )

    return(
        tabss
    )
}