function checkCashRegister(price, cash, cid) {
 const units =  {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.10,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100
 };
 // total amount cash-in-drawer
let totalAmount = 0;
  for (let amount of cid){
    totalAmount += amount[1];     
  }
totalAmount = totalAmount*100/100
 let change = (cash - price)*100/100;
console.log(change) ; 
console.log(totalAmount);
let changeArr = [];
if (totalAmount < change){
 return {status: "INSUFFICIENT_FUNDS", change: []};
} else if (totalAmount === change) {
  return {status: "CLOSED", change: cid};
}else {
  cid = cid.reverse();

  for (let elem of cid) {
    let holder = [elem[0], 0]; 
    
    // when change became 0, cash-in-drawe reduce
    while ( change >= units[elem[0]] && elem[1] > 0){  
      change -= units[elem[0]];
      change = change.toFixed(2); 
      console.log(change) ; 
      elem[1] -= units[elem[0]];
      holder[1] += units[elem[0]];
       
    }

    if (holder[1] > 0) {
      changeArr.push(holder);
      
    }
  }
}

if (change > 0) {
  return {status: "INSUFFICIENT_FUNDS", change: []};
}
console.log(changeArr)
return {status: "OPEN", change: changeArr};

}
checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);