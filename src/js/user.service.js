(function() {
  'use strict';

  angular.module('inventory').factory('UserService', UserService);


  /**
   * Creates the User Service model for handling user getUsernames
   */
  function UserService() {
    console.log('inside UserService');
    let users = JSON.parse(localStorage.getItem('users')) || [];

    /**
     * Retrieves user information
     * @return {Array} Array with user info objects
     */
    function getUsername() {
      console.log('inside getUsername');
      return users;
    }

    /**
     * Adds a new user when they log in
     * @param {Object} user User information containing username & timestamp
     */
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
      getUsername: getUsername,
      addUser: addUser
    };
  }

}());
