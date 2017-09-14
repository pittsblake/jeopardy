$(document).ready(function(){

    //Cat Category Questions and Answers

    let score = 0;

    const catCategory = [
        {
           // question: 'This cat is Orange and Black',
            //answer: 'Tiger',
            //choices: 'Tiger, Lion, or Leopard',
            //points: 100,
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

    ]

    //
    //Cat Prompts
    //
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
$('.cats1').click(function($event) {
    this.remove();
    const input = prompt (catCategory[1].question, catCategory[1].choices);
    if (input === catCategory[1].answer){
        alert('Correct!');
        score += catCategory[1].points;
        $('#score').html(score);
    } else{
        alert('Incorrect!');
        score -= catCategory[1].points;
        $('#score').html(score);
    }
    
});

//Cat Question 3
$('.cats2').click(function($event) {
    this.remove();
    const input = prompt (catCategory[2].question, catCategory[2].choices);
    if (input === catCategory[2].answer){
        alert('Correct!');
        score += catCategory[2].points;
        $('#score').html(score);
    } else{
        alert('Incorrect!');
        score -= catCategory[2].points;
        $('#score').html(score);
    }
});

//Cat question 4
$('.cats3').click(function($event) {
    this.remove();
    const input = prompt (catCategory[3].question, catCategory[3].choices);
    if (input === catCategory[3].answer){
        alert('Correct!');
        score += catCategory[3].points;
        $('#score').html(score);
    } else{
        alert('Incorrect!');
        score -= catCategory[3].points;
        $('#score').html(score);
    }
});

//Cat question 5
$('.cats4').click(function($event) {
    this.remove();
    const input = prompt (catCategory[4].question, catCategory[4].choices);
    if (input === catCategory[4].answer){
        alert('Correct!');
        score += catCategory[4].points;
        $('#score').html(score);
    } else{
        alert('Incorrect!');
        score -= catCategory[4].points;
        $('#score').html(score);
    }
}); 

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
$('.dogs0').click(function($event) {
    this.remove();
    const input = prompt (dogCategory[0].question, dogCategory[0].choices);
    if (input === dogCategory[0].answer){
        alert('Correct!');
        score += dogCategory[0].points;
        $('#score').html(score);
    } else{
        alert('Incorrect!');
        score -= dogCategory[0].points;
        $('#score').html(score);
    }
});

$('.dogs1').click(function($event) {
    this.remove();
    const input = prompt (dogCategory[1].question, dogCategory[1].choices);
    if (input === dogCategory[1].answer){
        alert('Correct!');
        score += dogCategory[1].points;
        $('#score').html(score);
    } else{
        alert('Incorrect!');
        score -= dogCategory[1].points;
        $('#score').html(score);
    }
});

$('.dogs2').click(function($event) {
    this.remove();
    const input = prompt (dogCategory[2].question, dogCategory[2].choices);
    if (input === dogCategory[2].answer){
        alert('Correct!');
        score += dogCategory[2].points;
        $('#score').html(score);
    } else{
        alert('Incorrect!');
        score -= dogCategory[2].points;
        $('#score').html(score);
    }
});

$('.dogs3').click(function($event) {
    this.remove();
    const input = prompt (dogCategory[3].question, dogCategory[3].choices);
    if (input === dogCategory[3].answer){
        alert('Correct!');
        score += dogCategory[3].points;
        $('#score').html(score);
    } else{
        alert('Incorrect!');
        score -= dogCategory[3].points;
        $('#score').html(score);
    }
});

$('.dogs4').click(function($event) {
    this.remove();
    const input = prompt (dogCategory[4].question, dogCategory[4].choices);
    if (input === dogCategory[4].answer){
        alert('Correct!');
        score += dogCategory[4].points;
        $('#score').html(score);
    } else{
        alert('Incorrect!');
        score -= dogCategory[4].points;
        $('#score').html(score);
    }
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
    }
];


//
//Bird Prompts
//
$('.birds0').click(function($event) {
    this.remove();
    const input = prompt (birdCategory[0].question, birdCategory[0].choices);
    if (input === birdCategory[0].answer){
        alert('Correct!');
        score += birdCategory[0].points;
        $('#score').html(score);
    } else{
        alert('Incorrect!');
        score -= catCategory[0].points;
        $('#score').html(score);
    }
});

$('.birds1').click(function($event) {
    this.remove();
    const input = prompt (birdCategory[1].question, birdCategory[1].choices);
    if (input === birdCategory[1].answer){
        alert('Correct!');
        score += birdCategory[1].points;
        $('#score').html(score);
    } else{
        alert('Incorrect!');
        score -= catCategory[1].points;
        $('#score').html(score);
    }
});

$('.birds2').click(function($event) {
    this.remove();
    const input = prompt (birdCategory[2].question, birdCategory[2].choices);
    if (input === birdCategory[2].answer){
        alert('Correct!');
        score += birdCategory[2].points;
        $('#score').html(score);
    } else{
        alert('Incorrect!');
        score -= catCategory[2].points;
        $('#score').html(score);
    }
});

$('.birds3').click(function($event) {
    this.remove();
    const input = prompt (birdCategory[3].question, birdCategory[3].choices);
    if (input === birdCategory[3].answer){
        alert('Correct!');
        score += birdCategory[3].points;
        $('#score').html(score);
    } else{
        alert('Incorrect!');
        score -= catCategory[3].points;
        $('#score').html(score);
    }
});

$('.birds4').click(function($event) {
    this.remove();
    const input = prompt (birdCategory[4].question, birdCategory[4].choices);
    if (input === birdCategory[4].answer){
        alert('Correct!');
        score += birdCategory[4].points;
        $('#score').html(score);
    } else{
        alert('Incorrect!');
        score -= catCategory[4].points;
        $('#score').html(score);
    }
});

//
// Nick Cage Question and answer array
//
const nickCageCategory = [
    {
        question: 'This man and Tom Brady have a combined 5 Super Bowl victories',
        answer: 'Nick Cage',
        choices: 'Type: Nick Cage, N/A, N/A, N/A',
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
    }
];

//
//Nick Cage Prompt
//
$('.nickCage0').click(function($event) {
    this.remove();
    const input = prompt (nickCageCategory[0].question, nickCageCategory[0].choices);
    if (input === nickCageCategory[0].answer){
        alert('Correct!');
        score += nickCageCategory[0].points;
        $('#score').html(score);
    } else{
        alert('Incorrect!');
        score -= nickCageCategory[0].points;
        $('#score').html(score);
    }
});

$('.nickCage1').click(function($event) {
    this.remove();
    const input = prompt (nickCageCategory[1].question, nickCageCategory[1].choices);
    if (input === nickCageCategory[1].answer){
        alert('Correct!');
        score += nickCageCategory[1].points;
        $('#score').html(score);
    } else{
        alert('Incorrect!');
        score -= nickCageCategory[1].points;
        $('#score').html(score);
    }
});

$('.nickCage2').click(function($event) {
    this.remove();
    const input = prompt (nickCageCategory[2].question, nickCageCategory[2].choices);
    if (input === nickCageCategory[2].answer){
        alert('Correct!');
        score += nickCageCategory[2].points;
        $('#score').html(score);
    } else{
        alert('Incorrect!');
        score -= nickCageCategory[2].points;
        $('#score').html(score);
    }
});

$('.nickCage3').click(function($event) {
    this.remove();
    const input = prompt (nickCageCategory[3].question, nickCageCategory[3].choices);
    if (input === nickCageCategory[3].answer){
        alert('Correct!');
        score += nickCageCategory[3].points;
        $('#score').html(score);
    } else{
        alert('Incorrect!');
        score -= nickCageCategory[3].points;
        $('#score').html(score);
    }
});

$('.nickCage4').click(function($event) {
    this.remove();
    const input = prompt (nickCageCategory[4].question, nickCageCategory[4].choices);
    if (input === nickCageCategory[4].answer){
        alert('Correct!');
        score += nickCageCategory[4].points;
        $('#score').html(score);
    } else{
        alert('Incorrect!');
        score -= nickCageCategory[4].points;
        $('#score').html(score);
    }
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
    }
];


//
//Baseball Prompt
//
$('.baseball0').click(function($event) {
    this.remove();
    const input = prompt (baseballCategory[0].question, baseballCategory[0].choices);
    if (input === baseballCategory[0].answer){
        alert('Correct!');
        score += baseballCategory[0].points;
        $('#score').html(score);
    } else{
        alert('Incorrect!');
        score -= baseballCategory[0].points;
        $('#score').html(score);
    }
});

$('.baseball1').click(function($event) {
    this.remove();
    const input = prompt (baseballCategory[1].question, baseballCategory[1].choices);
    if (input === baseballCategory[1].answer){
        alert('Correct!');
        score += baseballCategory[1].points;
        $('#score').html(score);
    } else{
        alert('Incorrect!');
        score -= baseballCategory[1].points;
        $('#score').html(score);
    }
});

$('.baseball2').click(function($event) {
    this.remove();
    const input = prompt (baseballCategory[2].question, baseballCategory[2].choices);
    if (input === baseballCategory[2].answer){
        alert('Correct!');
        score += baseballCategory[2].points;
        $('#score').html(score);
    } else{
        alert('Incorrect!');
        score -= baseballCategory[2].points;
        $('#score').html(score);
    }
});

$('.baseball3').click(function($event) {
    this.remove();
    const input = prompt (baseballCategory[3].question, baseballCategory[3].choices);
    if (input === baseballCategory[3].answer){
        alert('Correct!');
        score += baseballCategory[3].points;
        $('#score').html(score);
    } else{
        alert('Incorrect!');
        score -= baseballCategory[3].points;
        $('#score').html(score);
    }
});

$('.baseball4').click(function($event) {
    this.remove();
    const input = prompt (baseballCategory[4].question, baseballCategory[4].choices);
    if (input === baseballCategory[4].answer){
        alert('Correct!');
        score += baseballCategory[4].points;
        $('#score').html(score);
    } else{
        alert('Incorrect!');
        score -= baseballCategory[4].points;
        $('#score').html(score);
    }
});
    


});
