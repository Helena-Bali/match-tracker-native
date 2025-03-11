import {StyleSheet} from "react-native";

export const errorStyles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20
    },
    errorRowContainer: {
        flexDirection: "row",
        justifyContent: 'center',
        gap: 8,
        marginBottom: 20
    },
    errorBox: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#0F1318',
        padding: 12,
        width: "100%",
        borderRadius: 3,
        marginBottom: 16,
    },
    rowErrorBox: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#0F1318',
        padding: 12,
        width: 394,
        height: 56,
        borderRadius: 3,
    },
    alertIcon: {
        width: 28,
        height: 28,
        marginRight: 12,
    },
    errorMessage: {
        color: '#fff',
        fontSize: 14,
        flex: 1,
    },
    refreshButton: {
        backgroundColor: '#EB0237',
        paddingTop: 12,
        paddingBottom: 12,
        paddingHorizontal: 24,
        borderRadius: 3,
        width: "100%",
        alignItems: "center",
        marginBottom: 20
    },

    rowRefreshButton: {
        backgroundColor: '#EB0237',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 3,
        width: 204,
        height: 56,
        alignItems: "center"
    },
    buttonContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    refreshIcon: {
        width: 26,
        height: 26,
        marginLeft: 8,
    },
});
