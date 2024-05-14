import { TextInput, View, Text } from 'react-native';
import { Formik } from 'formik';
import { object, string } from 'yup';

import { ReviewProps } from './home.js';

import { globalStyles } from '../styles/global.js';
import FlatButton from '../shared/button.js';

type AddReviewProps = {
  addReview: (value: ReviewProps) => void;
};

export default function ReviewForm({ addReview }: AddReviewProps) {
  const ReviewSchema = object({
    title: string().required().min(4),
    body: string().required().min(8),
    rating: string()
      .required()
      .test('is-num-1-5', 'Rating must be a number 1 - 5', (val) => {
        return parseInt(val) < 6 && parseInt(val) > 0;
      }),
  });

  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: '', body: '', rating: '', key: '' }}
        validationSchema={ReviewSchema}
        onSubmit={(values) => {
          addReview(values);
        }}
      >
        {(props) => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder="Review title"
              onChangeText={props.handleChange('title')}
              onBlur={props.handleBlur('title')}
              value={props.values.title}
            />
            <Text style={globalStyles.errorText}>
              {props.touched.title && props.errors.title}
            </Text>

            <TextInput
              style={globalStyles.input}
              multiline
              placeholder="Review details"
              onChangeText={props.handleChange('body')}
              onBlur={props.handleBlur('body')}
              value={props.values.body}
            />
            <Text style={globalStyles.errorText}>
              {props.touched.body && props.errors.body}
            </Text>

            <TextInput
              style={globalStyles.input}
              placeholder="Rating (1 - 5)"
              onChangeText={props.handleChange('rating')}
              onBlur={props.handleBlur('rating')}
              value={props.values.rating}
              keyboardType="numeric"
            />
            <Text style={globalStyles.errorText}>
              {props.touched.rating && props.errors.rating}
            </Text>

            <FlatButton text="submit" onPress={props.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
}
