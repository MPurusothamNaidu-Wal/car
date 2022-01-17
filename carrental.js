function add(){
    let arr=[]
    let ob={
        model: document.querySelector("#model").value,
        color: document.querySelector("#color").value,
        cost: document.querySelector("#cost").value,
        Id: document.querySelector("#Id").value,
    }
    arr.push(ob)
    let bj = JSON.stringify(arr);
    localStorage.setItem(document.querySelector("#model").value, bj);
}

        
