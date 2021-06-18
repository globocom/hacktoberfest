declare namespace Props {
  interface Navigation {
    mode: "desk" | "smart"
  }

  interface NavigationItems {
    items: Array<NavigationItem>
  }

  interface NavigationItem {
    label: string
    link: string
  }
}

export = Props
export as namespace Props
