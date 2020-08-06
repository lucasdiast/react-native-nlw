import React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import giveClassesBgImage from '../../assets/images/give-classes-background.png'

function GiveClasses() {
    const { goBack } = useNavigation();

    function handleNavigate() {
        goBack();
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={giveClassesBgImage} style={styles.content} resizeMode="contain">
                <Text style={styles.title}>
                    Quer ser um proffy?
                </Text>
                <Text style={styles.description}>
                    Para começar, você precisa se cadastrar como professor na nossa plataforma web
                </Text>
            </ImageBackground>

            <RectButton onPress={handleNavigate} style={styles.okButton}>
                <Text style={styles.okButtonText}>Cadastrar</Text>
            </RectButton>
        </View>
    )
}

export default GiveClasses;