

////////Scrol//////////////////////////
const anchors = document.querySelectorAll('.scroll-to');

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()

        const blockID = anchor.getAttribute('href')

        document.querySelector(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}

///////Notification//////////////////////
const copiLink = document.getElementById('header-link');
const notification = document.querySelector('.notification');
console.log(copiLink);

copiLink.addEventListener("click", function() {
  let link = window.location.href;
  notification.classList.add("notification._active");
  navigator.clipboard.writeText(link);
    
    setTimeout(() => {
      notification.classList.remove('_active')
  }, 3000);
});


