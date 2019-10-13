export function checkPermission(key) {
   //权限数组
   let array = [5, 11];
   let eq = array.indexOf(key);
   if (eq > -1) {
      return true;
   }
   else {
      return false;
   }
}