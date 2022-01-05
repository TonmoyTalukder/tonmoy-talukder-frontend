import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';

import codeforces from '../../../../images/sites/codeforces.png';
import hackerrank from '../../../../images/sites/hackerrank.png';
import kaggle from '../../../../images/sites/kaggle.png';
import leetcode from '../../../../images/sites/leetcode.png';
import stopstalk from '../../../../images/sites/stopstalk.png';



export default function CodingSites() {
  return (
      
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar style={{backgroundColor: 'transparent'}}>
            {/* <ImageIcon /> */}
            <img src={kaggle} alt="Kaggle Logo" width={'100%'}/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText>
            <a style={{textDecoration: "none", color: "black"}} href="https://www.kaggle.com/tonmoytalukder" target="_blank">
                <p style={{fontSize: "20px"}}>Kaggle</p>
            </a>
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar style={{backgroundColor: 'transparent'}}>
            {/* <ImageIcon /> */}
            <img src={codeforces} alt="Codeforces Logo" width={'100%'}/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText>
            <a style={{textDecoration: "none", color: "black"}} href="https://codeforces.com/profile/Zishnav" target="_blank">
                <p style={{fontSize: "20px"}}>Codeforces</p>
            </a>
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar style={{backgroundColor: 'transparent'}}>
            {/* <ImageIcon /> */}
            <img src={hackerrank} alt="HackerRank Logo" width={'100%'}/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText>
            <a style={{textDecoration: "none", color: "black"}} href="https://www.hackerrank.com/Zishnav" target="_blank">
                <p style={{fontSize: "20px"}}>HackerRank</p>
            </a>
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar style={{backgroundColor: 'transparent'}}>
            {/* <ImageIcon /> */}
            <img src={leetcode} alt="Leetcode Logo" width={'100%'}/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText>
            <a style={{textDecoration: "none", color: "black"}} href="https://leetcode.com/zishnav/" target="_blank">
                <p style={{fontSize: "20px"}}>Leetcode</p>
            </a>
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar style={{backgroundColor: 'transparent'}}>
            {/* <ImageIcon /> */}
            <img src={stopstalk} alt="StopStalk Logo" width={'100%'}/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText>
            <a style={{textDecoration: "none", color: "black"}} href="https://www.stopstalk.com/user/profile/zishnav" target="_blank">
                <p style={{fontSize: "20px"}}>StopStalk</p>
            </a>
        </ListItemText>
      </ListItem>
    </List>
  );
}
