import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import alertTriangle from '../assets/images/alert-triangle.png';
import {styles} from './errorStyles'
import refresh from '../assets/images/Refresh.png';
interface ErrorProps {
    isTablet: boolean
}

const Error: React.FC<ErrorProps> = ({ onRetry, isTablet }) => {
    return (
        <View style={isTablet? styles.errorRowContainer: styles.container}>
            <View style={isTablet? styles.rowErrorBox:styles.errorBox}>
                <Image source={alertTriangle} style={styles.alertIcon} />
                <Text style={styles.errorMessage}>Ошибка: не удалось загрузить информацию</Text>
            </View>
            <TouchableOpacity style={isTablet? styles.rowRefreshButton:styles.refreshButton}
                              onPress={() => {onRetry()}}>
                <View style={styles.buttonContent}>
                    <Text style={styles.buttonText}>Обновить</Text>
                    <Image source={refresh} style={styles.refreshIcon} />
                </View>
            </TouchableOpacity>
        </View>
    );
};


export default Error;
