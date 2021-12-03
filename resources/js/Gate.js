export default class Gate{

    constructor(user){
        this.user = user;
    }

    isAdmin(){
        // return this.user.type === 'admin';
        return true;
    }

    isUser(){
        // return this.user.type === 'user';
        return false;
    }

    isAdminOrUser(){
        if(this.user.type === 'user' || this.user.type === 'admin'){
            return true;
        }
    }
}
