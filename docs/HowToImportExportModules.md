### files which exports modules

```
export default function HeaderNav(){
	const items = [
		"hogehoge",
		"hogehoge",
		"hogehoge",
		"hogehoge",
		"hogehoge",
		"hogehoge",
	]		
	return (
		<div>
			{
				items.map(( item, index ) => {
					return <HeaderNavContent title={ item } key={ index } />
				})
			}
		</div>
	)	
}

const HeaderNavContent = ( props ) => {
	return <div>{ props.title }</div>
}


```

### file which imports modules

```
import React from 'react';
import HeaderNav from './HeaderNav'; 
import './App.css';


const App = () => {
	return <HeaderNav />
}
export default App;
```
