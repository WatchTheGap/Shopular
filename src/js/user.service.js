(function() {
  'use strict';

  angular.module('inventory').factory('UserService', UserService);

  function UserService() {

    let users = JSON.parse(localStorage.getItem(users)) || [];

    function logIn(user) {
      if (typeof(user) !== 'object') {
        return;
      }

      users.push({
        username: user.username,
        loginTime: Date.now()
      });
    }

  }

}());
