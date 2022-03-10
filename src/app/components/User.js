import {View, Text} from 'react-native';
import React, {useCallback, useEffect} from 'react';

const User = ({name}) => {
  return (
    <View>
      <Text style={{color: 'blue'}}>{name}</Text>
    </View>
  );
};

export default User;
