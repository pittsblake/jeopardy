$(document).ready(function(){

$('.newGame').click(function($event){
    location.reload();
});

function replaceText() {
let msg = prompt ('What is your name?');
let name = msg;
$('.welcome').html(`Welcome ${name} lets play!`).css({"color":"blue","font-size":"35px"});
}
replaceText();

let score = 0;

//
//Cat Cat Modals
//

//Cat Question 1
    $('.catBtnOne').click(function($event) {
        $(this).remove();        
        $('#modal1').modal();  
    });

    $('.yes').click(function($event){
        alert('Correct!');
        score += 100;
        $('#score').html(score);
    });

    $('.no').click(function($event){
        alert('Incorrect!');
        score -= 100;
        $('#score').html(score);
    });


//Cat Question 2
$('.catBtnTwo').click(function($event) {
    $(this).remove();        
    $('#modal6').modal();  
});

$('.yesCat2').click(function($event){
    alert('Correct!');
    score += 200;
    $('#score').html(score);
});

$('.noCat2').click(function($event){
    alert('Incorrect!');
    score -= 200;
    $('#score').html(score);
});


//Cat Question 3
$('.catBtnThree').click(function($event) {
    $(this).remove();        
    $('#modal11').modal();  
});

$('.yesCat3').click(function($event){
    alert('Correct!');
    score += 300;
    $('#score').html(score);
});

$('.noCat3').click(function($event){
    alert('Incorrect!');
    score -= 300;
    $('#score').html(score);
});


//Cat question 4
$('.catBtnFour').click(function($event) {
    $(this).remove();        
    $('#modal16').modal();  
});

$('.yesCat4').click(function($event){
    alert('Correct!');
    score += 400;
    $('#score').html(score);
});

$('.noCat4').click(function($event){
    alert('Incorrect!');
    score -= 400;
    $('#score').html(score);
});


//Cat question 5
$('.catBtnFive').click(function($event) {
    $(this).remove();        
    $('#modal21').modal();  
});

$('.yesCat5').click(function($event){
    alert('Correct!');
    score += 500;
    $('#score').html(score);
});

$('.noCat5').click(function($event){
    alert('Incorrect!');
    score -= 500;
    $('#score').html(score);
});


//
//Dog Modals
//


//Dog Question 1
$('.dogBtnOne').click(function($event) {
    $(this).remove();        
    $('#modal2').modal();  
});

$('.yesDog1').click(function($event){
    alert('Correct!');
    score += 100;
    $('#score').html(score);
});

$('.noDog1').click(function($event){
    alert('Incorrect!');
    score -= 100;
    $('#score').html(score);
});


//Dog Question 2
$('.dogBtnTwo').click(function($event) {
    $(this).remove();        
    $('#modal7').modal();  
});

$('.yesDog2').click(function($event){
    alert('Correct!');
    score += 200;
    $('#score').html(score);
});

$('.noDog2').click(function($event){
    alert('Incorrect!');
    score -= 200;
    $('#score').html(score);
});



//Dog Question 3
$('.dogBtnThree').click(function($event) {
    $(this).remove();        
    $('#modal12').modal();  
});

$('.yesDog3').click(function($event){
    alert('Correct!');
    score += 300;
    $('#score').html(score);
});

$('.noDog3').click(function($event){
    alert('Incorrect!');
    score -= 300;
    $('#score').html(score);
});


//Dog Question 4
$('.dogBtnFour').click(function($event) {
    $(this).remove();        
    $('#modal17').modal();  
});

$('.yesDog4').click(function($event){
    alert('Correct!');
    score += 400;
    $('#score').html(score);
});

$('.noDog4').click(function($event){
    alert('Incorrect!');
    score -= 400;
    $('#score').html(score);
});


//Dog Question 5
$('.dogBtnFive').click(function($event) {
    $(this).remove();        
    $('#modal22').modal();  
});

$('.yesDog5').click(function($event){
    alert('Correct!');
    score += 500;
    $('#score').html(score);
});

$('.noDog5').click(function($event){
    alert('Incorrect!');
    score -= 500;
    $('#score').html(score);
});

//
//Bird Modals
//


//Bird Question 1
$('.birdBtnOne').click(function($event) {
    $(this).remove();        
    $('#modal3').modal();  
});

$('.yesBird1').click(function($event){
    alert('Correct!');
    score += 100;
    $('#score').html(score);
});

$('.noBird1').click(function($event){
    alert('Incorrect!');
    score -= 100;
    $('#score').html(score);
});


//Bird Question 2
$('.birdBtnTwo').click(function($event) {
    $(this).remove();        
    $('#modal8').modal();  
});

$('.yesBird2').click(function($event){
    alert('Correct!');
    score += 200;
    $('#score').html(score);
});

$('.noBird2').click(function($event){
    alert('Incorrect!');
    score -= 200;
    $('#score').html(score);
});


//Bird Question 3
$('.birdBtnThree').click(function($event) {
    $(this).remove();        
    $('#modal13').modal();  
});

$('.yesBird3').click(function($event){
    alert('Correct!');
    score += 300;
    $('#score').html(score);
});

$('.noBird3').click(function($event){
    alert('Incorrect!');
    score -= 300;
    $('#score').html(score);
});

//Bird Question 4
$('.birdBtnFour').click(function($event) {
    $(this).remove();        
    $('#modal18').modal();  
});

$('.yesBird4').click(function($event){
    alert('Correct!');
    score += 400;
    $('#score').html(score);
});

$('.noBird4').click(function($event){
    alert('Incorrect!');
    score -= 400;
    $('#score').html(score);
});

//Bird Question 4
$('.birdBtnFive').click(function($event) {
    $(this).remove();        
    $('#modal23').modal();  
});

$('.yesBird5').click(function($event){
    alert('Correct!');
    score += 500;
    $('#score').html(score);
});

$('.noBird5').click(function($event){
    alert('Incorrect!');
    score -= 500;
    $('#score').html(score);
});

//
// Nick Cage Question and answer array
//
const nickCageCategory = [
    {
        points: 100,
    },
    {
        points: 200,
    },
    {
        points: 300,
    },
    {
        points: 400,
    },
    {
        points: 500,
    }
];

//
//Nick Cage Prompt
//

//Nick 100
$('.nickBtnOne').click(function($event) {
    $(this).remove();        
    $('#modal4').modal();  
});

$('.yesNick1').click(function($event){
    alert('Correct!');
    score += nickCageCategory[0].points;
    $('#score').html(score);
});

$('.noNick1').click(function($event){
    alert('Incorrect!');
    score -= nickCageCategory[0].points;
    $('#score').html(score);
});

//Nick 200
$('.nickBtnTwo').click(function($event) {
    $(this).remove();        
    $('#modal9').modal();  
});

$('.yesNick2').click(function($event){
    alert('Correct!');
    score += nickCageCategory[1].points;
    $('#score').html(score);
});

$('.noNick2').click(function($event){
    alert('Incorrect!');
    score -= nickCageCategory[1].points;
    $('#score').html(score);
});


//Nick 300

$('.nickBtnThree').click(function($event) {
    $(this).remove();        
    $('#modal14').modal();  
});

$('.yesNick3').click(function($event){
    alert('Correct!');
    score += nickCageCategory[2].points;
    $('#score').html(score);
});

$('.noNick3').click(function($event){
    alert('Incorrect!');
    score -= nickCageCategory[2].points;
    $('#score').html(score);
});

//Nick 400

$('.nickBtnFour').click(function($event) {
    $(this).remove();        
    $('#modal19').modal();  
});

$('.yesNick4').click(function($event){
    alert('Correct!');
    score += nickCageCategory[3].points;
    $('#score').html(score);
});


//Nick 500

$('.nickBtnFive').click(function($event) {
    $(this).remove();        
    $('#modal24').modal();  
});

$('.yesNick5').click(function($event){
    alert('Correct!');
    score += nickCageCategory[4].points;
    $('#score').html(score);
});

$('.noNick5').click(function($event){
    alert('Incorrect!');
    score -= nickCageCategory[4].points;
    $('#score').html(score);
});


//
//Baseball Modals
//

//Baseball Question 1

$('.baseballBtnOne').click(function($event) {
    $(this).remove();        
    $('#modal5').modal();  
});

$('.yesBaseball1').click(function($event){
    alert('Correct!');
    score += 100;
    $('#score').html(score);
});

$('.noBaseball1').click(function($event){
    alert('Incorrect!');
    score -= 100;
    $('#score').html(score);
});


//Baseball Question 2

$('.baseballBtnTwo').click(function($event) {
    $(this).remove();        
    $('#modal10').modal();  
});

$('.yesBaseball2').click(function($event){
    alert('Correct!');
    score += 200;
    $('#score').html(score);
});

$('.noBaseball2').click(function($event){
    alert('Incorrect!');
    score -= 200;
    $('#score').html(score);
});

//Baseball Question 3

$('.baseballBtnThree').click(function($event) {
    $(this).remove();        
    $('#modal15').modal();  
});

$('.yesBaseball3').click(function($event){
    alert('Correct!');
    score += 300;
    $('#score').html(score);
});

$('.noBaseball3').click(function($event){
    alert('Incorrect!');
    score -= 300;
    $('#score').html(score);
});

//Baseball Question 4

$('.baseballBtnFour').click(function($event) {
    $(this).remove();        
    $('#modal20').modal();  
});

$('.yesBaseball4').click(function($event){
    alert('Correct!');
    score += 400;
    $('#score').html(score);
});

$('.noBaseball4').click(function($event){
    alert('Incorrect!');
    score -= 400;
    $('#score').html(score);
});

//Baseball Question 5

$('.baseballBtnFive').click(function($event) {
    $(this).remove();        
    $('#modal25').modal();  
});

$('.yesBaseball5').click(function($event){
    alert('Correct!');
    score += 500;
    $('#score').html(score);
});

$('.noBaseball5').click(function($event){
    alert('Incorrect!');
    score -= 500;
    $('#score').html(score);
});
    


});
