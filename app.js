$(() => {

// console.log("Princeton");

  let clicks = 0;
  let alternate = true;
  const $player1Win = $('<div>').addClass('player1Win')
  const $player2Win = $('<div>').addClass('player2Win')
  const $player1Turn = $('<div>').addClass('player1Turn')
  const $player2Turn = $('<div>').addClass('player2Turn')
//Heading
const $h1 = $('<h1>').text('World Series Edition');
    $('body').prepend($h1);

const $h2 = $('<h1>').text('Connect 4');
    $('body').prepend($h2);

//Game Board
const $board = $('<div>').attr('id', 'spot-container');
  $('body').append($board);

//Column container
const $columnCont1 = $('<div>').addClass('column-container')
    $board.append($columnCont1);

const $columnCont2 = $('<div>').addClass('column-container')
    $board.append($columnCont2);

const $columnCont3 = $('<div>').addClass('column-container')
    $board.append($columnCont3);

const $columnCont4 = $('<div>').addClass('column-container')
    $board.append($columnCont4);

const $columnCont5 = $('<div>').addClass('column-container')
    $board.append($columnCont5);

const $columnCont6 = $('<div>').addClass('column-container')
    $board.append($columnCont6);

const $columnCont7 = $('<div>').addClass('column-container')
    $board.append($columnCont7);


//Columns
const $column = $('<div>').addClass('column');
    $columnCont1.append($column);

const $column2 = $('<div>').addClass('column');
     $columnCont2.append($column2);

const $column3 = $('<div>').addClass('column');
    $columnCont3.append($column3);

const $column4 = $('<div>').addClass('column');
    $columnCont4.append($column4);

const $column5 = $('<div>').addClass('column');
    $columnCont5.append($column5);

const $column6 = $('<div>').addClass('column');
    $columnCont6.append($column6);

const $column7 = $('<div>').addClass('column');
    $columnCont7.append($column7);


//Appending each spot to a column
 for (let i = 0; i < 6; i++) {
  const $spot = $('<div>').addClass('circle');
    $column.append($spot);

     }
for (let i = 0; i < 6; i++) {
  const $spot2 = $('<div>').addClass('circle');
    $column2.append($spot2);
        }

for (let i = 0; i < 6; i++) {
  const $spot3 = $('<div>').addClass('circle');
    $column3.append($spot3);
        }


for (let i = 0; i < 6; i++) {
  const $spot4 = $('<div>').addClass('circle');
   $column4.append($spot4);
      }

    for (let i = 0; i < 6; i++) {
        const $spot5 = $('<div>').addClass('circle');
          $column5.append($spot5);
              }

for (let i = 0; i < 6; i++) {
  const $spot6 = $('<div>').addClass('circle');
   $column6.append($spot6);
}

for (let i = 0; i < 6; i++) {
  const $spot7 = $('<div>').addClass('circle');
   $column7.append($spot7);
}

// footer
const $footer = $('<footer>').attr('id', 'reset').text('Reset');
    $board.append($footer);


//Placing the chips at the bottom of the board first
const playGame = (event) => {

  const $columns = $(event.currentTarget).parent();
      const $test = $columns.children();
          for (let i = ($test.length - 1); i >= 0; i--) {
              const $circle = $test.eq(i);

    if(!$test.eq(i).attr('value')){
      if(alternate === true){
        $test.eq(i).addClass('astros').attr('value', 'clickedAstro').attr('player', 'Player 1');

        $player1Turn.css('display', 'none');
        $player2Turn.css('display', 'block');

alternate = false;
          return 0;

        } else if(alternate === false) {
            $test.eq(i).addClass('dodgers').attr('value', 'clickedDodger').attr('player', 'Player 2');

        $player2Turn.css('display', 'none');
        $player1Turn.css('display', 'block');

        alternate = true;
        return 0;
    }
  }
}
}





// Windows Onload
$(() => {

//Aternate turns and fills circles
$('.circle').on('click', playGame);




//Reset button to start game over
$('#reset').on('click',() =>{
    location.reload()

});
});

});//
