var navbarDefault = document.getElementsByClassName('navbar-default')[0];
document.getElementById('toggleBackground').addEventListener('click', function(){

	navbarDefault.classList.contains('whiteBackground') ?navbarDefault.classList.remove('whiteBackground'):	navbarDefault.classList.add('whiteBackground')
});
