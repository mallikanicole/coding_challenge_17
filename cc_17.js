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
class SalesRep{//create salesrep class
    constructor(name){
        this.name=name;//add name property
        this.clients=[];//add client property
    }
    //add customer to client list
    addClient(customer){
        this.clients.push(customer);
    }
    //find client and get total spent
    getClientTotal(name){
        const client=this.clients.find(client=>client.name===name);
        return client ? client.getTotalSpent(): 0;
    }
}