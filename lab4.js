function mySearch(event) {
  var key = event.which || event.keyCode;
  var input = document.querySelector("#seach");
  if (key == 32 && input != "") {
    doSearch();
  }
}
