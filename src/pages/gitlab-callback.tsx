import React, { useEffect } from "react"
import { makeStyles, Theme } from "@material-ui/core/styles"
import { CircularProgress, Typography } from "@material-ui/core"

const useStyles = makeStyles((_theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    gap: "24px",
  },
}))

const OAuthCallbackPage = () => {
  const classes = useStyles()

  useEffect(() => {
    if (typeof window === "undefined") return

    // Gatsby pode redirecionar /gitlab-callback?code=X para /gitlab-callback/?code=X
    // preservando os params — mas em alguns cenários os query params são perdidos
    // na normalização do trailing slash. Tenta tanto window.location.search
    // quanto o hash como fallback.
    const params = new URLSearchParams(window.location.search)
    const code = params.get("code")
    const state = params.get("state")

    if (code && state) {
      // Redireciona para o /callback proxiado pelo nginx → backend,
      // mantendo o cookie gitlab-oauth-state que foi setado no /login.
      window.location.replace(
        `/callback?code=${encodeURIComponent(code)}&state=${encodeURIComponent(state)}`
      )
      return
    }

    // Se não há code/state, o fluxo já foi processado (auto-redirect do backend
    // aconteceu antes) ou os params foram perdidos. Redireciona para a home.
    window.location.replace("/")
  }, [])

  return (
    <div className={classes.root}>
      <CircularProgress />
      <Typography variant="body1">Autenticando com GitLab...</Typography>
    </div>
  )
}

export default OAuthCallbackPage
