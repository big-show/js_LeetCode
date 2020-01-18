/*
 * @Author: ant
 * @Date: 2020-01-18 20:58:55
 * @LastEditors  : ant
 * @LastEditTime : 2020-01-18 21:23:54
 * 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。

设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。

注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
//我的解法 O(n) O(1)
/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function(prices) {
//    let minPeriodValue = prices[0]
//    let profit = 0;
//    let i=1;
//    while(i<prices.length)
//    {
//       while(prices[i]<prices[i-1]&&i<prices.length) 
//       {
//          minPeriodValue=prices[i];
//          i++;
//       }
//       while(prices[i]>=prices[i-1]&&i<prices.length){
//       i++;
//       }
//       profit+=prices[i-1]-minPeriodValue;
//    }
//    return profit
// }
console.log(maxProfit([1,2,3,4,5]))
//贪心解法 O(n) O(1)
var maxProfit = function(prices) {
  let profit = 0
  let length = prices.length
  for(let i =1;i<length;i++)
  {
     let stepProfit = prices[i]-prices[i-1]
     if(stepProfit>=0)
        profit+=stepProfit;   
  }
  return profit;
}