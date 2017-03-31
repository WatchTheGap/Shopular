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
      if (typeof(item) !== 'object') {
          //add conversion to numbers - all form data is strings
        return;
      }


      if(typeof(item.name) !== 'string' ||
      typeof(item.price) !== 'number' ||
      typeof(item.quantity) !== 'number') {
        return;
      }

      if(typeof(item.color) !== 'string' && item.color) {
        return;
      }
      if (typeof(item.discount) !== 'number' && item.color) {
        return;
      }

      if(!item.name || !item.price || !item.quantity) {
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
