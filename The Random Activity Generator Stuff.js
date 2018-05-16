var activities = [
  'Learn how to play solitaire, or just play solitaire',
  'Learn how to(or do) a fun photoshop',
  'Staring Contest',
  'Go on a mile plus bike ride',
  'Box fort',
  'Do the Rubix Cube',
  'Do a puzzle',
  'Call a grandparent to say "hi"',
  'Have a nerf battle, or modify a nerf gun',
  'Nap',
  'Actually clean up your room',
  'Make a smoothie or shake',
  'Reclick the button',
  'Play with Oobleck',
  'Help make a meal for the family',
  'Do your homework now, (during the school year)',
  'Learn to make a dish Gordon Ramsey would aprove of',
  'Run around your house 3 times',
  'Do a mini workout',
  'Make some paper airplanes',
  'Draw Mike Wasouski',
  'Contemplate life',
  'Learn a piece for an instrument if you can play one',
  'Play Sudoku',
]
function AnothaOne() {
  var randomNumber = Math.floor(Math.random() * (activities.length));
  document.getElementByID('ActivityDisplay').innerHTML = activities[randomNumber];
}
