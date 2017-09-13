$(document).ready(function(){

    let score = 0;

    
    //Cat Category Questions and Answers

    const catCategory = [
        {
            question: 'This cat is Orange and Black',
            answer: 'Tiger',
            choices: 'Tiger, Lion, or Leopard',
            points: 100,
        },
        {
            question: 'This cat is the Fastest',
            answer: 'Cheetah',
            choices: 'Leopard, Lynx, or Cheetah',
            points: 200,
        },
        {
            question: 'This is the Largest Cat',
            answer: 'Siberian Tiger',
            choices: "Lion, Jaguar, Siberian Tiger, Cougar",
            points: 300,
        },
        {
            question: 'This is the smallest cat',
            answer:   'American Curl',
            choices: 'Cornish Rex, American Curl, Devon Rex, Munchkin',
            points: 400,
        },
        {
            question: 'This cat is found at altitudes between 9,800 & 17,000 feet',
            answer: 'Snow Leopard',
            choices: 'Mountain Lion, Snow Leopard, Cougar, Ocelot',
            points: 500,
        },

    ];

    //
    //Cat Prompts
    //
    $('.catsForOne').click(function($event) {
        $('.catBtnOne').attr("disabled", true);
        const input = prompt (catCategory[0].question, catCategory[0].choices);
        if (input === catCategory[0].answer){
            alert ('Correct!')
            score += catCategory[0].points;
            $('#score').html(score);
        } else{
            alert ('Incorrect!')
            score -= catCategory[0].points;
            $('#score').html(score);
        }       
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

    /*const birds = [
        {
            question
        }
        answerOne: "Largest",
        answerTwo: "Smallest",
        answerThree: "Fastest",
        answerFour: "Deadliest",
        answerFive: "Rarest",
    }

    ]*/
        

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


    //
    //Dog Prompts
    //
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

    //
    //Bird Prompts
    //
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

    //
    //Babies Prompt
    //
    $('.babiesForOne').click(function($event) {
        prompt (babies.src);
    });

    //
    //Baseball Prompt
    //
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



    //
    //Score
    //
   // let score = 0;
   // const scoreUpdate = () => {
      //  $('#score').html(score);
      // score += catCategory[0].points;
    //}

});



