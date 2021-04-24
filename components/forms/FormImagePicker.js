import React from 'react';
import { useFormikContext } from 'formik';

import ImageInputList from '../ImageInputList';

function FormImagePicker({ name }) {
  const { setFieldValue, values } = useFormikContext();
  const handleAdd = (uri) => {
    setFieldValue(name, [...values[name], uri]);
  };

  const handleRemove = (uri) => {
    setFieldValue(
      name,
      values[name].filter((imageUri) => imageUri !== uri),
    );
  };
  return (
    <ImageInputList
      imageUris={values[name]}
      onAddImage={handleAdd}
      onRemoveImage={handleRemove}
    />
  );
}

export default FormImagePicker;
