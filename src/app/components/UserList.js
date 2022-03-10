import {View, Text, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import User from '../components/User';
import {useSelector, useDispatch} from 'react-redux';

import {loadUsers} from '../redux/modules/global/actions';

const UserList = () => {
  const users = useSelector(state => state.global.users);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('http://country.io/names.json')
      .then(response => response.json())
      .then(rJson => {
        dispatch(loadUsers(rJson));
      });
  }, []);

  return (
    <View style={{flex: 1}}>
      <Text>User Count: {Object.keys(users)?.length}</Text>
      <ScrollView style={{padding: 5}}>
        {Object.keys(users).map((c, index) => (
          <View style={{flexDirection: 'row'}}>
            <Text>{c} : </Text>
            <Text>{Object.values(users)[index]}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default UserList;
