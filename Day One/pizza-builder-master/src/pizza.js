// Write your Pizza Builder JavaScript in this file.
// var pepperoniButton = $('.btn-pepperonni')
// var mushroomsButton = $('.btn-mushrooms')
// var greenpeppersButton = $('btn-green-peppers')


var crust = 0;
var pep = 0;
var greenPepper = 0;
var mush = 0;
var sauce = 0; 
var total = 10 + crust + pep + greenPepper + mush + sauce;

var newpep = '<li id="pep-id">$1 pepperonni</li>'
var newmush = '<li id="mush-id">$1 mushrooms</li>'
var newgreenpep = '<li id="greenpep-id">$1 green peppers</li>'
var newsauce = '<li id="sauce-id">$3 white sauce</li>'
var newcrust = '<li id="crust-id">$5 gluten-free crust</li>'

$('.pep').hide()
$('.mushroom').hide()
$('.green-pepper').hide()

$('.btn-pepperonni').on('click', function(){
  $(this).toggleClass('active');

  if ($(this).hasClass('active')) {
    $('#list').prepend(newpep)
    pep = 1
    $('.pep').show();
  } else {
    $('#pep-id').remove()
    pep = 0
    $('.pep').hide();
  }
  total = 10 + crust + pep + greenPepper + mush + sauce;
  $('strong').text('$' + total) 
})

$('.btn-mushrooms').on('click', function(){
  $(this).toggleClass('active');
  
  if ($(this).hasClass('active')) {
    $('#list').prepend(newmush)
    mush = 1
    $('.mushroom').show();
  } else {
    $('#mush-id').remove()
    mush = 0
    $('.mushroom').hide();
  } 
  total = 10 + crust + pep + greenPepper + mush + sauce;
  $('strong').text('$' + total)
})

$('.btn-green-peppers').on('click', function(){
  $(this).toggleClass('active');

  if ($(this).hasClass('active')) {
    $('#list').prepend(newgreenpep)
    greenPepper = 1
    $('.green-pepper').show();
  } else {
    $('#greenpep-id').remove()
    greenPepper = 0
    $('.green-pepper').hide();
  }
  total = 10 + crust + pep + greenPepper + mush + sauce;
  $('strong').text('$' + total)
})

$('.btn-sauce').on('click', function(){
  $(this).toggleClass('active');
  $('.sauce').toggleClass('sauce-white');
  if ($(this).hasClass('active')){
    $('#list').prepend(newsauce)
    sauce = 3
  } else {
    $('#sauce-id').remove()
    sauce = 0
  }
  total = 10 + crust + pep + greenPepper + mush + sauce;
  $('strong').text('$' + total)
})

$('.btn-crust').on('click', function(){
  $(this).toggleClass('active');
  $('.crust').toggleClass('crust-gluten-free')
  if ($(this).hasClass('active')){
    $('#list').prepend(newcrust)
    crust = 5
  } else {
    $('#crust-id').remove()
    crust = 0
  }
  total = 10 + crust + pep + greenPepper + mush + sauce;
  $('strong').text('$' + total)
})

