import React from 'react';
import {View, Image} from 'react-native';
import stripe from '../assets/images/stripe.png';
import TeamComponent from "./Team"
import VS from '../assets/images/VS.png';
import {styles} from './toggledStyles'
import {Match} from '../types/match';

interface ToggledProps {
    match: Match;
    isLaptop: boolean
}

const Toggled = ({match, isLaptop}:ToggledProps): JSX.Element => {
    return (
        <View style={styles.toggledParent}>
            <View style={[styles.innerToggledParent, isLaptop && styles.rowLayout]}>
                <TeamComponent team={match.awayTeam} isLaptop={isLaptop}/>
                {!isLaptop && (
                    <View style={styles.VScontainer}>
                        <Image style={styles.stripe} source={stripe}/>
                        <Image source={VS}/>
                        <Image style={styles.stripe} source={stripe}/>
                    </View>
                )}
                <TeamComponent team={match.homeTeam} isLaptop={isLaptop}/>
            </View>
        </View>
    );
};

export default Toggled;
