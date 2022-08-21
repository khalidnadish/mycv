import * as React from 'react';
 
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
 
import DuoIcon from '@mui/icons-material/Duo';
import InterestsIcon from '@mui/icons-material/Interests';
import CodeIcon from '@mui/icons-material/Code';
import BorderInnerIcon from '@mui/icons-material/BorderInner';
import AccountTreeIcon from '@mui/icons-material/AccountTree';

import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import BrushIcon from '@mui/icons-material/Brush';
import { Box } from '@mui/material';
import DuoIcon from '@mui/icons-material/Duo';
import InterestsIcon from '@mui/icons-material/Interests';
import CodeIcon from '@mui/icons-material/Code';
import BorderInnerIcon from '@mui/icons-material/BorderInner';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import BrushIcon from '@mui/icons-material/Brush';


export default function WhatCanIdo() {
  return (
    <Container fixed>

<Stack direction="row" spacing={1}>
        
        <Chip label="What Can I do ...." color="success" />
      </Stack>
      <Box sx={{ width: 350, height: 250 }}>
<TableContainer   sx={{ marginTop:1,marginBottom:2}}>
      <Table sx={{ minWidth: 100}} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            
          </TableRow>
        </TableHead>
        <TableBody>
           
            <TableRow>
              <TableCell  component="th" scope="row" style={{width: '5%',paddingRight:0}}>
              <BrushIcon sx={{ fontSize: 22 ,color:'green' }} />
              </TableCell>
              <TableCell align="left" style={{width: '35%',padding:3}}> DESIGN </TableCell>
              <TableCell align="left" style={{width: '55%' , padding:3}}><Typography fontSize={10} textAlign="left">
                       LOGO-FLYER-IDENTITY</Typography></TableCell>
            </TableRow>

            <TableRow>
              <TableCell  component="th" scope="row" style={{width: '5%',paddingRight:0}}>
              <InterestsIcon sx={{ fontSize: 22 ,color:'green' }}/>
              </TableCell>
              <TableCell align="left" style={{width: '35%',padding:3}}>ANIMATION  </TableCell>
              <TableCell align="left" style={{width: '55%' , padding:3}}><Typography fontSize={10} textAlign="left">
                        PROMO-WHITE BOARD-INFOGRAPHIC</Typography></TableCell>
            </TableRow>
            
            <TableRow>
              <TableCell  component="th" scope="row" style={{width: '5%',paddingRight:0}}>
              <DuoIcon sx={{ fontSize: 22 ,color:'green' }}/>
              </TableCell>
              <TableCell align="left" style={{width: '35%',padding:3}}>MONTAG </TableCell>
              <TableCell align="left" style={{width: '55%' , padding:3}}><Typography fontSize={10} textAlign="left">
                        SHORT FILM - LONG FILM</Typography></TableCell>
            </TableRow>

            <TableRow>
              <TableCell  component="th" scope="row" style={{width: '5%',paddingRight:0}}>
              <CodeIcon sx={{ fontSize: 22 ,color:'green' }}/>
              </TableCell>
              <TableCell align="left" style={{width: '35%',padding:3}}>CODEING </TableCell>
              <TableCell align="left" style={{width: '55%' , padding:3}}><Typography fontSize={10} textAlign="left">
                       HTML-CSS-JS-REACT-MSSQL-FIREBASE</Typography></TableCell>
            </TableRow>

            
           


            <TableRow>
              <TableCell  component="th" scope="row" style={{width: '5%',paddingRight:0}}>
              <BorderInnerIcon sx={{ fontSize: 22 ,color:'green' }}/>
              </TableCell>
              <TableCell align="left" style={{width: '35%',padding:3}}>UI/UX </TableCell>
              <TableCell align="left" style={{width: '55%' , padding:3}}><Typography fontSize={10} textAlign="left">
                        ADOBE XD-FIGMA</Typography></TableCell>
            </TableRow>

            <TableRow>
              <TableCell  component="th" scope="row" style={{width: '5%',paddingRight:0}}>
              <AccountTreeIcon sx={{ fontSize: 22 ,color:'green' }}/>
              </TableCell>
              <TableCell align="left" style={{width: '35%',padding:3}}>ANALYST </TableCell>
              <TableCell align="left" style={{width: '55%' , padding:3}}><Typography fontSize={10} textAlign="left">
                      FLOWCHART-PROBLEM SOLVEING -MODULE TRACKING</Typography></TableCell>
            </TableRow>
             
              


           
        </TableBody>
      </Table>
    </TableContainer>



</Box>










 
     
    </Container >
  );
}