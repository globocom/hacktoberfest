import Navigation from "./Navigation"

export interface NavigationProps {
    mode: "desk" | "smart"
}

export interface NavigationItemProps {
    label: string
    link: string
}

export default Navigation
