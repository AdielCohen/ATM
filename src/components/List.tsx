import * as React from 'react';
import { InsetListProps, moneyType } from '../types';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

export default function InsetList(props: InsetListProps & { goToPageOne: () => void, num: number, currency: string, setCurrency: React.Dispatch<React.SetStateAction<string>> }) {
  const { items, currency, setCurrency } = props;

  const handleCurrencyChange = (index:number) => {
    if (props.num == 1) {
      props.goToPageOne()  
      setCurrency(moneyType[index]);          
    }
  };

  return (
    <List sx={{ width: '100%', maxWidth: '100vw', bgcolor: 'background.paper' }} aria-label="contacts">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && <Divider />}
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>{item.amount}{props.num == 0 ? currency : ''}</ListItemIcon>
              <ListItemText primary={item.text} onClick={() => handleCurrencyChange(index)} />
            </ListItemButton>
          </ListItem>
        </React.Fragment>
      ))}
    </List>
  );
}