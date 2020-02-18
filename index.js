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

  if (btnText.innerHTML === "Read less") {
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
    moreText.style.fontSize = "20px";
  }
}
function toggleShare() {
  var x = document.getElementById("shareYourVoice");
  var y = document.getElementById("share");
  if (x.style.display === "none") {
    x.style.display = "inline-block";
    y.style.display = "none";
  } else {
    x.style.display = "none";
    x.reset();
  }
  return false;
}
function toggleButton(stanceInfo, stanceBtn) {
  var x = document.getElementById(stanceInfo);
  var y = document.getElementById(stanceBtn);
  if (x.style.display === "none") {
    x.style.display = "inline-block";
    y.style.display = "none";
  } else {
    x.style.display = "none";
    y.style.display = "inline";
  }
}

var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://charity.gofundme.com/o/en/campaign/myvote2020');
xhr.setRequestHeader("Content-Security-Policy", "frame-ancestors 'self'");
xhr.onreadystatechange= function() {
    if (this.readyState==4){
      var iframe = document.getElementById('goFundMe');
      iframe.srcdoc = this.responseText;
      iframe.src = "data:text/html;charset=utf-8," + escape(this.responseText);
      document.body.appendChild(iframe);
    }
};
