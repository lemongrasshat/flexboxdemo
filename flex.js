let justifyContentValue=document.querySelector("#jcontent");

let alignItemsValue=document.querySelector("#aitems");

let flexDirectionValue=document.querySelector("#fdir");
let i=1;
let classToBeEdited="flex-container";
const addButton=document.querySelector("#addItem");
let addButtonEventHandler=()=>
{
    return ()=>{
    let divClass=document.createElement("div");
    divClass.classList.add("item");
    let pTag=document.createElement("p");
    let text=document.createTextNode(`item ${i}`);
    pTag.appendChild(text);
    divClass.appendChild(pTag);
    let containerClass=document.querySelector(".flex-container");
    containerClass.appendChild(divClass);
        i++;
    }
}

let justifyHandler=()=>{

    let newValue=document.querySelector("#jcontent").value;
    let propertyFound=document.getElementsByClassName(classToBeEdited);
    propertyFound[0].style.justifyContent=newValue;
}
let alignItemsHandler=()=>{

    let newValue=document.querySelector("#aitems").value;
    let propertyFound=document.getElementsByClassName(classToBeEdited);
    propertyFound[0].style.alignItems=newValue;
}
let flexDirectionHandler=()=>{
    let newValue=document.querySelector("#fdir").value;
    let propertyFound=document.getElementsByClassName(classToBeEdited);
    propertyFound[0].style.flexDirection=newValue;
}

justifyContentValue.addEventListener("change",justifyHandler)
alignItemsValue.addEventListener("change",alignItemsHandler)
flexDirectionValue.addEventListener("change",flexDirectionHandler)

addButton.addEventListener('click',addButtonEventHandler())

