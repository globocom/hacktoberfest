import React from "react"


declare namespace Props {

    export namespace Navigation {
        export interface NavigationItem {
            label: string
            link: string
        }

        export interface Menu {
            items: Array<NavigationItem>
        }
    
        export interface Base {
            mode: "desk" | "smart"
            items: Array<NavigationItem>
        }
    }


}



export = Props 
export as namespace Props