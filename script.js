console.log("Script loaded");


// Stars

const stars = document.getElementById("stars");

if(stars){

    for(let i = 0; i < 200; i++){

        const star = document.createElement("div");

        star.className = "star";

        star.style.left = Math.random()*100 + "%";
        star.style.top = Math.random()*100 + "%";

        star.style.animationDelay = Math.random()*4 + "s";

        star.style.animationDuration =
        (3 + Math.random()*5) + "s";


        stars.appendChild(star);

    }

}



// Elements

const gift = document.getElementById("gift");

const letterScreen = document.getElementById("letterScreen");

const message = document.getElementById("message");

const surpriseBtn = document.getElementById("surpriseBtn");

const surpriseScreen = document.getElementById("surpriseScreen");

const music = document.getElementById("bgMusic");

const musicBtn = document.getElementById("musicBtn");

const cake = document.getElementById("cake");

const flame = document.getElementById("flame");

const wishMessage = document.getElementById("wishMessage");

const secretBtn = document.getElementById("secretBtn");


let playing = false;



// Letter

const text = 
`I just wanted to create something special for you ❤️

Thank you for being such an amazing friend.

You bring happiness and good memories into people's lives.

I hope your birthday is filled with laughter, love, and everything you wish for.

Never stop being the wonderful person you are ✨`;


let index = 0;



// Gift opening

if(gift){

gift.addEventListener("click",()=>{


    gift.classList.add("open");



    // Music

    if(music){

        music.volume = 0;

        music.play().then(()=>{


            let vol = 0;


            const fade = setInterval(()=>{


                if(vol < 1){

                    vol += 0.05;

                    music.volume = vol;

                }

                else{

                    clearInterval(fade);

                }


            },100);


            if(musicBtn)
            musicBtn.textContent="🔊";


            playing=true;


        }).catch(err=>{

            console.log("Music blocked:",err);

        });

    }




    if(typeof confetti !== "undefined"){

        confetti({

            particleCount:250,

            spread:120

        });

    }



    createHearts();



    setTimeout(()=>{


        document.querySelector(".hero").style.display="none";


        if(letterScreen)
        letterScreen.classList.add("show");


        typeMessage();


    },1200);



});


}





// Typewriter

function typeMessage(){

    if(message && index < text.length){

        message.textContent += text.charAt(index);

        index++;

        setTimeout(typeMessage,40);

    }

}





// Letter surprise button

if(surpriseBtn){

surpriseBtn.addEventListener("click",()=>{


    if(letterScreen)
    letterScreen.classList.remove("show");


    if(surpriseScreen)
    surpriseScreen.classList.add("show");



    confetti({

        particleCount:400,

        spread:160

    });



});


}





// Hearts

function createHearts(){


    for(let i=0;i<40;i++){


        const heart=document.createElement("div");


        heart.className="heart";

        heart.innerHTML="❤️";


        heart.style.left=Math.random()*100+"%";


        heart.style.fontSize =
        (15+Math.random()*30)+"px";


        heart.style.animationDuration =
        (3+Math.random()*4)+"s";


        document.body.appendChild(heart);



        setTimeout(()=>{

            heart.remove();

        },6000);


    }

}





// Music button

if(musicBtn){

musicBtn.addEventListener("click",()=>{


    if(!music) return;



    if(!playing){


        music.play();

        musicBtn.textContent="🔊";

        playing=true;


    }

    else{


        music.pause();

        musicBtn.textContent="🎵";

        playing=false;


    }


});


}





// Cake

if(cake){

cake.addEventListener("click",()=>{


    if(flame)
    flame.classList.add("off");



    if(wishMessage)

    wishMessage.textContent =
    "✨YOUR WISH HAS BEEN SENT TO THE STARS❤️";



    confetti({

        particleCount:200,

        spread:160

    });


});


}





// Final surprise

if(secretBtn){

secretBtn.addEventListener("click",()=>{


    const finalMessage=document.createElement("div");


    finalMessage.className="finalMessage";


    finalMessage.innerHTML=`

    <h1>
    ❤️ A Special Message ❤️
    </h1>


    <p>
    I hope your birthday is as amazing as you are.

    Thank you for being a wonderful person
    and bringing positive energy to people around you.

    Never forget how special you are ✨
    </p>

    `;


    document.body.appendChild(finalMessage);



    confetti({

        particleCount:500,

        spread:180

    });



});


}
setInterval(()=>{

    const star=document.createElement("div");

    star.innerHTML="✨";

    star.style.position="fixed";
    star.style.left=Math.random()*100+"%";
    star.style.top="0";

    star.style.fontSize="20px";

    star.style.animation="shoot 2s linear";

    document.body.appendChild(star);


    setTimeout(()=>{

        star.remove();

    },2000);


},3000);
