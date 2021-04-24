import React, { useState } from 'react';
import { View } from 'react-native';
import FormImagePicker from './components/forms/FormImagePicker';
import ListingEditScreen from './screens/ListingEditScreen';

// import Screen from './components/Screen';
// import ImageInputList from './components/ImageInputList';
import LoginScreen from './screens/LoginScreen';

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

  return <ListingEditScreen />;
}
