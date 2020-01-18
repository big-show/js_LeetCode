/*
 * @Author: ant
 * @Date: 2020-01-18 20:29:47
 * @LastEditors  : ant
 * @LastEditTime : 2020-01-18 20:57:30
 */
 /**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;
    let minValue = prices[0]
    for(let i =1;i<prices.length;i++)
    {
        if(prices[i]-prices[i-1]>=0){
            profit = Math.max(profit,prices[i]-minValue)
        }
        else{
            minValue = Math.min(prices[i],minValue)
        }
    }
    return profit

};
console.log(maxProfit(
    [7,1,5,3,6,4]))