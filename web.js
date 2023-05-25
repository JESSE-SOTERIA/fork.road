
gsap.registerPlugin(Flip);

const links = document.querySelectorAll('.navLinks a');
const activeLink = document.querySelector('.activeNav')
  //turn navs blue
links.forEach((link)=>{
    link.addEventListener('click',()=>{
        gsap.to(links, {color:"#252525"})
        if(document.activeElement === link){
            gsap.to(link,{color:"#f14e4b"})
        }
        //move the line
        const state = Flip.getState(activeLink)
        link.appendChild(activeLink)
        Flip.from(state, {
            duration:1.25,
            absolute:true,
            ease: "elastic.out(1,0.5)",
        })
    });  
});

//getcards
const cards = document.querySelectorAll('.card');
 cards.forEach((card,idx)=>{
 card.addEventListener('click',()=>{
  // ger card state
  const state = Flip.getState(cards)

  const activeCard = card.classList.contains('active');
  cards.forEach((otherCard,otherIdx)=>{
    otherCard.classList.remove('active')
    otherCard .classList.remove('is-inactive')
    if(!activeCard && idx !== otherIdx){
        otherCard.classList.add('.is-inactive')
    }
  })
  if(!activeCard) {card.classList.add('active')}
  Flip.from(state,{
    duration:1,
    ease: 'expo.out',
    absolute:true,
  });
 });
});




