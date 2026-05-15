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

    // O Gatsby pode normalizar /gitlab-callback?code=X para /gitlab-callback/?code=X
    // Os query params são preservados em window.location.search mesmo com trailing slash.
    // Caso raro: o nginx pode ter stripped os params — tenta recuperar do referrer.
    let search = window.location.search

    // Fallback: se não há search mas há params no hash (alguns proxies movem params)
    if (!search && window.location.hash.includes("code=")) {
      search = window.location.hash.replace("#", "?")
    }

    const params = new URLSearchParams(search)
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

    // Se não há code/state, redireciona para a home.
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
