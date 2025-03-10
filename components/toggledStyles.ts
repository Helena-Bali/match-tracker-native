import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    toggledParent: {
        backgroundColor: '#0B0E12',
        padding: 8,
        paddingTop: 0,
        flexDirection: 'column',
        alignItems: 'center',
        width: "100%"
    },
    innerToggledParent: {
        width: '100%',
        backgroundColor: '#0B0E12',
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    rowLayout: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    teamContainer: {width: '100%', marginTop: 4},
    rowTeamContainer: {width: '49%', marginTop: 4},
    userParentCont: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    userContainer: {
        backgroundColor: '#101318',
        padding: 8,
        marginBottom: 3,
        flexDirection: 'column',
        alignItems: 'center',
        width: '32%'
    },
    avatarContainer: {flexDirection: 'row', alignItems: 'center'},
    avatar: {width: 32, height: 32, marginRight: 8},
    textWhite: {color: '#fff', fontSize: 10},
    murdersContainer: {color: '#FAFAFA66', marginTop: 4, fontSize: 11},
    scoreContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#101318',
        padding: 8,
        marginTop: 5
    },
    scoreItem: {color: '#FAFAFA66', fontSize: 10, paddingLeft: 15},
    scoreNumber: {color: '#fff', marginLeft: 4, fontSize: 11},
    VScontainer: {
        backgroundColor: '#0B0E12',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: "center",
        height: 20
    },
    stripe: {
        borderWidth: 1,
        borderColor: '#101318',
        width: "40%",
    },
    VS: {
        height: 21,
        width: 20
    }

});
