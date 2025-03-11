import {StyleSheet} from 'react-native';


export const styles = StyleSheet.create({
        container: {flex: 1, backgroundColor: '#000', padding: 20},
        header: {
            fontSize: 28,
            color: '#fff',
            fontFamily: 'TacticSansBold-Italic',
            fontWeight: 'bold',
            fontStyle: "italic",
            marginBottom: 10,
            marginTop: 20,
            textAlign: "center"
        },

        headerRowContainer: {
            flexDirection: "row",
            gap: 20,
            marginBottom: 10,
        },
        errorRowContainer: {
            flexDirection: "row",
            justifyContent: "space-between"
        },

        matchContainer: {
            backgroundColor: '#0B0E12',
            borderTopStartRadius: 5,
            borderTopEndRadius: 5,
            padding: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
        },
        arrowContainer: {
            backgroundColor: '#0B0E12',
            borderBottomStartRadius: 5,
            borderBottomEndRadius: 5,
            marginBottom: 10,
            justifyContent: "flex-start",
            alignItems: "center",
            paddingBottom: 3
        },
        teamContainer: {flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 5},
        teamLogo: {width: 28, height: 28, marginRight: 5, marginLeft: 5},
        teamName: {color: '#fff', fontSize: 12},
        scoreContainer: {alignItems: 'center', marginTop: 5},
        score: {fontSize: 15, color: '#fff', fontWeight: 'bold'},
        status: {
            paddingHorizontal: 8,
            paddingTop: 5,
            borderRadius: 5,
            color: '#fff',
            marginTop: 5,
            fontSize: 12,
            height: 27,
            minWidth: 70,
            textAlign: "center",
        },
        ongoing: {backgroundColor: '#43AD28'},
        finished: {backgroundColor: '#EB0237'},
        scheduled: {backgroundColor: '#EB6402'},
        expandButton: {alignItems: 'center', width: 28, height: 28},
    }
);
