

export interface Menu {
    mode: "desk" | "smart"
    items?: Array<MenuItem>
}

export interface MenuItem {
    label: string
    ref: string
}