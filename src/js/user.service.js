(function() {
  'use strict';

  angular.module('inventory').factory('UserService', UserService);


  /**
   * Creates the User Service model for handling user getUsernames
   */
  function UserService() {
    let users = JSON.parse(localStorage.getItem('users')) || [];

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
      if (typeof(user) !== 'object') {
        return console.warn('rejected because not an object');
      }
      if(!user.username) {
        return console.warn('rejected because no username');
      }
      users.push({
        username: user.username,
        loginTime: Date.now()
      });
      localStorage.setItem('users', angular.toJson(users));
    }

    /**
     * Removes the last entry in the user array
     * @param  {Object} user The user object to be removed
     * @return {void}
     */
    function removeUser(user) {
      let index = users.indexOf(user);
      users.splice(index, 1);
    }
    
    return {
      getUsername: getUsername,
      addUser: addUser,
      removeUser: removeUser
    };
  }

}());
