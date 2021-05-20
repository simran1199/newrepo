const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const sal = document.getElementById('sal');
const mnum = document.getElementById('mnum');
const letters= /^[A-Za-z]+$/;
const mob = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
const num = /^[0-9]+$/;
const errele = document.getElementById('err');

function seterr (id,err) {
    ele = document.getElementById(id);
    ele.getElementsByClassName('error')[0].innerHTML = err;
}

function validateform() {
    let rtrnval = true;
    //validation
    
    //for first name
    if(fname.value.length<3){
        seterr("Name","*First Name is too short (give atleast 3 letters)");
        rtrnval=false;
    }
    if(fname.value.length>20){
        seterr("Name","*First Name is too long");
        rtrnval=false;
    }
    if(!fname.value.match(letters)){
        seterr("Name","*Name should be in alphabets only");
        rtrnval=false;
    }
    //for last name
    if(lname.value.length<4){
        seterr("sirname","*Last Name is too short (give atleast 4 letters)");
        rtrnval=false;
    }
    if(lname.value.length>25){
        seterr("sirname","*Last Name is too long");
        rtrnval=false;
    }
    if(!lname.value.match(letters)){
        seterr("sirname","*Name should be in alphabets only");
        rtrnval=false;
    }
    //for mobile number
    if(!mnum.value.match(mob)){
        seterr("contact","*Please enter a valid mobile number in any of these formats XXX-XXX-XXXX , XXX.XXX.XXXX , XXX XXX XXXX")
    }
    //for salary
    if(!sal.value.match(num)){
        seterr("salary","*salary should be a numeric value")
        rtrnval = false;
    }
    if(sal.value<1000){
        seterr("salary","*Please give a valid salary amount (atleast 1000 Rupees)")
        rtrnval = false;
    }
    return rtrnval;

}
    


