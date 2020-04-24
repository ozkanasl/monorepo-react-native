import React, { Component } from 'react';
import SharedHome from 'shared/src/screens/Home';

export default class Home extends Component {
	static navigationOptions = {
		title: 'Anasayfa',
	};


	render() {
		return (
			<SharedHome />
		);
	}
}
