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

    //Bird answers

    const birds = {
        answerOne: "Largest",
        answerTwo: "Smallest",
        answerThree: "Fastest",
        answerFour: "Deadliest",
        answerFive: "Rarest",
    }

    //Baby Answers
    
    const babies = {
        src: "https://i.pinimg.com/736x/fc/e1/06/fce106e4ece99c2fc370c21eac5d36b9.jpg",
        //answerOne: imgOne,
    }


    //Baseball Answers
    const baseball = {
        answerOne: "Oldest Team",
        answerTwo: "Most World Series Championships",
        answerThree: "Most Wins",
        answerFour: "Newest Team",
        answerFive: "Most Upsets",
    }

    
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


    //Bird Prompts

    $('.birdsForOne').click(function($event) {
        prompt (birds.answerOne);
    });

    $('.birdsForTwo').click(function($event) {
        prompt (birds.answerTwo);
    });

    $('.birdsForThree').click(function($event) {
        prompt (birds.answerThree);
    });

    $('.birdsForFour').click(function($event) {
        prompt (birds.answerFour);
    });

    $('.birdsForFive').click(function($event) {
        prompt (birds.answerFive);
    });

    //Babies Prompt

    $('.babiesForOne').click(function($event) {
        prompt (babies.src);
    });


    //Baseball Prompt

    $('.baseballForOne').click(function($event) {
        prompt (baseball.answerOne);
    });

    $('.baseballForTwo').click(function($event) {
        prompt (baseball.answerTwo);
    });

    $('.baseballForThree').click(function($event) {
        prompt (baseball.answerThree);
    });

    $('.baseballForFour').click(function($event) {
        prompt (baseball.answerFour);
    });

    $('.baseballForFive').click(function($event) {
        prompt (baseball.answerFive);
    });

});