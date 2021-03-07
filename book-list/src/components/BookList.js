import React, { Component } from 'react';
import { ThemeContext } from '../context/ThemeContext';

class BookList extends Component {
	static contextType = ThemeContext;

	render() {
		console.log(this.context);
		const { isLightTheme, light, dark } = this.context;
		const theme = isLightTheme ? light : dark;
		return (
			<div
				className='book-list'
				style={{ background: theme.bg, color: theme.syntax }}
			>
				<h1>Context API</h1>
				<ul>
					<li style={{ background: theme.ui }}>Kafka on the shore</li>
					<li style={{ background: theme.ui }}>Natives</li>
					<li style={{ background: theme.ui }}>Normal People</li>
				</ul>
			</div>
		);
	}
}

export default BookList;
