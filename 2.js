/**题目：验证回文字符串
 * 描述：给定一个字符串，验证它是否是回文串，只考虑数字和字母，可以忽略字母的大小写，在本题中，我们定义空字符串为有效的回文串
 * 示例1：输入: "A man, a plan, a canal: Panama"
         输出: true
 * 示例2：输入: "race a car"
         输出: false
 */

//利用ASCLL码来判断字符是否是数字或大小写的字母
var isNumberOrLetter = function(char) {
  if(char >= 48 && char <= 57) {              // 数字
    return true
  }else if(char >= 65 && char <= 90) {        // 大写字母
    return true
  }else if(char >=97 && char <= 122) {        // 小写字母
    return true
  }
  return false
}

// 解法一：筛选+判断，先将所有小写字母转成大写字母，转成数组后依次判断每个字符的ASCLL码，不符合就删除当前位置的元素，注意需要在删除后将i-1，否则会跳过其下一个字符的检查，将这个字符串整体转换完成后再反转判断是否相等。整体两步骤：1、格式化字符串（清除干扰的字符）2、反转后再判断是否相等
var isPalindrome1 = function(s) {
  s = s.toUpperCase()
  let arr = s.split('')
  for(let i=0;i<arr.length;i++) {
    if(!isNumberOrLetter(arr[i].charCodeAt())) {
      arr.splice(i,1)
      i --                                            // 不减一会跳过下一个字符的检查
    }
  }
  if(arr.join('') === arr.reverse().join('')) {
    return true
  }
  return false
};

// 双指针
var isPalindrome2 = function(s) {
  s = s.toUpperCase()
  let arr = s.split('')
  for(let i=0;i<arr.length;i++) {
    if(!isNumberOrLetter(arr[i].charCodeAt())) {
      arr.splice(i,1)
      i --                                            // 不减一会跳过下一个字符的检查
    }
  }
  let start = 0
  let end = arr.length - 1
  while(start < end) {
    if(arr[start] === arr[end]) {
      start ++
      end --
    }else {
      return false
    }
  }
  return true
};

// 直接在原字符串上直接判断

var isPalindrome3 = function(s) {
  s = s.toUpperCase()
  let start = 0
  let end = s.length - 1
  while(start < end) {
    if(!isNumberOrLetter(s[start].charCodeAt())) {
      console.log(s[start])
      start ++
    }else if(!isNumberOrLetter(s[end].charCodeAt())) {
      end --
    }else if(s[start] === s[end]) {
      start ++
      end --
    }else {
      return false
    }
  }
  return true
}

// 使用正则替换掉非数字字母的字符，再使用双指针

var isPalindrome4 = function(s) {
  s = s.replace(/[^0-9a-zA-Z]/g,"").toLowerCase()
  let l = 0, r = s.length - 1
  while(l < r ) {
    if(s[l] !== s[r]) {
      return false
    }
    l ++ 
    r --
  } 
  return true
}
console.log(isPalindrome4("racAe a car"))