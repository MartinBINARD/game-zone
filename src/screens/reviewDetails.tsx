import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageSourcePropType,
} from 'react-native';
import { globalStyles, images } from '../styles/global';
import Card from '../shared/card';
import { RouteProp } from '@react-navigation/native';
import { HomeStackNavigatorParamsList } from 'src/@types/react-navigation';

type ReviewDetailsProps = {
  route: RouteProp<HomeStackNavigatorParamsList, 'ReviewDetails'>;
};

export default function ReviewDetails({ route }: ReviewDetailsProps) {
  const { title, body, rating } = route.params;
  const ratingInNumber: number = parseInt(rating);

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>{title}</Text>
        <Text>{body}</Text>
        <Text>{rating}</Text>
        <View style={styles.rating}>
          <Text>GameZone rating : </Text>
          <Image
            source={images.ratings[ratingInNumber] as ImageSourcePropType}
          />
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
});
