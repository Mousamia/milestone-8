/* eslint-disable no-unused-vars */
// manage localstorge
const addToLoclStorge = id => {
    const kuntity = localStorage.getItem(id);
    console.log(kuntity);
    console.log(typeof(kuntity));
    if(kuntity == 1){
        console.log("poimout")
    }
    else 
    console.log("dhr mi dhrin");
    localStorage.setItem(id, 1);
}

export { addToLoclStorge };