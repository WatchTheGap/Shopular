(function() {
  'use strict';

  angular.module('inventory').factory('UserService', UserService);

  function UserService() {
    console.log('inside UserService');
    let users = JSON.parse(localStorage.getItem('users')) || [];

    function logIn() {
      console.log('inside logIn');
      return users;
    }

    function addUser(user) {
      console.log('inside addUser');
      if (typeof(user) !== 'object') {
        return;
      }

      users.push({
        username: user.username,
        loginTime: Date.now()
      });
      localStorage.setItem('users', angular.toJson(users));
    }
    return {
      logIn: logIn
    };
  }

}());
