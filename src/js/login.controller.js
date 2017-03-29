(function() {
  'use strict';

  angular.module('inventory')
    .controller('LoginController', LoginController);

  LoginController.$inject = ['UserService'];

  function LoginController() {
    console.log('inside LoginController');
    let vm = this;

    vm.newUser = {};
    vm.users = UserService.logIn();

    vm.addUser = function addUser(user) {
      console.log('inside addUser');
      UserService.addUser(user);
      vm.newUser = {};
    };

  }

}());
