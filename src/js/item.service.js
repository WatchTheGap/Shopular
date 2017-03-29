(function() {
  'use strict';

  angular.module('inventory').factory('ItemService', ItemService);

  function ItemService() {

    let items = JSON.parse(localStorage.getItem('items')) || [];

    function getAllItems() {
      return items;
    }
    
    function addNewItem() {

    }

    function updateAll() {

    }
  }

}());
