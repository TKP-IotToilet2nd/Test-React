import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';

export default function HeaderNav(){
	return (
		<div> 
			<AppBar position="static">
				<Toolbar> 
					<IconButton>
						<MenuIcon />
					</IconButton>
					<Typography variant="display4">
						iotProject	
					</Typography>
				</Toolbar>
			</AppBar>
		</div>
	)	
}

const HeaderNavContent = ( props ) => {
	return <div>{ props.title }</div>
}

