(function() {
  'use strict';

  angular.module('inventory')
    .controller('InventoryController', InventoryController);
    /**
     * Constructs inventory controllers for populating inventory data in a table.
     */
    function InventoryController() {
      let vm = this;
      vm.newItem = {};

      vm.inventoryList = [
        { "id": 2957, "name": "widget", "price": 32, "quantity": 203, "color": "red", "discount": 31 },
        { "id": 89274, "name": "golf club", "price": 98, "quantity": 10, "color": "black", "discount": 0 },
        { "id": 64, "name": "iPhone", "price": 499, "quantity": 2, "color": "white", "discount": 0 },
        { "id": 87363, "name": "bonzai tree", "price": 76, "quantity": 2, "color": "green", "discount": 0 },
        { "id": 1736, "name": "towel", "price": 55, "quantity": 30, "color": "brown", "discount": 10 },
        { "id": 4836, "name": "dog bed", "price": 99, "quantity": 10, "color": "beige", "discount": 50 },
        { "id": 829, "name": "waste basket", "price": 15, "quantity": 40, "color": "silver", "discount": 0 },
        { "id": 46, "name": "guitar", "price": 899, "quantity": 0, "color": "blue", "discount": 150 },
        { "id": 17456, "name": "matcha tea", "price": 42, "quantity": 4, "color": "green", "discount": 11 },
        { "id": 3292, "name": "enlightenment", "price": 99999, "quantity": 1, "color": "red", "discount": 0 },
        { "id": 533, "name": "eggs", "price": 5, "quantity": 12, "color": "brown", "discount": 1 },
        { "id": 683, "name": "pillow", "price": 27, "quantity": 10, "color": "black", "discount": 12 }
      ];

      vm.tax = 0.0575;
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
        if (typeof(item) !== 'object' ||
           typeof(item.name) !== 'string' ||
           typeof(item.price) !== 'number' ||
           typeof(item.quantity) !== 'number' ||
           typeof(item.color) !== 'string' ||
           typeof(item.discount) !== 'number'){
          return;
        }

//add conversion to numbers - all form data is strings

        vm.inventoryList.push({
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          color: item.color,
          discount: item.discount
        });
        vm.newItem = {};
      };

      vm.sortType = 'price';
      vm.sortReverse = false;
    }

}());
