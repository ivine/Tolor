import React from 'react';

import Draggable from 'react-draggable';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Chip from '@mui/material/Chip';

import tinycolor from '../../lib/tinycolor-min';

import './Content.css';


const Content = () => {

  let appStyle = {
    zIndex: maxZIndex() + 1,
  };

  return (
    <Draggable
      defaultPosition={{x: 0, y: 0}}
      position={null}
      scale={1}
    >
      <div className="App" style={appStyle}>
        <div>
          <Paper sx={{ width: '100%' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center" />
                    <TableCell align="center">
                      深色
                    </TableCell>
                    <TableCell align="center">
                      浅色
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {
                    getThemeColorListData().map((row, index) => {
                      return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={`row_${index}`}>
                          <TableCell key={row[0].colorId} align={'center'}>
                            <Chip 
                              label={ row[0].colorId }
                              onClick={() => {

                              }}
                            />
                          </TableCell>
                          <TableCell key={`light_${index}`} align={'center'}>
                            <Chip
                              label={ row[1].light }
                              style={{ backgroundColor: row[1].light, color: getTextColor(row[1].light) }}
                              onClick={() => {
                                console.log('light  -> ' + row[1].light )
                              }}
                            />
                          </TableCell>
                          <TableCell key={`dark_${index}`} align={'center'}>
                            <Chip
                              label={ row[2].dark } 
                              style={{ backgroundColor: row[2].dark, color: getTextColor(row[2].dark) }}
                              onClick={() => {
                                console.log('dark  -> ' + row[2].dark )
                              }}
                            />
                          </TableCell>
                        </TableRow>
                      );
                    })
                  }
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </div>
      </div>
    </Draggable>
  );
};

const getTextColor = (bgColorHex) => {
  let color = tinycolor(bgColorHex);
  var isDark = color.isDark();

  let alpha = color.getAlpha();
  console.log('color.alpha -> ', alpha)
  if (alpha < 0.5) {
    isDark = false;
  }

  return isDark ? '#fff' : '#000';
}

const getThemeColorListData = () => {
  let lightColors = lightThemeColors()
  let darkColors = darkThemeColors()

  var array = []

  const keys = Object.keys(lightColors);
  for (let index = 0; index < keys.length; index++) {
    let tmpColorId = 'index_' + (index + 1)
    let data = [
      { colorId: tmpColorId },
      { light: lightColors[tmpColorId] },
      { dark: darkColors[tmpColorId] }
    ]
    array.push(data)
  }

  return array
}

function maxZIndex() {
  return Array.from(document.querySelectorAll('body *'))
        .map(a => parseFloat(window.getComputedStyle(a).zIndex))
        .filter(a => !isNaN(a))
        .sort()
        .pop();
}

const lightThemeColors = () => {
  return {
    "index_1": "#f9f9f9",
    "index_2": "#ffffff",
    "index_3": "#333333",
    "index_4": "#cc333333",
    "index_5": "#99333333",
    "index_6": "#4d333333",
    "index_7": "#3f3f3f",
    "index_8": "#c4ff33",
    "index_9": "#8de514",
    "index_10": "#e9f1e9",
    "index_11": "#e36370",
    "index_12": "#07c292",
    "index_13": "#c4ff33",
    "index_14": "#99f0f0f0",
    "index_15": "#0d222222",
    "index_16": "#3F3F3F",
  }
}

const darkThemeColors = () => {
  return {
    "index_1": "#222222",
    "index_2": "#333333",
    "index_3": "#f0f0f0",
    "index_4": "#ccf0f0f0",
    "index_5": "#99f0f0f0",
    "index_6": "#4df0f0f0",
    "index_7": "#3f3f3f",
    "index_8": "#c4ff33",
    "index_9": "#8de514",
    "index_10": "#e9f1e9",
    "index_11": "#e36370",
    "index_12": "#07c292",
    "index_13": "#3f3f3f",
    "index_14": "#99333333",
    "index_15": "#4d222222",
    "index_16": "#C4FF33",
  }
}

export default Content;
