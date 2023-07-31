function Person  (firstName,lastName,emailAddress){

    this.name =firstName;
    this.lastname =lastName;
    this.email = emailAddress 

}

Person.prototype.fullName = function() {
    console.log(this.name +' '+this.lastname+'\n');
}

module.exports =Person