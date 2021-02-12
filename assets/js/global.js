$(document).on('click', '.month', (event) => {
  $(event.currentTarget).toggleClass("selected")
})

$(document).on('click', '.page-item', (event) => {
    $(event.currentTarget).toggleClass("selected")
  })