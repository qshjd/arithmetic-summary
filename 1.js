/**题目：最长不含重复的子字符串（剑指Offer48）
 * 描述：请从字符串中找出一个最长的不包含重复字符的子字符串，计算该最长子字符串的长度。
 * 示例1：输入: "abcabcbb"
   输出: 3 
   解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 * 示例2：输入: "bbbbb"
   输出: 1
   解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
 * 示例3：输入: "pwwkew"
   输出: 3
   解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
   请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 */

// 解法一：滑动窗口

var lengthOfLongestSubstring = function(s) {
  const len = s.length
  let maxLen = 0
  let temp = ""
  for(let i=0;i<len;i++) {
    if(temp.indexOf(s[i]) === -1) {
      temp += s[i]
      maxLen = Math.max(maxLen, temp.length)
    } else {
      temp = temp.slice(temp.indexOf(s[i]) + 1)
      temp += s[i]
    }
  }
  return maxLen
};

console.log(lengthOfLongestSubstring("bbbbb"))
