(function() {
  'use strict';

  let expect = chai.expect;

  describe('login controller', function() {

    let LoginController;
    let mockUserService = {};

    beforeEach(module('inventory'));

    beforeEach(module(function($provide) {
      $provide.value('UserService', mockUserService);
    }));

    beforeEach(inject(function($controller) {
      mockUserService.addUser = function addUser() {
      };
      mockUserService.removeUser = function removeUser() {
      };
      mockUserService.getUsername = function getUsername() {
        return [{username: 'username', loginTime: Date.now()}];
      };
      LoginController = $controller('LoginController');
    }));

    it('should be a function', function() {
      expect(mockUserService.addUser).to.be.a('function');
      expect(mockUserService.removeUser).to.be.a('function');
      expect(mockUserService.getUsername).to.be.a('function');
    });
  });



}());
