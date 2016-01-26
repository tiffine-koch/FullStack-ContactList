'use strict'

$(document).ready(init);

var newContact;

function init() {
  $('#newEntry').click(addNewContact);
  $('tbody').on('click', 'td', findName);
  console.log(this);
}

function addNewContact(event) {
event.preventDefault();

var name = $('#conEntry').val();
var email = $('#emailEntry').val();
var loc = $('#locEntry').val();
var phone = $('#phoneEntry').val();
var face = $('#faceEntry').val();
console.log(name,face,loc,phone,face);
var newContact = ({name: name, email: email, location: loc, phone: phone, face: face})
  console.log(newContact);
  $.post('/users', newContact, function(data) {
    location.replace('/');
  });
}

function findName(event) {
  // console.log(event.target.closest('tr').indexOf());
  console.log($(this).closest('tr').index());
}
