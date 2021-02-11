let url = new URL(window.location.href);
if(url.hash) {
  var hash = url.hash.slice(1);
  console.log(hash);
  if(hash.startsWith("p")) {
    var id = hash.slice(1);
    window.location.href = "http://host3958.itelit.pro/luctisity/projects/" + id + ".php";
  } else if(hash.startsWith("u")) {
    var username = hash.slice(1);
    window.location.href = "http://host3958.itelit.pro/luctisity/users/" + username + ".php";
  } else if(hash.startsWith("s")) {
    var id = hash.slice(1);
    window.location.href = "http://host3958.itelit.pro/luctisity/studios/" + id + ".php";
  } else {
    alert('bad luct.tk url: unknown type "' + hash[0] + '".');
  }
}

function generateLink() {
  var type = document.getElementById("selectType").options.selectedIndex;
  if(type == 0) {
    var bruh = document.getElementById("idOrLinkThing").value;
    var generatedLink = "http://luct.tk/#p" + bruh;
    document.getElementById("generatedLink").value = generatedLink;
  } else if(type == 1) {
    var bruh = document.getElementById("idOrLinkThing").value;
    var generatedLink = "http://luct.tk/#u" + bruh;
    document.getElementById("generatedLink").value = generatedLink;
  } else if(type == 2) {
    var bruh = document.getElementById("idOrLinkThing").value;
    var generatedLink = "http://luct.tk/#s" + bruh;
    document.getElementById("generatedLink").value = generatedLink;
  }
  document.getElementById("mail").style.display = "block"
  document.getElementById("copied").style.display = "none"
  //prompt("link generated! here it is:", generatedLink);
}

//Below is Luni's code
function reset() {
	document.getElementById("mail").style.display = "none"
	document.getElementById("copied").style.display = "none"
}

function clip() {
	generatedLink.select();
	generatedLink.setSelectionRange(0, 99999)
	document.execCommand("copy");
	document.getElementById("copied").style.display = "block"
}