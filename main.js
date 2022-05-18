const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const header =$('header');
const topLink = $('.top-link')
const menu = $('#menu-icon')
const nav =  $('.navlist')


window.addEventListener('scroll',function(){
    header.classList.toggle('sticky',window.scrollY > 0)
    const scrollHeight = window.pageYOffset
    // console.log(scrollHeight);
    if(scrollHeight>500){
        topLink.classList.add('show-link')
    }
    else{
        topLink.classList.remove('show-link')
    }
})
menu.addEventListener('click',function(){
   nav.classList.toggle('active');
   
   

})
window.onscroll = () =>{
    nav.classList.remove('active')
}
const sr = ScrollReveal({
    distance : '45px',
    duration:2700,
    reset:true,
})
sr.reveal('.home-text',{delay:350,origin:'left'})
sr.reveal('.home-img',{delay:350,origin:'right'})
sr.reveal('.about-img',{delay:350,origin:'left'})
sr.reveal('.about-text',{delay:350,origin:'right'})
sr.reveal('.sub-service,.portfolio,.service,.cta,.contact',{delay:200,origin:'bottom'})
const scrollLinks = document.querySelectorAll('.scroll');
scrollLinks.forEach(function(link){
    link.addEventListener('click', function(e){
        e.preventDefault();
        const id = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        const navHeight = nav.getBoundingClientRect().height;
        let position = element.offsetTop - navHeight;
        window.scrollTo({
            left:0,
            top:position,
        })
        console.log(id);
    })
})
const song = document.getElementById('song');
const playBtn = $('.top-link');
let isPlaying = true;
playBtn.addEventListener('click', function(e){
    if(isPlaying){
        song.play();
        playBtn.innerHTML = `<i class="fa-solid fa-pause"></i>`
        isPlaying = false
    }
    else{
        song.pause();
        isPlaying = true;
        playBtn.innerHTML = `<i class="fa-solid fa-play"></i>`
    }
    
})




