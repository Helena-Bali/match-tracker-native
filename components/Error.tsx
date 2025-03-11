import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import alertTriangle from '../assets/images/alert-triangle.png';
import {errorStyles} from './errorStyles'
import refresh from '../assets/images/Refresh.png';
interface ErrorProps {
    isTablet: boolean,
}

const Error = ({ isTablet }:ErrorProps):JSX.Element => {
    return (
        <View style={isTablet? errorStyles.errorRowContainer: errorStyles.container}>
            <View style={isTablet? errorStyles.rowErrorBox:errorStyles.errorBox}>
                <Image source={alertTriangle} style={errorStyles.alertIcon} />
                <Text style={errorStyles.errorMessage}>Ошибка: не удалось загрузить информацию</Text>
            </View>
            {/*<TouchableOpacity style={isTablet? styles.rowRefreshButton:styles.refreshButton}*/}
            {/*                  onPress={() => {onRetry()}}>*/}
            {/*    <View style={styles.buttonContent}>*/}
            {/*        <Text style={styles.buttonText}>Обновить</Text>*/}
            {/*        <Image source={refresh} style={styles.refreshIcon} />*/}
            {/*    </View>*/}
            {/*</TouchableOpacity>*/}
        </View>
    );
};


export default Error;
