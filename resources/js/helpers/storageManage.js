 /* eslint-disable */
export default class StorageManageHelper {
  /**
   * Set local storage with list Item is Object/Array
   * 
   * @param {listItem} array object
   * @void
   */
  static setStorage(listItem) {
    if (typeof listItem != 'object' && typeof listItem != 'array' ) {
      throw new Error("SetStorage function only accepts 'array' & 'object' type!");
    }
    if (Object.entries(listItem).length > 0) {
      for (const prop in listItem) {
        localStorage.setItem(prop, listItem[prop]);
      }
    }
  }

  /**
   * Get local storage with name
   * 
   * @param {nameStore} string
   * @return {string|null}
   * 
   */
  static getStorage(nameStore) {
    if (typeof nameStore != 'string') {
      throw new Error("GetStorage function only accepts 'string' type!");
    }
    if (nameStore) {
      var data = localStorage.getItem(nameStore);
      return data
    }
    return null;
  }

  /**
   * Remove local storage with name
   * 
   * @param {nameStore} nameStore 
   * @void 
   */
  static removeStorage(nameStore) {
    if (typeof nameStore != 'string' || nameStore instanceof String == false) {
      throw new Error("GetStorage function only accepts 'string' type!");
    }
    if (nameStore) {
      localStorage.removeItem(nameStore)
    }
  } 
  

  /**
   * Clean all local storage
   * 
   * @void
   */

  static cleanAll() {
    localStorage.clear()
  }
}