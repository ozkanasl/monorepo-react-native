import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Container from '../components/layout/Container';
import ScrollView from '../components/common/ScrollView';
import * as dataActions from '../redux/Home/Home.actions';


class Home extends Component<Component>{


	componentDidMount() {
		const { actions }: { actions: object } = this.props;
		actions.getDataStart();
	}

	render() {
		const { data }: { data: array } = this.props;
		return (
			<Container
				flex={1}
				justifyContent='flex-start'
			>
				<ScrollView
					contentContainerStyle={{ padding: 20 }}
				>
					<View>
						{data && data.map( item => {
							return <Text key={item.id}> {item.id}. {item.title} </Text>;
						} )}
					</View>
				</ScrollView>
			</Container>
		);
	}
}

const mapStateToProps = ( { data }: { data: object } ) => ( {
	...data
} );

const mapDispatchToProps = ( dispatch: object ) => {
	return {
		actions: bindActionCreators( dataActions, dispatch )
	};
};

export default connect( mapStateToProps, mapDispatchToProps )( Home );
