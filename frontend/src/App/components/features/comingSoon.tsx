import React, { useEffect } from "react";
import { Container, Button, Box, Typography, createMuiTheme, ThemeProvider, CssBaseline } from "@material-ui/core";
import "../../app.css"
import { useParams } from "react-router";
import getContent from "../../services/contentService";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { changeContent, clearResult, clearAnswers } from "../../redux/actions";
import { IContent } from "../../models/contentInterface";

export const ComingSoon = () => {
    const { topic } = useParams<{ topic: string }>()
    const initialComponentContent = getContent(topic)
    const content: IContent = useSelector((state: any) => state.content, shallowEqual)
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
            <div className="root">
                <Container maxWidth="lg" className="container">
                    <Box className="startBox">
                        <Typography color="primary">
                            <Box fontWeight="fontWeightBold" className="title">
                                {content.title}
                            </Box>
                        </Typography>
                        <Box mt={6} mb={18} className="buttonBox">
                            <Button variant="contained" color="primary" className="button" disabled>
                                Coming soon
                            </Button>
                        </Box>
                    </Box>
                </Container>
            </div>
        </ThemeProvider>

    );
}