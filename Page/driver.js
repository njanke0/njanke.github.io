
function newItem() {
  var desc = document.getElementById("inDesc").value;
  var cat = document.getElementById("inCat").value;
  var due = document.getElementById("inDue").value;


  var table = document.getElementById("toDo");
  var td = document.createElement("td");
  td.appendChild(document.createTextNode("- " + item));
  table.appendChild(td);
  document.getElementById("input").value = "";
  td.onclick = removeItem;
}


function images(){
	var imag = document.getElementsByClassName("images");
	var index;
	for (index = 0; index < imag.length; index++){
		imag[index].style.height = '170px';
		imag[index].style.width = '300px';

	}
}

/*Got this sort from web https://www.w3schools.com/howto/howto_js_sort_list.asp*/
function sortList() {
 var list, i, switching, b, shouldSwitch;
  list =document.getElementById("id01");
  switching = true;
  /* Makea loop that will continue until
  no switching has been done: */
 while (switching) {
    // Start by saying: no switching isdone:
    switching = false;
    b =list.getElementsByTagName("LI");
    // Loop through alllist items:
    for (i = 0; i < (b.length - 1); i++) {
     // Start by saying there should be no switching:
     shouldSwitch = false;
      /* Check if the nextitem should
      switch place with the currentitem: */
      if (b[i].innerHTML.toLowerCase() >b[i + 1].innerHTML.toLowerCase()) {
       /* If next item is alphabetically lower than current item,
       mark as a switch and break the loop: */
       shouldSwitch = true;
        break;
     }
    }
    if (shouldSwitch) {
     /* If a switch has been marked, make the switch
     and mark the switch as done: */
     b[i].parentNode.insertBefore(b[i + 1], b[i]);
     switching = true;
    }
  }
}