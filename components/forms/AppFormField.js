import React from 'react';
import AppTextInput from '../AppTextInput';
import { useFormikContext } from 'formik';

function AppFormField({ name, ...otherProps }) {
  const { handleChange } = useFormikContext();
  return <AppTextInput onChangeText={handleChange(name)} {...otherProps} />;
}

export default AppFormField;
