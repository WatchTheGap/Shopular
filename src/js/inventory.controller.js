(function() {
  'use strict';

  angular.module('inventory')
    .controller('InventoryController', InventoryController);

    InventoryController.$inject = ['ItemService'];
    /**
     * Constructs inventory controllers for populating inventory data in a table.
     */
    function InventoryController(ItemService) {
      let vm = this;

      vm.newItem = {};
      vm.sortType = 'price';
      vm.sortReverse = false;
      vm.tax = 0.0575;

      vm.inventoryList = ItemService.getAllItems();

      /**
       * Calculates the final price of an item by subtracting any applicable
       * discounts and adding sales tax.
       * @param  {Object} item Individual objects from the InventoryList array
       * @return {Number}       Final price of each item after discounts & tax.
       */
      vm.finalPrice = function finalPrice(item) {
        let price = (item.price - item.discount);
        let tax = price * vm.tax;
        return price + tax;
      };

      /**
       * Adds an item to the array containing data submitted by the user
       * @param {Object} item The item data
       * @return {void}
       */
      vm.addItem = function addItem(item) {
        ItemService.addItem(item);
        vm.newItem = {};
      };

    }

}());
