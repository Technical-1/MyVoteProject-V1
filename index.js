function toggleDropdown() {
  document.getElementById('searchBox').classList.toggle('show');
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById('content');
  filter = input.value.toUpperCase();
  div = document.getElementById('searchBox');
  a = div.getElementsByTagName('a');
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = '';
    }else {
      a[i].style.display = 'none';
    }
  }
}

function readMore(dotNum, moreNum, seeMoreNum) {
  var dots = document.getElementById(dotNum);
  var moreText = document.getElementById(moreNum);
  var btnText = document.getElementById(seeMoreNum);

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
