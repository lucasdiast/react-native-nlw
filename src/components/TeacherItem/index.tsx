import React from 'react';
import { View, Image, Text } from 'react-native';

import styles from './styles';

function TeacherItem() {
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image
                    style={styles.avatar}
                    source={{ uri: 'https://github.com/lucasdiast.png' }}
                />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Lucas Dias</Text>
                    <Text style={styles.subject}>Programação</Text>
                </View>
            </View>
        </View>
    )
}

export default TeacherItem;