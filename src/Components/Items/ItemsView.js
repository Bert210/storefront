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
  width: 150,
  display: 'inline-flex',
  margin: '1rem',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
})

const itemName = glamor.css({
  fontSize: 18,
  textAlign: 'center',
})

const itemImage = glamor.css({
	width: 150,
	height: 150,
})

const ItemsView = ({items}) => {
	return items.map( item => {
		return(
			<a className={`${itemStyle}`} href={`/${item.itemCode}`} key={item.itemCode}>
				<img className={`${itemImage}`} src={item.img} alt={item.name}/>
				<div>{item.name}</div>
				<div>{'*'.repeat(item.rating)}</div>
				<div>{item.price}</div>
			</a>
		)
	})
}

export default ItemsView