// inheritance using__proto__real world scenario

// parent Object
var user = {
    userName: "",
    password: "",
    isLoggedln: false,
    login: function() {
        if (this.userName == "system" && this.password == "manager") {
            this.isLoggedln = true;
            return true; //valid login
        } else {
            this.isLoggedln = false;
            return false; //inalid login
        }
    }
};

// child Object(every manager is the user)
var manager = {
    departmentName: "R&D",
    approveLeaves: function() {
        return "appove leaves";
    },
    dashboard: function() {
        return `${this.userName} dashboard`;
    }
};
manager.__proto__ = user;

manager.userName = "system";
manager.password = "manager";
console.log(manager.login());
console.log(manager.departmentName);
console.log(manager.approveLeaves());
console.log(manager.dashboard());