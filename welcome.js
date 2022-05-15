function getData(){
    let name = document.getElementById("name").textContent;
    console.log(name)
    localStorage.setItem("fname", name)
    document.getElementById("head1").textContent = name;
}