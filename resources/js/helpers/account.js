import Stores from '@/stores'

export default class AccountHelper {

  static validAuth() {
    var token =  Stores.getters['Account/getToken'];
    var expiredAt = Stores.getters['Account/getExpiredAt']
    if (token != null && expiredAt != null && AccountHelper.validRangeTimeToExpired()) {
      return true;
    }
    return false
  }

  static validRangeTimeToExpired() {
    var expiredAt, now, stillLoginMinutes;
    expiredAt = Stores.getters['Account/getExpiredAt']
    if (!expiredAt) 
    {
      return false;
    }
    now = Date.now(); // miliseconds
    stillLoginMinutes = expiredAt - now;

    if (stillLoginMinutes < 0) {
      return false;
    } 
    return true
  }
}