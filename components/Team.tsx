import React from 'react';
import {View, Text, Image} from 'react-native';
import avatar from '../assets/images/avatar_global.png';
import {styles} from './toggledStyles'
import {Team} from '../types/match';

interface TeamProps {
    isLaptop: boolean,
    team: Team
}

const TeamComponent = ({ isLaptop, team}: TeamProps): JSX.Element => {
    return (
        <View style={[styles.teamContainer, isLaptop && styles.rowTeamContainer]}>
            <View style={styles.userParentCont}>
                {team.players.map((player, i) => (
                    <View key={i} style={styles.userContainer}>
                        <View style={styles.avatarContainer}>
                            <Image source={avatar} style={styles.avatar}/>
                            <Text style={styles.textWhite}>{player.username}</Text>
                        </View>
                        <Text style={styles.murdersContainer}>Убийств: <Text
                            style={styles.textWhite}>{player.kills}</Text></Text>
                    </View>
                ))}
            </View>
            <View style={styles.scoreContainer}>
                <Text style={styles.scoreItem}>Points: <Text
                    style={styles.scoreNumber}>{team.points}</Text></Text>
                <Text style={styles.scoreItem}>Место: <Text
                    style={styles.scoreNumber}>{team.place}</Text></Text>
                <Text style={styles.scoreItem}>Всего убийств: <Text
                    style={styles.scoreNumber}>{team.total_kills}</Text></Text>
            </View>
        </View>
    );
};

export default TeamComponent;
