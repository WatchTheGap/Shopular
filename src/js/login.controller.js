(function() {
  'use strict';

  angular.module('inventory')
    .controller('LoginController', LoginController);

  LoginController.$inject = ['UserService'];
  console.log('after inject');

  function LoginController(UserService) {
    console.log('inside LoginController');
    let vm = this;
    console.log(vm);
    vm.newUser = {};
    console.log('vm.newUser', vm.newUser);
    vm.users = UserService.getUsername();
    console.log('vm.users', vm.users);

    vm.addUser = function addUser(user) {
      console.log('inside addUser');
      UserService.addUser(user);
      vm.newUser = {};
    };

  }

}());
