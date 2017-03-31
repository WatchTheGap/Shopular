(function() {
  'use strict';

  let expect = chai.expect;

  describe('item service', function() {

    let ItemService;

    beforeEach(module('inventory'));

    beforeEach(inject(function(_ItemService_) {
      ItemService = _ItemService_;
    }));

    afterEach(function() {
      localStorage.removeItem('items');
    });

    it('should retrieve an array', function() {
      let result = ItemService.getAllItems();
      expect(result).to.be.an('array');
    });

  });


}());
