let extraField=[];
let countFields=0;

let fields = document.querySelector('.addInputField');
    
let addfields= document.querySelector('.addFields');
addfields.addEventListener('click', (e)=>{
        e.preventDefault();
        countFields++;
        let field= document.createElement('div');
        field.classList.add('Parent');
        let label= document.createElement('label');
        label.innerText='Field :';
        let Inp = document.createElement('input');
        Inp.type='text'; Inp.placeholder='fieldName'; Inp.classList.add('input'); Inp.style="width:155px;";
    
        let InnerDiv = document.createElement('div');
        InnerDiv.style="display:flex;"; InnerDiv.classList.add('Box');
        
        let Inp2 = document.createElement('input');
        Inp2.type ='text'; Inp2.placeholder="Your Message"; Inp2.classList.add('input');
        
        Inp2.addEventListener('blur',()=>{
            if(Inp.value!='' && Inp2.value!='' ){
                let field= Inp.value;
                let Value= Inp2.value;
                tempObj={[field]:Value};
                console.log(tempObj)
                extraField.push(tempObj);    
            }
        })
    
        let CloseBar = document.createElement('p');
        CloseBar.innerText='x';
        CloseBar.classList.add('remove'); CloseBar.style="background-color: crimson; color:white; width: 20px; height: 20px;justify-content: center;align-self: center; text-align: center; cursor:pointer;  border-radius: 20px; margin-left: 10px;";
        
        InnerDiv.appendChild(Inp2);
        InnerDiv.appendChild(CloseBar);
        field.appendChild(label);
        field.appendChild(Inp);
        field.appendChild(InnerDiv);
        fields.appendChild(field);
    
        CloseBar.addEventListener('click',()=>{
            countFields--;
            console.log('clicked');
            field.innerHTML='';
        })
        //addToArray(FieldName,FieldValue);
})


const output = document.querySelector('.output');
const form= document.querySelector('.submit');
form.addEventListener('click', function (e) {
    console.log('form pressed');
    e.preventDefault();
    let Name = $('#name').val();
    let Email = $('#Product').val();
    
    if(extraField.length!=null && countFields!=0){
        let obj={Name,Email,...extraField,countFields};
        console.log('FinalObject: ',obj);
        // alert();
        //output.innerHTML='Name: ' + obj.Name+' Email: '+ obj.Email +'\n extrafields: '+extraField[0]+countFields
    }
    else{
        console.log({Name, Email , countFields});
    }
});


