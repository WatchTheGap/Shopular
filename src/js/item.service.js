(function() {
  'use strict';

  angular.module('inventory').factory('ItemService', ItemService);


  /**
   * Creates the Item Service model for handling inventory items
   */
  function ItemService() {

    let items = JSON.parse(localStorage.getItem('items')) || [];

    /**
     * Retrieves all items in the inventory
     * @return {Array} Array of inventory items
     */
    function getAllItems() {
      return items;
    }

    /**
     * Adds a new item to the inventory
     * @return {void}
     */
    function addItem(item) {
      if (typeof(item) !== 'object' ||
         typeof(item.name) !== 'string' ||
         typeof(item.price) !== 'number' ||
         typeof(item.quantity) !== 'number' ||
         typeof(item.color) !== 'string' ||
         typeof(item.discount) !== 'number'){
          //add conversion to numbers - all form data is strings
        return;
      }

      items.push({
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        color: item.color,
        discount: item.discount
      });
      localStorage.setItem('items', angular.toJson(items));

    }

    return {
      addItem: addItem,
      getAllItems: getAllItems
    };
  }

}());
