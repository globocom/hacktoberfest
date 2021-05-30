import React from "react";


export interface Menu {
    mode: "desk" | "smart"
}

export interface MenuDefinition {
    label: string
    link: string
    page: React.ReactNode
}
