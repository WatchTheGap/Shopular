(function() {
  'use strict';

  angular.module('inventory')
    .controller('LoginController', LoginController);

  LoginController.$inject = ['UserService'];


  /**
   * Creates log in controller for user management
   * @param {Function} UserService The User Service model that handles user data
   */
  function LoginController(UserService) {
    let vm = this;
    vm.newUser = {};
    vm.users = UserService.getUsername();

    /**
     * Adds a new user when they log in
     * @param {Object} user User information containing username & timestamp
     */
    vm.addUser = function addUser(user) {
      UserService.addUser(user);
      vm.newUser = {};
    };

    vm.removeUser = function removeUser(user) {
      UserService.removeUser(user);
    };

  }

}());
