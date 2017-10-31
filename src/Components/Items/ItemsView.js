/** ItemsView.js
	Created by: Robert Utchel
	On: Oct 30 7:08 AM 2017
	Type: Presentation
	What does it do: Retrieves the data for the ItemsView
	Why does it do it: The app needs a way for to get the data and manipulate it into an appropriate state
**/
import React from 'react'

import * as glamor from 'glamor'

const itemStyle = glamor.css({
  width: '20%',
  backgroundColor: 'red',
  display: 'inline-flex',
  margin: '1rem',
  justifyContent: 'center',
})

const itemName = glamor.css({
  fontSize: 18,
  textAlign: 'center',
})

const ItemsView = ({items}) => {
	return items.map( item => {
		return(
			<div className={`${itemStyle}`} key={item.itemCode}>
				<img src={item.img} alt={item.name}/>
				<div>{item.name}</div>
				<div>{item.rating}</div>
				<div>{item.price}</div>
			</div>
		)
	})
}

export default ItemsView