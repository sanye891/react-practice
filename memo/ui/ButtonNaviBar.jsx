import * as React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';



import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';

export default function ButtonNaviBar() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate()
  const location = useLocation()

  React.useEffect(()=>{
    switch(location.pathname){
      case '/':
        setValue(0)
        break
      case '/add':
        setValue(1)
        break
      case '/search':
        setValue(2)
        break
    }
  },[location.pathname])

  return (
    <Box sx={{ position: 'fixed', bottom: 0 , width: '100%' }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(_event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Home" icon={<HomeIcon />} onClick={()=>navigate('/')} />
        <BottomNavigationAction label="Add" icon={<AddIcon />} onClick={()=>navigate('/add')} />
        <BottomNavigationAction label="Search" icon={<SearchIcon />} onClick={()=>navigate('/search')} />
      </BottomNavigation>
    </Box>
  );
}
