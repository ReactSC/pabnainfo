import React,{ useState } from 'react';
import { IconButton, Menu, MenuItem } from '@material-ui/core';
import { MoreVert } from '@material-ui/icons';


const Actions = props => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [options, setOptions] = useState('')
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (option) => {
    setOptions(option)
    setAnchorEl(null);
    alert(`You Selected ${options}`)
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVert />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            width: 150,
          },
        }}
      >
        {props.data.map((option, index) => (
          <MenuItem key={index} onClick={()=>handleClose(option)}>
            <span>{option}</span>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default Actions;