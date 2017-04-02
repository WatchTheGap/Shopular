(function() {
  'use strict';

  let expect = chai.expect;

  describe('user service', function() {

    let UserService;

    beforeEach(module('inventory'));

    beforeEach(inject(function(_UserService_) {
      UserService = _UserService_;
    }));

    afterEach(function() {
      localStorage.removeItem('users');
    });

    it('should retrieve an array', function() {
      let result = UserService.getUsername();
      expect(result).to.be.an('array');
    });
    it('should accept an new user object that contains the correct information', function() {
      UserService.addUser({username: 'username', loginTime: 99999999});
      let result = UserService.getUsername();
      expect(result.length).to.equal(1);
    });

    it('should reject a new user object that contains incorrect information', function() {
      UserService.addUser({wrong: 'bad'});
      let result = UserService.getUsername();
      expect(result.length).to.equal(0);
    });
    it('should handle an empty object', function() {
      UserService.addUser({});
      let result = UserService.getUsername();
      expect(result.length).to.equal(0);
    });
    it('should remove an object from the array', function() {
      UserService.addUser({username: 'username', loginTime: 99999999});
      UserService.removeUser();
      let result = UserService.getUsername();
      expect(result.length).to.equal(0);
    });

  });

}());
