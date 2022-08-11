import React, { useEffect, useState } from "react";

import MenuView, { MenuBarAnchorType, MenuItemType, MenuProvider } from "@nthity/with-menubar";
import { GlobalStyles } from "./theme";

//temporary useLocation
const useLocation = () => {
    const [hash, setHash] = useState<string>();
    useEffect(() => {
        const t = setInterval(() => setHash(i => {
            const hash = location.hash.replace("#", "");
            return i !== hash ? hash : i;
        }), 100);
        return () => clearInterval(t)
    }, []);
    return {
        hash
    }
}

const App = () => {
    const [selectedPath, setSelectedPath] = useState("home");
    const { hash } = useLocation();
    const [anchor, setAnchor] = useState<MenuBarAnchorType>("left");
    useEffect(() => {
        setSelectedPath(hash);
    }, [hash]);
    return <MenuProvider>
        <GlobalStyles />
        <MenuView items={MenuItems} anchor={anchor} selectedMenuId={selectedPath}>
            <h1 style={{ margin: "auto auto" }}>MainContent</h1>
            <div>
                <button onClick={() => setAnchor("left")}>Left MenuBar</button>
                <button onClick={() => setAnchor("right")}>Right MenuBar</button>
                {/* <button onClick={() => setAnchor("top")}>Top MenuBar</button>
                <button onClick={() => setAnchor("bottom")}>Bottom MenuBar</button> */}
            </div>
            <div style={{ overflow: "auto" }}>
                <div style={{
                    height: 3000,
                    backgroundColor: "olivedrab"
                }}>H:3000</div>
            </div>
        </MenuView>
    </MenuProvider>
};
export default App;

const MenuItems: MenuItemType[] = [{
    id: "",
    title: "Home",
    url: "#",
    icon: "/imgs/settings.png"
}, {
    id: "about-us",
    title: "About Us",
    url: "#about-us",
    icon: "/imgs/settings.png"
}, {
    id: "settings",
    title: "Settings",
    url: "#settings",
    icon: "/imgs/settings.png"
}, {
    id: "account-settings",
    parentId: "settings",
    title: "Account Settings",
    url: "#account-settings",
    icon: "/imgs/settings.png"
}, {
    id: "softwares",
    parentId: "",
    title: "Softwares",
    url: "#softwares",
    icon: "/imgs/settings.png"
}, {
    id: "hardwares",
    parentId: "",
    title: "Hardwares",
    url: "#hardwares",
    icon: "/imgs/settings.png"
}, {
    id: "hardwares-cpus",
    parentId: "hardwares",
    title: "CPUs",
    url: "#hardwares-cpus",
    icon: "/imgs/settings.png"
}, {
    id: "hardwares-memories",
    parentId: "hardwares",
    title: "Memories",
    url: "#hardwares-memories",
    icon: "/imgs/settings.png"
}];

const generate = (parent: string, count: number, cb: (item: MenuItemType) => void) => {
    for (let x = 0; x < count; x++) {
        cb({
            id: `${parent}-${x}`,
            title: `${parent}@${x}`,
            parentId: parent,
            icon: "/imgs/settings.png",
            url: `#${parent}-${x}`
        })
    }
};
generate("about-us", 10, item => MenuItems.push(item))
generate("about-us-3", 5, item => MenuItems.push(item))
generate("about-us-3-2", 10, item => MenuItems.push(item))
generate("about-us-5", 5, item => MenuItems.push(item))
generate("about-us-8", 5, item => MenuItems.push(item))
generate("about-us-10", 15, item => MenuItems.push(item))
