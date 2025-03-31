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


//Task 3 
// create VIP customer class
class VIPCustomer extends Customer{
    constructor(name,email,vipLevel){
        super(name,email);
        this.vipLevel=vipLevel;//create viplevel property
    }
    //log total spent with bonus
    getTotalSpent(){
        const totalSpent=super.getTotalSpent();
        return totalSpent *1.1
    }
}


//Task 4
//build client report system
const customers=[
    new Customer("Stevie Nicks","stevie.nicks@gmail.com"),
    new Customer("Billy Joel","billy.joel@gmail.com"),
    new VIPCustomer("Carole King","carole.king@gmail.com","Platinum")
]
//add customer purchases
customers[0].addPurchase(100)
customers[1].addPurchase(800)
customers[2].addPurchase(1200)

//add salesrep
const salesrep=new SalesRep("Madeleine Petsch")
customers.forEach(customer=>salesrep.addClient(customer));

//calculate total revenue
const totalRevenue=customers.reduce((total,customer)=>total+customer.getTotalSpent(),0).toFixed(2);

//filter customers who spent over 500
const highValueCustomer=customers.filter(customer=>customer.getTotalSpent()>500).map(c=>`${c.name}:$${c.getTotalSpent().toFixed(2)}`)

//create array of customer names and total spent
const customerSummary=customers.map(c=>`${c.name}:$${c.getTotalSpent().toFixed(2)}`)

//log revenue to console
console.log("Total Revenue:",totalRevenue);
//log high val customers
console.log("High Value Customers:",highValueCustomer);
//log customer summary
console.log("Customer Summary",customerSummary);