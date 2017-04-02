(function() {
  'use strict';

  angular.module('inventory').factory('UserService', UserService);


  /**
   * Creates the User Service model for handling user getUsernames
   */
  function UserService() {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    console.log('inside UserService', users);

    /**
     * Retrieves user information
     * @return {Array} Array with user info objects
     */
    function getUsername() {
      return users;
    }

    /**
     * Adds a new user when they log in
     * @param {Object} user User information containing username & timestamp
     */
    function addUser(user) {
      console.log('inside AddUser, before IFs');
      if (typeof(user) !== 'object') {
        return console.warn('rejected because not an object');
      }
      if(!user.username) {
        return console.warn('rejected because no username');
      }
      console.log('inside addUser, after IFs');
      users.push({
        username: user.username,
        loginTime: Date.now()
      });
      localStorage.setItem('users', angular.toJson(users));

      console.log('after push', users);

    }
    /**
     * Removes the last entry in the user array
     * @param  {Object} user The user object to be removed
     * @return {void}
     */
    function removeUser(user) {
      console.warn('inside removeUser', users);
      let index = users.indexOf(user);
      if(typeof(user) !== 'object' ||
        users.indexOf(user) < 0) {
        return;
      }
      users.splice(index, 1);
      console.warn('after splice', users);
    }
    return {
      getUsername: getUsername,
      addUser: addUser,
      removeUser: removeUser
    };
  }

}());
