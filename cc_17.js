//Task 1
//create customer class
class Customer{
    constructor(name,email){
        this.name=name;//create property name
        this.email=email;//create property email
        this.purchaseHistory=[];//create property purchase history
    }
    //add purchase amount to history
    addPurchase(amount){
        this.purchaseHistory.push(amount);
    }
    //return total amount spent
    getTotalSpent(){
        return this.purchaseHistory.reduce((total,amount)=>total+amount,0);
    }
}
//Task 2
