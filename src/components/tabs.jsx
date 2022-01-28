import { useEffect, useState } from "react";
import Tab from "./tab";
import './css/estilos.css';

const Tabs = () => {

    const [tabs, setTabs] = useState([]);
    const [tab, setTab] = useState({});

    const showContent = (data) => {
        setTab(data);
    }

    useEffect (() => {
        setTabs([{title: 'Tab 1', content:'Este es el contenido del Tab 1.'},
                 {title: 'Tab 2', content:'Este es el contenido del Tab 2.'},
                 {title: 'Tab 3', content:'Este es el contenido del Tab 3.'}])
    }, [])
    

    return(
        <>
            <div>
                { tabs.map((t, i) => <Tab data={t} tabClicked={showContent}/>)}
            </div>
            <div>
                <h2>{tab.content}</h2>
            </div>
        </>
    );
}

export default Tabs;