exports.Person = (firstName,lastName,emailAddress)=>{

    this.name =firstName;
    this.lastname =lastName;
    this.email = emailAddress 

    this.fullName = function() {
        console.log(this.name +' '+this.lastname+'\n');
    }

}