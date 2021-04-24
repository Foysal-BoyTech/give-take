import React from 'react';
import * as Yup from 'yup';

import AppForm from '../components/forms/AppForm';
import AppFormField from '../components/forms/AppFormField';
import FormImagePicker from '../components/forms/FormImagePicker';
import SubmitButton from '../components/forms/SubmitButton';

import Screen from '../components/Screen';

const validationSchema = Yup.object().shape({
  title: Yup.string().label('Title'),
  description: Yup.string().label('Description'),
  image: Yup.array().min(1).label('Images'),
});

function ListingEditScreen() {
  return (
    <Screen>
      <AppForm
        initialValues={{
          title: '',
          description: '',
          image: [],
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField
          maxLength={255}
          name="description"
          placeholder="Description"
          numberOfLines={4}
        />

        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}

export default ListingEditScreen;
