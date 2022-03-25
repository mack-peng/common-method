/*
 *比较两个对象是否有修改
 *
 */
function comparesContant(object_1, object_2) {
  if (
    Object.prototype.toString.call(object_1) !==
    Object.prototype.toString.call(object_2)
  ) {
    return false;
  }
  if (
    Object.prototype.toString.call(object_1) === "[object Date]" &&
    Object.prototype.toString.call(object_1) === "[object Date]"
  ) {
    return String(object_1.getTime()) === String(object_2.getTime());
  }
  let keys_1 = Object.keys(object_1).sort();
  let keys_2 = Object.keys(object_2).sort();
  if (keys_1.length !== keys_2.length) return false;
  for (let key of keys_1) {
    if (typeof object_1[key] === "object" && object_1[key] !== null) {
      if (!comparesContant(object_1[key], object_2[key])) return false;
    } else if (
      Object.prototype.toString.call(object_1[key]) === "[object Function]" ||
      Object.prototype.toString.call(object_1[key]) === "[object Symbol]"
    ) {
      if (String(object_1[key]) !== String(object_2[key])) return false;
    } else {
      if (!Object.is(object_1[key], object_2[key])) return false;
    }
  }
  return true;
}

