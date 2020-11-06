function SearchAlgoritm() {
    var filter, ul, li, a, i;
    input = document.getElementById("search");
	console.log(input.value);
    filter = input.value.toUpperCase();
    ul = document.getElementById("menu");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}  

document.getElementById("search").addEventListener('input', SearchAlgoritm);