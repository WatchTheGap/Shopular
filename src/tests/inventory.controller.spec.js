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

      InventoryController = $controller('InventoryController ')

    }));

    it('should add 1 + 1', function() {
      expect(1 + 1).to.equal(2);
    });


  });

}());
