const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


//-=---------==-=-----------------------------

//gsap

let backColor = document.querySelectorAll("[data-bgcolor]"); //속성data-bgcolor가 있는 요소들을 부름. -> 배열

console.log(backColor)

//item에는 배열의 요소들이 차례로 들어옴.
//index는 해당 item의 들어온요소들의 index번호가 들어옴.
//backColor.forEach((item, index)=>{} 

backColor.forEach((colorSection, i) => {
  let prevBg = i === 0 ? "" : backColor[i - 1].dataset.backColor;

  ScrollTrigger.create({
    trigger: colorSection,
    start: 'top 50%',
    end: 'bottom 5%',
    //markers: false,
    onEnter: () => gsap.to("#contents", {
      backgroundColor: colorSection.dataset.bgcolor
    }),
    onLeaveBack: () => gsap.to("#contents", {
      backgroundColor: prevBg
    })
  })
})

//사용자 속성을 만들때 data- 로 시작하고 data-임의의 단어를 사용하여 이것을 추출하는 방법은 dataset. 임의의 단어 를 사용할 수 있다.
// data- 로 시작하지 않는 사용자 속성은 getAttribute("사용자 속성이름")으로 사용해야함. data-를 사용했더라도 getAttribute방식을 사용할 수 있다.

//🚙🛺ex) data-purple = dataset.purple
//         purple = getAttribute("purple")


const horSection = gsap.utils.toArray('.port_desc .port')
//모든 요소들을 horSection이라는 변수에 배열로 저장한다. (gsap.utils.toArray)
//console.log(horSection)//Array(20)
const horiz = gsap.to(horSection, {
  //x: (- 94 * (horSection.length - 1)) + "%",
  xPercent: - 95 * (horSection.length -1),
  scrollTrigger: {
    trigger: '.port_desc',
    start: 'top 20%',
    end: '+=5000', //애니메이션이 시작되는 지점으로 부터 + 5000px 떨어진곳에 도착하면 애니메이션이 끝남.
    //markers: true,
    scrub: 1.5, //스크롤에 반응 false: 애니메이션 (숫자이용이 더 부드럽게 표현됨)
    pin: true //sticky처럼 화면 고정
  }
})
//gsap.to : 어떻게 되어라 