//get Rock Paper and Scissors classes
let Rock=document.querySelector('.Rock'),
    Paper=document.querySelector('.Paper'),
    Scissors=document.querySelector('.Scissors'),
    content=document.querySelector('.choices'),
    result=document.querySelector('.Result'),
    container=document.querySelector('.content'),
    Player=document.querySelector('#player'),
    Com=document.querySelector('#Com'),
    random=0;
let Rock_ball=document.createElement('div'),
    Rock_ball_text=document.createElement('p'),
    Paper_ball=document.createElement('div'),
    Paper_ball_text=document.createElement('p'),
    Scissors_ball=document.createElement('div'),
    Scissors_ball_text=document.createElement('p'),
    try_button=document.createElement('button');
Rock_ball.classList.add('Rock_ball');
Rock_ball.appendChild(Rock_ball_text);
Rock_ball_text.textContent='Rock';
Paper_ball.classList.add('Paper_ball');
Paper_ball.appendChild(Paper_ball_text);
Paper_ball_text.textContent='Paper';
Scissors_ball.classList.add('Scissors_ball');
Scissors_ball.appendChild(Scissors_ball_text);
Scissors_ball_text.textContent='Scissors';
try_button.innerHTML='Try again?';
try_button.addEventListener('click',()=>{
    content.innerHTML='';
    result.innerHTML='';
    try_button.remove();
    content.appendChild(Rock);
    content.appendChild(Paper);
    content.appendChild(Scissors);
})
function reset_class(){
    Rock_ball.classList='Rock_ball';
    Scissors_ball.classList='Scissors_ball';
    Paper_ball.classList='Paper_ball';
    result.classList='Result';
}
Rock.addEventListener('click',()=>{
    content.innerHTML='';
    reset_class();
    random=Math.floor(Math.random()*3)+1;
        if (random===1){
            Rock_ball.classList.add('win_animation_player');
            Scissors_ball.classList.add('lose_animation_com');
            content.appendChild(Rock_ball);
            content.appendChild(Scissors_ball);
            Scissors_ball.addEventListener('animationend',function Rock_win(){
                content.removeChild(Scissors_ball);
                result.classList.add('win_font');
                result.innerHTML='You win';
                container.appendChild(try_button);
                Scissors_ball.removeEventListener('animationend',Rock_win);
                Player.innerHTML=parseInt(Player.innerHTML)+1;
            });
        }
        else if(random===2){
            Rock_ball.classList.add('lose_animation_player');
            Paper_ball.classList.add('win_animation_com');
            content.appendChild(Rock_ball);
            content.appendChild(Paper_ball);
            Paper_ball.addEventListener('animationend',function Rock_lose(){
                content.removeChild(Rock_ball);
                result.classList.add('lose_font');
                result.innerHTML='You lose';
                container.appendChild(try_button);
                Paper_ball.removeEventListener('animationend',Rock_lose);
                Com.innerHTML=parseInt(Com.innerHTML)+1;
            });
        }
        else{
            let Rock_ball_1=Rock_ball.cloneNode(true);
            let Rock_ball_2=Rock_ball.cloneNode(true);
            Rock_ball_1.classList.add('draw_animation_left');
            Rock_ball_2.classList.add('draw_animation_right');
            content.appendChild(Rock_ball_1);
            content.appendChild(Rock_ball_2);
            Rock_ball_1.addEventListener('animationend',()=>{
                result.classList.add('draw_font');
                result.innerHTML='It\'s a draw';
                container.appendChild(try_button);
            })
        }
})
Paper.addEventListener('click',()=>{
    content.innerHTML='';
    reset_class();
    random=Math.floor(Math.random()*3)+1;
        if (random===1){
            Paper_ball.classList.add('win_animation_player');
            Rock_ball.classList.add('lose_animation_com');
            content.appendChild(Paper_ball);
            content.appendChild(Rock_ball);
            Rock_ball.addEventListener('animationend',function Paper_win(){
                content.removeChild(Rock_ball);
                result.classList.add('win_font');
                result.innerHTML='You win';
                container.appendChild(try_button);
                Rock_ball.removeEventListener('animationend',Paper_win);
                Player.innerHTML=parseInt(Player.innerHTML)+1;
            });
        }
        else if(random===2){
            Paper_ball.classList.add('lose_animation_player');
            Scissors_ball.classList.add('win_animation_com');
            content.appendChild(Paper_ball);
            content.appendChild(Scissors_ball);
            Scissors_ball.addEventListener('animationend',function Scissors_lose(){
                content.removeChild(Paper_ball);
                result.classList.add('lose_font');
                result.innerHTML='You lose';
                container.appendChild(try_button);
                Scissors_ball.removeEventListener('animationend',Scissors_lose);
                Com.innerHTML=parseInt(Com.innerHTML)+1;
            });
        }
        else{
            let Paper_ball_1=Paper_ball.cloneNode(true);
            let Paper_ball_2=Paper_ball.cloneNode(true);
            Paper_ball_1.classList.add('draw_animation_left');
            Paper_ball_2.classList.add('draw_animation_right');
            content.appendChild(Paper_ball_1);
            content.appendChild(Paper_ball_2);
            Paper_ball_1.addEventListener('animationend',()=>{
                result.classList.add('draw_font');
                result.innerHTML='It\'s a draw';
                container.appendChild(try_button);
            })
        }
})
Scissors.addEventListener('click',()=>{
    content.innerHTML='';
    reset_class();
    random=Math.floor(Math.random()*3)+1;
        if (random===1){
            Scissors_ball.classList.add('win_animation_player');
            Paper_ball.classList.add('lose_animation_com');
            content.appendChild(Scissors_ball);
            content.appendChild(Paper_ball);
            Paper_ball.addEventListener('animationend',function Scissors_win(){
                content.removeChild(Paper_ball);
                result.classList.add('win_font');
                result.innerHTML='You win';
                container.appendChild(try_button);
                Paper_ball.removeEventListener('animationend',Scissors_win);
                Player.innerHTML=parseInt(Player.innerHTML)+1;
            });
        }
        else if(random===2){
            Scissors_ball.classList.add('lose_animation_player');
            Rock_ball.classList.add('win_animation_com');
            content.appendChild(Scissors_ball);
            content.appendChild(Rock_ball);
            Rock_ball.addEventListener('animationend',function Scissors_lose(){
                content.removeChild(Scissors_ball);
                result.classList.add('lose_font');
                result.innerHTML='You lose';
                container.appendChild(try_button);
                Rock_ball.removeEventListener('animationend',Scissors_lose);
                Com.innerHTML=parseInt(Com.innerHTML)+1;
            });
        }
        else{
            let Scissors_ball_1=Scissors_ball.cloneNode(true);
            let Scissors_ball_2=Scissors_ball.cloneNode(true);
            Scissors_ball_1.classList.add('draw_animation_left');
            Scissors_ball_2.classList.add('draw_animation_right');
            content.appendChild(Scissors_ball_1);
            content.appendChild(Scissors_ball_2);
            Scissors_ball_1.addEventListener('animationend',()=>{
                result.classList.add('draw_font');
                result.innerHTML='It\'s a draw';
                container.appendChild(try_button);
            })
        }
})
