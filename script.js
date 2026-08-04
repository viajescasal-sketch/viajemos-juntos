document.addEventListener('DOMContentLoaded', function () {
var items = document.querySelectorAll('.faqItem');

items.forEach(function (item) {
var button = item.querySelector('button');
var answer = item.querySelector('.faqAnswer');

button.addEventListener('click', function () {
var wasOpen = item.classList.contains('open');

items.forEach(function (other) {
other.classList.remove('open');
other.querySelector('button').setAttribute('aria-expanded', 'false');
other.querySelector('.faqAnswer').setAttribute('aria-hidden', 'true');
});

if (!wasOpen) {
item.classList.add('open');
button.setAttribute('aria-expanded', 'true');
answer.setAttribute('aria-hidden', 'false');
}
});
});
});
