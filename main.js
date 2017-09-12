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

    //Dog Answers

    const dogOneHundy ={
        answer: "Most common"
    };

    const dogTwoHundy ={
        answer: "Largest"
    };

    const dogThreeHundy ={
        answer: "Smallest"
    };

    const dogFourHundy ={
        answer: "Police dog"
    };

    const dogFiveHundy ={
        answer: "Best Swimmer"
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


    //Dog Prompts

    $('.dogsForOne').click(function($event) {
        prompt (dogOneHundy.answer);
    });

    $('.dogsForTwo').click(function($event) {
        prompt (dogTwoHundy.answer);
    });

    $('.dogsForThree').click(function($event) {
        prompt (dogThreeHundy.answer);
    });

    $('.dogsForFour').click(function($event) {
        prompt (dogFourHundy.answer);
    });

    $('.dogsForFive').click(function($event) {
        prompt (dogFiveHundy.answer);
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