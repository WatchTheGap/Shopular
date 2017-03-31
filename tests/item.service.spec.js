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
    it('should accept an inventory object that contains all fields', function() {
      ItemService.addItem({name: 'apple', price: 5, quantity: 3, color: 'red', discount: 0});
      let result = ItemService.getAllItems();
      expect(result.length).to.equal(1);
    });
    it('should accept an inventory object with ONLY the REQUIRED fields', function() {
      ItemService.addItem({name: 'apple', price: 5, quantity: 3});
      let result = ItemService.getAllItems();
      expect(result.length).to.equal(1);
    });
    it('should reject an inventory object that does not contain all required fields', function() {
      ItemService.addItem({wrong: 'bad', color: 'red'});
      let result = ItemService.getAllItems();
      expect(result.length).to.equal(0);
    });

  });


}());
