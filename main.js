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
    //Bird Question and Answer Array
    //

    const birdCategory = [
        {
            question: 'This is the largest living bird',
            answer: 'Ostrich',
            choices: 'Type: Ostrich, Cassowary, Emu, Greater Rhea',
            points: 100,
        },
        {
            question: 'This is the smallest living bird',
            answer: 'Bee Hummingbird',
            choices: 'Type: Goldcrest, Lesser Goldfinch, Bee Hummingbird, Weebill',
            points: 200,
        },
        {
            question: 'This is fastest living bird',
            answer: 'Peregrine falcon',
            choices: "Type: Golden eagle, Albatross, Peregrine falcon, Gryrafalcon",
            points: 300,
        },
        {
            question: 'This is the deadliest bird',
            answer:   'Cassowary',
            choices: 'Type: Cassowary, Ostrich, Emu, Lammergeier',
            points: 400,
        },
        {
            question: 'This is the rarest bird',
            answer: 'Kagu',
            choices: 'Type: Kagu, Crow, Eagle, Falcon',
            points: 500,
        },


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
    // Nick Cage Question and answer array
    //
    const nickCageCategory = [
        {
            question: 'This man and Tom Brady have a combined 5 Super Bowl victories',
            answer: 'Nick Cage',
            choices: 'Type: Nick Cage, N/a, N/a, N/a',
            points: 100,
        },
        {
            question: 'This man has an extra toe somewhere you wouldnt expect',
            answer: 'Nick Cage',
            choices: 'Type: Nick Cage, N/a, N/a, N/a',
            points: 200,
        },
        {
            question: 'This man dresses up like a mermaid in his free time',
            answer: 'Nick Cage',
            choices: "Type: Nick Cage, N/a, N/a, N/a",
            points: 300,
        },
        {
            question: 'This man rocks',
            answer:   'Not Nick Cage',
            choices: 'Type: Not Nick Cage, N/a, N/a, N/a',
            points: 400,
        },
        {
            question: 'My thumb looks better than...',
            answer: 'Nick Cage',
            choices: 'Type: Nick Cage, N/a, N/a, N/a',
            points: 500,
        };

    //
    //Nick Cage Prompt
    //
    $('.babiesForOne').click(function($event) {
        prompt (babies.src);
    });


    //
    //Baseball Questions and Answers array
    //
    const baseballCategory = [
        {
            question: 'This is the oldest team',
            answer: 'Braves',
            choices: 'Type: Braves, Yankees, Red Sox, Cubs',
            points: 100,
        },
        {
            question: 'This team has the most World Series Championships',
            answer: 'Yankees',
            choices: 'Type: Red Sox, Cubs, Phillies, Yankees',
            points: 200,
        },
        {
            question: 'This team has the most franchise wins',
            answer: 'Yankees',
            choices: "Type: Yankees, Braves, Giants, Dodgers",
            points: 300,
        },
        {
            question: 'Newest Team',
            answer:   'Rays',
            choices: 'Type: Rays, Marlins, Astros, Blue Jays',
            points: 400,
        },
        {
            question: 'Most upsets',
            answer: 'Braves',
            choices: 'Type: Braves, N/a, N/a, N/a',
            points: 500,
        },


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
        
    

});



