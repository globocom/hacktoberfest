import React, { useState, useEffect } from "react"
import Layout from "@components/layout"
import { Image } from "@components/image"
import { Grid, useMediaQuery, Typography } from "@material-ui/core"
import Spacing from "@components/spacing"
import { makeStyles, Theme } from "@material-ui/core/styles"
import { HeaderTitle } from "@components/header"

const useGridDynamicPosition = () => {
  const [gridStyles, setGridStyles] = useState({
    top: "60vh",
    height: "calc(100vh - 20px)",
    bottom: "84px",
  })

  useEffect(() => {
    const calculateGridPosition = () => {
      const viewportHeight = window.innerHeight
      const viewportWidth = window.innerWidth

      if (viewportWidth >= 1024) {
        const baseHeight = 900
        const ratio = viewportHeight / baseHeight
        const topValue = Math.max(600, 678 * ratio)
        const heightOffset = Math.max(80, 100 * ratio)

        setGridStyles({
          top: `${topValue}px`,
          height: `calc(100vh - ${heightOffset}px)`,
          bottom: "84px",
        })
      }
    }

    calculateGridPosition()
    window.addEventListener("resize", calculateGridPosition)
    return () => window.removeEventListener("resize", calculateGridPosition)
  }, [])

  return gridStyles
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    color: theme.palette.primary.contrastText,
    backgroundColor: "#FFFFFF",
    position: "relative",
    "&::before": {
      content: '""',
      position: "absolute",
      top: "60vh",
      left: 0,
      right: 0,
      bottom: "84px",
      width: "100%",
      height: "calc(100vh - 20px)",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
      opacity: 0.9,
      zIndex: 0,
      pointerEvents: "none",
      transform: "scaleY(-1)",
    },
    "& > *": {
      position: "relative",
      zIndex: 1,
    },
  },
  containerPadding: {
    [theme.breakpoints.down("md")]: {
      padding: "0 20px",
    },
  },
  principiosTitle: {
    width: "100%",
    maxWidth: "274px",
    height: "auto",
    minHeight: "73px",
    "& *": {
      fontFamily: "Globotipo Variable, sans-serif !important",
      fontWeight: "400 !important",
      fontSize: "48px !important",
      [theme.breakpoints.up("md")]: {
        fontSize: "69px !important",
      },
      letterSpacing: "0px !important",
      color: "#000000 !important",
    },
  },
  fontSection: {
    fontSize: "2.25rem",
    [theme.breakpoints.up("lg")]: {
      fontSize: "3.5rem", //56
    },
  },
  fontSubSection: {
    fontSize: "1.5rem",
    [theme.breakpoints.up("lg")]: {
      fontSize: "2rem", //32
    },
  },
  separator: {
    width: "100%",
    marginBottom: "-10px",
  },
  principleTitle: {
    [theme.breakpoints.up("sm")]: {
      maxWidth: "100%",
      paddingBottom: "16px",
      minWidth: "auto",
      marginRight: "0px",
    },
    [theme.breakpoints.up("md")]: {
      maxWidth: "30%",
      minWidth: "20%",
      marginRight: "20px",
      paddingBottom: "0px",
    },
    [theme.breakpoints.up("xl")]: {
      maxWidth: "18%",
    },
    fontFamily: "Globotipo Variable",
    fontSize: "22px",
    fontWeight: 700,
    fontStyle: "normal",
    lineHeight: "124%",
    letterSpacing: 0,
    color: "#800BF8",
  },
  pinkLabel: {
    fontFamily: "Globotipo Variable",
    fontWeight: 700,
    lineHeight: "28px",
    color: theme.palette.secondary.main,
  },
  principleDescription: {
    fontFamily: "Globotipo Variable",
    fontSize: "20px",
    fontWeight: 400,
    fontStyle: "normal",
    lineHeight: "124%",
    letterSpacing: "0.05em",
    color: "#333333",
  },
  principlesContainer: {
    backgroundColor: "#F6F6F6",
    marginTop: "40px",
  },
  principlesInsideContainer: {
    [theme.breakpoints.up("sm")]: {
      justifyContent: "flex-start",
      alignItems: "flex-start",
      padding: "20px",
    },
    [theme.breakpoints.up("md")]: {
      justifyContent: "center",
      alignItems: "center",
      padding: "30px",
    },
    flexWrap: "nowrap",
    padding: "20px",
    borderBottom: `1px solid #E5E5E5`,
    "&:last-child": {
      borderBottom: "none",
    },
    backgroundColor: "#F6F6F6",
    width: "100%",
    maxWidth: "1523px",
    minHeight: "128px",
    height: "auto",
    margin: "0 auto",
  },
  rulesContainer: {
    marginTop: "40px",
  },
  rulesGridContainer: {
    backgroundColor: "#F6F6F6",
    width: "100%",
    maxWidth: "1523px",
    padding: "0px",
    margin: "0 auto",
    height: "auto",
    minHeight: "400px",
    borderRadius: "8px",
  },
  rulesInsideContainer: {
    [theme.breakpoints.up("sm")]: {
      margin: "0px",
      paddingTop: "8px",
      paddingBottom: "8px",
      paddingRight: "10px",
      paddingLeft: "10px",
    },
    [theme.breakpoints.down("md")]: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
      textAlign: "left",
      padding: "20px",
    },
    [theme.breakpoints.up("md")]: {
      margin: "0px",
      padding: "30px",
    },
    flexWrap: "nowrap",
    alignItems: "center",
    justifyContent: "flex-start",
    color: theme.palette.text.primary,
    height: "auto",
    minHeight: "200px",
    backgroundColor: "#F6F6F6",
    padding: "20px",
    position: "relative",
    borderRadius: "8px",
  },
  ruleVerticalDivider: {
    position: "absolute",
    right: "0px",
    top: "20%",
    width: "2px",
    height: "60%",
    backgroundColor: "#000000",
    opacity: 1,
  },
  ruleHorizontalDivider: {
    position: "absolute",
    bottom: "0px",
    left: "0px",
    width: "100%",
    height: "2px",
    backgroundColor: "#E5E5E5",
    opacity: 1,
  },
  numberContainer: {
    position: "absolute",
    top: "20px",
    left: "20px",
    [theme.breakpoints.down("md")]: {
      position: "relative",
      top: "auto",
      left: "auto",
      display: "flex",
      justifyContent: "flex-start",
      marginRight: "15px",
      marginBottom: "0px",
    },
    [theme.breakpoints.up("md")]: {
      top: "47px",
      left: "98px",
    },
  },
  ruleTextContainer: {
    marginTop: "20px",
    paddingLeft: "80px",
    paddingRight: "10px",
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
      paddingLeft: "0px",
      paddingRight: "20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100px",
      marginTop: "0px",
      flex: 1,
    },
    [theme.breakpoints.up("md")]: {
      marginTop: "30px",
      paddingLeft: "146px",
      paddingRight: "20px",
    },
  },
  horizontalLineDesktop: {
    width: "100%",
    height: "3px",
    margin: "8px auto",
  },
  number: {
    margin: "0px 20px 0px 0px",
    padding: "0px 10px",
    width: "48px",
    height: "48px",
    lineHeight: "48px",
    textAlign: "center",
    color: theme.palette.secondary.contrastText,
    background: theme.palette.secondary.main,
    fontFamily: "Globotipo Variable",
    fontSize: "24px",
    fontWeight: 700,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    borderRadius: "8px",
  },
  rule: {
    color: theme.palette.text.primary,
    fontFamily: "Globotipo Variable",
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "24px",
    [theme.breakpoints.up("md")]: {
      fontSize: "20px",
      lineHeight: "28px",
    },
  },
  importantRule: {
    lineHeight: "24px",
    color: theme.palette.secondary.main,
    fontFamily: "Globotipo Variable",
    fontSize: "16px",
    fontWeight: 700,
    [theme.breakpoints.up("md")]: {
      fontSize: "20px",
      lineHeight: "28px",
    },
  },
  gradientBar: {
    position: "relative",
    width: "100vw",
    height: "24px",
    marginLeft: "calc(-50vw + 50%)",
    marginTop: "60px",
    opacity: 1,
    background:
      "linear-gradient(90deg, #05A6FF 0%, #8800F8 38.94%, #FF0C1F 71.15%, #FFD006 100%)",
  },
}))

interface DecorativeLineProps {
  color: "yellow" | "darkGray" | string
}

const DecorativeLine: React.FC<DecorativeLineProps> = ({ color }) => {
  const classes = useStyles()

  const getColor = () => {
    switch (color) {
      case "yellow":
        return "#FFD700"
      case "darkGray":
        return "#333333"
      default:
        return color
    }
  }

  return (
    <div
      className={classes.horizontalLineDesktop}
      style={{ backgroundColor: getColor() }}
    />
  )
}

interface DecorativeVerticalBarProps {
  position: "left" | "right"
}

const DecorativeVerticalBar: React.FC<DecorativeVerticalBarProps> = ({
  position,
}) => {
  const style = {
    position: "absolute" as const,
    width: "6px",
    height: "54px",
    top: "0px",
    opacity: 1,
    transform: "rotate(0deg)",
    transformOrigin: "center",
    background:
      "linear-gradient(90deg, #05A6FF 0%, #8800F8 38.94%, #FF0C1F 71.15%, #FFD006 100%)",
    ...(position === "left" ? { left: "0px" } : { right: "0px" }),
  }

  return <div style={style} />
}

const Principles = () => {
  const classes = useStyles()
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up("lg"))

  const principles = [
    {
      title: "Todos são bem-vindos",
      description:
        "Os participantes do Hacktoberfest representaram 151 países e reuniu milhares de habilidades únicas. Damos as boas-vindas a todos que já fazem parte da comunidade de software de código aberto e todos que estão interessados em mergulhar nesse universo.",
    },
    {
      title: "A quantidade é divertida, a qualidade é a chave",
      description:
        "Participar do Hacktoberfest leva ao crescimento pessoal, oportunidades profissionais e construção de comunidade. No entanto, tudo começa com contribuições significativas para o software de código aberto.",
    },
    {
      title: "Ação de curto prazo, impacto de longo prazo",
      description:
        "Na comunidade de software de código aberto, estamos nos apoiando nos ombros daqueles que vieram antes de nós. Sua participação tem um efeito duradouro nas pessoas e na tecnologia, muito depois de outubro. Esta é uma viagem, não uma corrida.",
    },
  ]

  return (
    <>
      <div
        style={{
          marginTop: "40px",
          marginBottom: "40px",
          position: "relative",
        }}
      >
        <Grid item xs={12} lg={6}>
          <div className={classes.principiosTitle}>
            <HeaderTitle title={"Princípios"} />
          </div>
        </Grid>
        {isDesktop && (
          <div style={{ position: "absolute", top: "-28px", right: "-14px" }}>
            <Image
              src="2025/ilustracao-regras.png"
              style={{
                width: "180px",
                height: "auto",
                maxWidth: "212px",
              }}
            />
          </div>
        )}
      </div>
      <div style={{ position: "relative" }}>
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
          className={classes.principlesContainer}
          style={{ position: "relative" }}
        >
          {principles.map((principle) => {
            return (
              <Grid
                container
                direction={isDesktop ? "row" : "column"}
                className={classes.principlesInsideContainer}
              >
                <Grid item className={classes.principleTitle}>
                  <div>{principle.title}</div>
                </Grid>
                <Grid item className={classes.principleDescription}>
                  <div>{principle.description}</div>
                </Grid>
              </Grid>
            )
          })}
        </Grid>
      </div>
    </>
  )
}

const Rules = () => {
  const classes = useStyles()
  const isMedium = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"))

  const rules = [
    <Typography className={classes.rule}>
      Para obter uma camiseta, você deve ter{" "}
      <span className={classes.importantRule}>dois pull requests (PRs)</span>{" "}
      enviados entre 1 e 31 de Outubro e{" "}
      <span className={classes.importantRule}>
        pelo menos um deles aprovado
      </span>
    </Typography>,
    <Typography className={classes.rule}>
      Os pull requests podem ser feitos{" "}
      <span className={classes.importantRule}>
        em qualquer repositório dos projetos open source da Globo
      </span>
      , não apenas para aqueles destacados.
    </Typography>,
    <Typography className={classes.rule}>
      O PR deve conter{" "}
      <span className={classes.importantRule}>
        confirmações que você mesmo fez
      </span>
      .
    </Typography>,
  ]
  const rules2 = [
    <Typography className={classes.rule}>
      Se um mantenedor reportar seu{" "}
      <span className={classes.importantRule}>PR como spam</span>, o mesmo{" "}
      <span className={classes.importantRule}>não será contabilizado</span> para
      sua participação no Hacktoberfest.
    </Typography>,
    <Typography className={classes.rule}>
      Se um mantenedor reportar um{" "}
      <span className={classes.importantRule}>
        comportamento que não esteja de acordo com o código de conduta
      </span>{" "}
      do projeto, você{" "}
      <span className={classes.importantRule}>não poderá participar</span>.
    </Typography>,
  ]

  return (
    <>
      <Spacing smart={{ margin: "32px 16px 20px 0" }}>
        <Grid item xs={12} lg={6}>
          <div className={classes.principiosTitle}>
            <HeaderTitle title={"Regras"} />
          </div>
        </Grid>
      </Spacing>
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        className={classes.rulesContainer}
        style={{ position: "relative" }}
      >
        <div style={{ position: "relative" }}>
          <div className={classes.rulesGridContainer}>
            <Grid
              container
              direction="row"
              style={{
                backgroundColor: "#F6F6F6",
                flexWrap: "wrap",
                height: "100%",
                alignItems: "stretch",
                position: "relative",
              }}
            >
              {[...rules, ...rules2].map((rule, index) => (
                <Grid
                  key={`rule-${index}`}
                  item
                  className={classes.rulesInsideContainer}
                  style={{
                    flex: isMedium ? "1 1 calc(33.333% - 1px)" : "1 1 100%",
                    position: "relative",
                  }}
                >
                  <div className={classes.numberContainer}>
                    <div className={classes.number}>{index + 1}</div>
                  </div>
                  <div className={classes.ruleTextContainer}>{rule}</div>

                  {isMedium && (index + 1) % 3 !== 0 && index < 4 && (
                    <div className={classes.ruleVerticalDivider} />
                  )}

                  {(isMedium ? index < 3 : index < 4) && (
                    <div className={classes.ruleHorizontalDivider} />
                  )}
                </Grid>
              ))}

              {isMedium && (
                <Grid
                  item
                  style={{
                    flex: "1 1 calc(33.333% - 1px)",
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                    backgroundColor: "#F6F6F6",
                    height: "200px",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      left: "0px",
                      top: "20%",
                      width: "2px",
                      height: "84%",
                      backgroundColor: "#000000",
                      opacity: 1,
                    }}
                  />
                  <Image height={168} src={`2025/flag-rules-25.svg`} />
                </Grid>
              )}
            </Grid>
          </div>
        </div>
      </Grid>
    </>
  )
}

const RuleBookPage = () => {
  const classes = useStyles()
  const gridStyles = useGridDynamicPosition()
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up("lg"))

  useEffect(() => {
    if (isDesktop) {
      const styleElement = document.createElement("style")
      styleElement.innerHTML = `
        .${classes.root}::before {
          top: ${gridStyles.top} !important;
          height: ${gridStyles.height} !important;
          bottom: ${gridStyles.bottom} !important;
        }
      `
      document.head.appendChild(styleElement)

      return () => {
        document.head.removeChild(styleElement)
      }
    }
  }, [gridStyles, isDesktop, classes.root])

  return (
    <Layout
      title="Regras e Princípios - Globo Hacktoberfest"
      description="Regras e Princípos - Globo Hacktoberfest"
      headerTitle="Regras e Princípios"
    >
      <div style={{ backgroundColor: "#FFFFFF", minHeight: "100vh" }}>
        <Grid
          className={classes.root}
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid
            item
            xs={10}
            lg={10}
            style={{ width: "100%", maxWidth: "1523px" }}
            className={classes.containerPadding}
          >
            <Principles />
          </Grid>
          <Grid
            item
            xs={10}
            lg={10}
            style={{
              width: "100%",
              maxWidth: "1523px",
            }}
            className={classes.containerPadding}
          >
            <Rules />
          </Grid>
        </Grid>

        <div className={classes.gradientBar}></div>
      </div>
    </Layout>
  )
}

export default RuleBookPage
