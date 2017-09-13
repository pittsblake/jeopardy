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
    $('.cats').on('click', function($event) {
        $event.stopPropagation();
        $(this).remove();
        for (let i = 0; i < catCategory.length; i++){
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
        catCategory.splice(0, 1);
        { break; }
    }      
    });

/*$('.cats').click(function($event) {

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
    }); */


    //
    //Dog Questions and Answers
    //
    const dogCategory = [
        {
            question: "This breed is the most common in the U.S.A",
            answer: "Lab",
            choices: "Golden Retriever, Lab, Yorkshire Terrier, German Shepherd", 
            points: 100,         
         },
        {
            question: "This is the Largest breed",
            answer: "Great Dane",
            choices: "Scottish Deerhound, Great Dane, Bull Mastiff, Neapolitan Mastiff",
            points: 200,
        },
        {
            question: "This is the Smallet breed",
            answer: "Chihuahua",
            choices: "Maltese, Chihuahua, Brussels griffon, Pomeranian",
            points: 300,
        },
        {
            question: "This breed is commonly used a police dog",
            answer: "German Shepherd",
            choices: "Scottish Deerhound, German Shepherd, Bull Mastiff, Neapolitan Mastiff",
            points: 400,
        },
        {
            question: "This breed is known for there great swimming abilities",
            answer: "Newfoundland",
            choices: "Shih Tzu, Rhodesian Ridgeback, Newfoundland, Beagle",
            points: 500,
        },
    ];


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

});



