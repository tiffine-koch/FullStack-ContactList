'use strict'

$(document).ready(init);

var newContact;

function init() {
  $('tbody').on('click', 'tr', findName);
  console.log(this);
}

function findName(event) {
  // console.log($(this).closest('tr').index());
  var thisContact = $(this).closest('tr').index();
  location.href = `/users/${thisContact}`;
}
