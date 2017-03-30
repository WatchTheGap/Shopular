(function() {
  'use strict';

  angular.module('inventory')
    .controller('LoginController', LoginController);

  LoginController.$inject = ['UserService'];
  console.log('after inject');


  /**
   * Creates log in controller for user management
   * @param {Function} UserService The User Service model that handles user data
   */
  function LoginController(UserService) {
    console.log('inside LoginController');
    let vm = this;
    console.log(vm);
    vm.newUser = {};
    console.log('vm.newUser', vm.newUser);
    vm.users = UserService.getUsername();
    console.log('vm.users', vm.users);

    /**
     * Adds a new user when they log in
     * @param {Object} user User information containing username & timestamp
     */
    vm.addUser = function addUser(user) {
      console.log('inside addUser');
      UserService.addUser(user);
      vm.newUser = {};
    };

  }

}());
