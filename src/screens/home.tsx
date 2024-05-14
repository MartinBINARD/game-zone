import React, { useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { globalStyles } from '../styles/global';

import { HomeStackNavigatorParamsList } from 'src/@types/react-navigation';

import Card from '../shared/card';
import ReviewForm from './reviewForm';

type HomeScreenProps = {
  navigation: NativeStackNavigationProp<
    HomeStackNavigatorParamsList,
    'ReviewDetails'
  >;
};

export type ReviewProps = {
  title: string;
  rating: string;
  body: string;
  key: string;
};

export default function Home({ navigation }: HomeScreenProps) {
  const [modalOpen, setModalOpen] = useState(false);

  const [reviews, setReviews] = useState([
    {
      title: 'Zelda, Breath of Fresh Air',
      rating: '5',
      body: 'lorem ipsum',
      key: '1',
    },
    {
      title: 'Gotta Catch Them All (again)',
      rating: '4',
      body: 'lorem ipsum',
      key: '2',
    },
    {
      title: 'Not So "Final" Fantasy',
      rating: '3',
      body: 'lorem ipsum',
      key: '3',
    },
  ]);

  const addReview = (review: ReviewProps) => {
    review.key = Math.random().toString();
    setReviews((currentReview) => {
      return [review, ...currentReview];
    });
    setModalOpen(false);
  };

  return (
    <View style={globalStyles.container}>
      <Modal visible={modalOpen} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <MaterialIcons
              name="close"
              size={24}
              style={{ ...styles.modalToggle, ...styles.modalClose }}
              onPress={() => setModalOpen(false)}
            />
            <ReviewForm addReview={addReview} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <MaterialIcons
        name="add"
        size={24}
        style={styles.modalToggle}
        onPress={() => setModalOpen(true)}
      />

      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ReviewDetails', item)}
          >
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  modalToggle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
  },
});
