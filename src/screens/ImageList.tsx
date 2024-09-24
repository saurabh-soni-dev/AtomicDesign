import React, {useState} from 'react';
import {FlatList, Image, View} from 'react-native';

const ImageList = () => {
  const [intialItem, setIntialItem] = useState(10);

  const statusCodes = [];
  let len = intialItem+200
  for (let i = 200; i < len; i++) {
    statusCodes.push(i);
  }

  const newImageList = statusCodes.map(item => `https://http.dog/${item}.jpg`);

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={newImageList?.slice(0, intialItem)}
        keyExtractor={index => {
          return `${index}`;
        }}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                marginTop: 5,
                backgroundColor: 'red',
                height: 300,
                width: 300,
              }}>
              <Image
                key={index}
                source={{uri: item}}
                resizeMode="cover"
                style={{width: 300, height: 300}}
              />
            </View>
          );
        }}
        initialNumToRender={10}
        onEndReached={info => {
          if (info.distanceFromEnd == 0) {
            setIntialItem(prev => prev + 10);
          }
        }}
      />
    </View>
  );
};

export default ImageList;
