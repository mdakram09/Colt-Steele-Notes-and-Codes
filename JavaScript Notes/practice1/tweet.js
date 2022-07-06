const form = document.querySelector('#myform');
console.dir(form);

form.addEventListener('submit', function (e) {
  e.preventDefault();
  var uname = form.username.value;
  var tweets = form.tweet.value;

  var myh1 = document.querySelector('#myh1');

  var myul = document.querySelector('#myul');
  console.log(myul.childElementCount);

  const li = document.createElement('li');
  li.innerText = `the username is ${uname} and tweet is ${tweets}`;
  myul.appendChild(li);
  form.username.value = '';
  form.tweet.value = '';
});
