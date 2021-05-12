import React, {useState} from 'react';
import { 
		Button, 
		ButtonGroup, 
		Checkbox, 
		FormControlLabel, 
		TextField 
		} from '@material-ui/core';

import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';


function MainScreen(){


	const [checked, setChecked] = useState(true);


	
	return(
		<div>
			<MenuIcon/>
			<h5>Header
			</h5>
			<ButtonGroup
				color = 'primary'
				size='small'
				variant = 'contained'
			>
			<HomeIcon/>
				<Button
					startIcon = {<SaveIcon/>}
					style={{
						'font-size':'10px',
						'background-color':'orange'
					}}
				>like
				</Button>

				
				<Button
					startIcon = {<SaveIcon/>}
					style={{
						'font-size':'10px',
						'background-color':'orange'
					}}
				>save
				</Button>
			</ButtonGroup>



			<br/>

			<FormControlLabel
			control={<Checkbox
					checked = {checked}
					onChange = {e=>setChecked(e.target.checked)}
					icon = {<DeleteIcon />}
					checkedIcon = {<SaveIcon/>}
				/>}
			label = 'checkbopx'
			/>
			<br/>

			<TextField
				variant = 'standard'
				type = 'email'
				label='Demo'
				placeholder = 'sumitdhakad2232@gmail.com'
			/>
		</div>
	)
}


export default MainScreen;
