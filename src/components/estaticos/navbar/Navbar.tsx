import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';


// códigos prontos disponíveis no material ui- APPbar 
function Navbar() {
    return (
        <>
            <AppBar position="static">
                {/* o Toolbar é a barra de menu em si */}
                <Toolbar variant="dense">
                    {/* cursor: pointer => o mouse vira uma mãozinha, como um link */}
                    <Box style={{ cursor: "pointer" }} >
                        {/* Typography: é um recurso de tipografia, de fontes */}
                        <Typography variant="h5" color="inherit">
                            BlogPessoal
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                home
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                postagens
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                temas
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                cadastrar tema
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                logout
                            </Typography>
                        </Box>
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;