(function() {
  'use strict';

  let expect = chai.expect;

  describe('inventory controller', function() {

    let InventoryController;
    let mockItemService = {};

    beforeEach(module('inventory'));

    beforeEach(module(function($provide) {
      $provide.value('ItemService', mockItemService);
    }));

    beforeEach(inject(function($controller) {
      mockItemService.getAllItems = function getAllItems() {
        return [];
      };
      mockItemService.addItem = function addItem() {
      };
      InventoryController = $controller('InventoryController');
    }));

    it('should be a function', function() {
      expect(mockItemService.getAllItems).to.be.a('function');
      expect(mockItemService.addItem).to.be.a('function');
    });
    it('should be an array', function() {
      expect(InventoryController.inventoryList).to.be.an('array');
    });
    it('should be an object', function() {
      expect(InventoryController.newItem).to.be.an('object');
    });
  });

}());
