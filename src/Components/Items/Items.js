/** Items.js
	Created by: Robert Utchel
	On: Oct 30 7:07 AM 2017
	Type: Container
	What does it do: Retrieves the data for the ItemsView
	Why does it do it: The app needs a way for to get the data and manipulate it into an appropriate state
**/

import React from 'react'

import ItemsView from './ItemsView'

// This is just a placeholder until i implement a backend to fetch the data from the server.
// api location idea items
const items = [
	{img: "./imgs/necklace.jpg", name:"Gold Necklace", 	itemCode:"001",	 price:19.99, rating:5 },
	{img: "./imgs/earrings.jpg", name:"Sliver Earrings", itemCode:"002", price:14.99, rating:4 },
	{img: "./imgs/barcelet.jpg", name:"Copper Bracelet", itemCode:"003", price:9.99,  rating:3 }
]

class Items extends React.Component {
	render() {
		return <ItemsView items={items}/>
	}
}

export default Items