$(document).ready(function(){

    //Answers for Cats
    const catOneHundy = { 
        answer: 'Orange and black',
        question: 'tiger',
    };

    const catTwoHundy = {
        answer: 'Fastest'
    };

    const catThreeHundy = {
        answer: 'Largest'
    };

    const catFourHundy = {
        answer: 'Smallest'
    };

    const catFiveHundy = {
        answer: 'Found in North America'
    };

    
    //Cat Prompts

    $('.catsForOne').click(function($event) {
        prompt (catOneHundy.answer );
    });

    $('.catsForTwo').click(function($event) {
        prompt (catTwoHundy.answer );
    });

    $('.catsForThree').click(function($event) {
        prompt (catThreeHundy.answer );
    });

    $('.catsForFour').click(function($event) {
        prompt (catFourHundy.answer );
    });

    $('.catsForFive').click(function($event) {
        prompt (catFiveHundy.answer );
    });

    $('.dogs').click(function($event) {
        
        console.log("clicked");
    });

    $('.cheetahs').click(function($event) {
        
        console.log("clicked");
    });

    $('.babies').click(function($event) {
        
        console.log("clicked");
    });

    $('.philosophy').click(function($event) {
        
        console.log("clicked");
    });

});