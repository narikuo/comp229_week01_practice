class StudentCard{
    constructor(name, id){
        this.name = name;
        this.id = id
    }
    showCard() {
        console.log("Name:" + this.name + ", Id:" + this.id);
    }

}

function showMyMsg(){
    console.log("Welcome to Toronto, it's my first Javascript");
}

export{StudentCard, showMyMsg}