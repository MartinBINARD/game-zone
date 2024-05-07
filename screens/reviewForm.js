import { StyleSheet, Button, TextInput, View, Text } from 'react-native';
import { globalStyles } from '../styles/global.js';
import { Formik } from 'formik';
import { object, string } from 'yup';

export default function ReviewForm({ addReview }) {
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
        initialValues={{ title: '', body: '', rating: '' }}
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
              value={props.values.title}
            />

            <TextInput
              style={globalStyles.input}
              multiline
              placeholder="Review details"
              onChangeText={props.handleChange('body')}
              value={props.values.body}
            />

            <TextInput
              style={globalStyles.input}
              placeholder="Rating (1 - 5)"
              onChangeText={props.handleChange('rating')}
              value={props.values.rating}
              keyboardType="numeric"
            />

            <Button
              color="maroon"
              title="Submit"
              onPress={props.handleSubmit}
            />
          </View>
        )}
      </Formik>
    </View>
  );
}
