import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    dropDownContainer: {
        backgroundColor: '#0F1318',
        borderRadius: 3,
        paddingHorizontal: 12,
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: "100%",
        height: 56,
        marginBottom: 10,
    },
    dropDownText: {
        color: '#FFF',
        fontSize: 16,
    },
    dropDownIcon: {
        width: 20,
        height: 20,
    },
    dropDownList: {
        backgroundColor: '#0B0E12',
        borderRadius: 8,
        paddingVertical: 5,
        marginBottom: 5,
        width: "100%",
    },
    dropDownItem: {
        paddingVertical: 8,
        paddingHorizontal: 12,
        color: '#FFF',
        fontSize: 16,
    },
    dropDownItemSelected: {
        backgroundColor: '#1A1D23',
    },
});
