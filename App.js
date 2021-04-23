import React, { useState } from 'react';

import Screen from './components/Screen';
import ImageInputList from './components/ImageInputList';
import LoginScreen from './screens/LoginScreen';
import AppTextInput from './components/AppTextInput';

export default function App() {
  // const [imageUris, setImageUris] = useState([]);

  // const handleAdd = (uri) => {
  //   setImageUris([...imageUris, uri]);
  // };

  // const handleRemove = (uri) => {
  //   setImageUris(imageUris.filter((imageUri) => imageUri !== uri));
  // };

  // return (
  //   <Screen>
  //     <ImageInputList
  //       imageUris={imageUris}
  //       onAddImage={handleAdd}
  //       onRemoveImage={handleRemove}
  //     />
  //   </Screen>
  // );

  return <LoginScreen />;
}
