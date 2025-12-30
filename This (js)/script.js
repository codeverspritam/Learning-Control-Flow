// this keyword aak special keyword hai, kyuki jaise ki baaki saare keyword ki value ya unka nature same rehta hai this ki value ya nature badal jaata hai baat se ki aap usey kaha use kar rahe ho

//yahape this ki value method ke andar hai to this us object ko point karega jiske andar yeh method hai
{
    let obj = {
        nmae: "Jhon",
        sayName: function () {
            console.log(this);
        }
    }
    obj.sayName();
}
