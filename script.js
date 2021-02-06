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
    if(isNaN(bruh)) {
      var generatedLink = "luct.tk/#p" + bruh.split("/").pop().slice(0, bruh.length() - 4);
      document.getElementById("generatedLink").value = generatedLink;
    } else {
      var generatedLink = "luct.tk/#p" + bruh;
      document.getElementById("generatedLink").value = generatedLink;
    }
  } else if(type == 1) {
    var bruh = document.getElementById("idOrLinkThing").value;
    if(bruh.includes("/")) {
      var generatedLink = "luct.tk/#u" + bruh.split("/").pop().slice(0, bruh.length() - 4);
      document.getElementById("generatedLink").value = generatedLink;
    } else {
      var generatedLink = "luct.tk/#u" + bruh;
      document.getElementById("generatedLink").value = generatedLink;
    }
  } else if(type == 2) {
    var bruh = document.getElementById("idOrLinkThing").value;
    if(isNaN(bruh)) {
      var generatedLink = "luct.tk/#s" + bruh.split("/").pop().slice(0, bruh.length() - 4);
      document.getElementById("generatedLink").value = generatedLink;
    } else {
      var generatedLink = "luct.tk/#s" + bruh;
      document.getElementById("generatedLink").value = generatedLink;
    }
  }
  prompt("link generated! here it is:", generatedLink);
}
