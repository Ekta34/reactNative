
import React, { Component,PropTypes } from 'react';
import { connect } from 'react-redux'

import { 
    View,
    ActivityIndicator,
    Text
} from 'react-native';
import styles from './FirstTabStyle';
import {getEmployeFeed} from 'js/modules/FirstTabModule'

class FirstTab extends Component {

    constructor(props){
        super(props);        
    }

    componentWillMount = () => {
        this.props.getEmployeFeed();
    }

    render(){
        console.log(this.props);
        
        return(
            <View style={styles.container}>
                <Text>Hello World!! How are you?</Text>
            </View> 
        )      
    }
}

const mapDispatchToProps = {
    getEmployeFeed
}

const mapStateToProps = (state) => ({
    employees : state.firstTab.employees
})

export default connect(mapStateToProps, mapDispatchToProps)(FirstTab);



