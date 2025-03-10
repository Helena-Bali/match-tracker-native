import React, { useEffect, useState, useRef } from 'react';
import { Text, Animated } from 'react-native';

const AnimatedScore  = ({ score }: { score: number }): JSX.Element => {
    const animatedValue = useRef(new Animated.Value(score)).current;
    const [displayedScore, setDisplayedScore] = useState(score);

    useEffect(() => {
        Animated.timing(animatedValue, {
            toValue: score,
            duration: 500,
            useNativeDriver: false,
        }).start();

        const listener = animatedValue.addListener(({ value }) => {
            setDisplayedScore(Math.round(value));
        });

        return () => {
            animatedValue.removeListener(listener);
        };
    }, [score]);

    return <Text>{displayedScore}</Text>;
};

export default AnimatedScore;
