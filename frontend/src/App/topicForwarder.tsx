import React, { useEffect } from "react";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from '@material-ui/core/styles';
import { changeContent, clearResult, clearAnswers } from "./redux/actions";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { App } from "./app"
import getContent from "./services/contentService";
import "./app.css"

export const TopicForwarder = () => {
    let { topic } = useParams<{ topic: string }>()
    if (!topic) topic = "calories"
    const initialComponentContent = getContent(topic)
    const dispatch = useDispatch()
    const theme = createMuiTheme({
        palette: {
            primary: {
                main: initialComponentContent.theme.primary
            },
            secondary: {
                main: initialComponentContent.theme.secondary
            },
            background: {
                default: initialComponentContent.theme.background
            }
        }
    })

    useEffect(() => {
        dispatch(changeContent(initialComponentContent))
        dispatch(clearResult())
        dispatch(clearAnswers())
    })

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
        </ThemeProvider>
    )
}