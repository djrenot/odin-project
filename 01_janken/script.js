console.log("Hello World");

function computer_play (){
  let hands = ["rock", "paper", "scissors"];
  let hand = hands[Math.floor(Math.random()*hands.length)]
  return hand;
}

function play_janken (hand_player, hand_com){
  hand_player = hand_player.toLowerCase();
  let result;
  if (hand_player == hand_com){
    result = "DRAW! Play it again."
  } else if (hand_player == 'rock') {
    if (hand_com == 'scissors'){
      result = "You WIN! Rock wins scissors."
    } else if (hand_com == 'paper') {
      result = "You LOSE! Paper wins rock."
    }
  } else if (hand_player == 'paper') {
    if (hand_com == 'rock'){
      result = "You WIN! Paper wins rock."
    } else if (hand_com == 'scissors') {
      result = "You LOSE! Scissors wins paper."
    }
  } else if (hand_player == 'scissors') {
    if (hand_com == 'rock') {
      result = "You LOSE! Rock wins scissors."
    } else if (hand_com == 'paper') {
      result = "You WIN! Scissors wins paper."
    }
  } else {
    result = "Oops, something went wrong. Please try again."
  }
  console.info('player: ' + hand_player + ' vs com: ' + hand_com)
  console.log(result);
  return result;
}

function game(){
  let user_input = prompt('Enter your hand:');
  // console.log(user_input);
  play_janken(user_input,computer_play());
  user_input = prompt('Enter your hand:');
  play_janken(user_input,computer_play());
  user_input = prompt('Enter your hand:');
  play_janken(user_input,computer_play());
  user_input = prompt('Enter your hand:');
  play_janken(user_input,computer_play());
  user_input = prompt('Enter your hand:');
  play_janken(user_input,computer_play());
}