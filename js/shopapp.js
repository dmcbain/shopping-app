function addListItem() {
    
     var write = $('#enterItem').val();
     var list = $('#showItem');
     var item = $('<li><button class="checkbox">&#x2713;</button><span class="list">' + write + '</span><button class="delete">X</button></li>');
     var enterItem = $("#enterItem");

     if (write.length === 0  || write.length > 33) {
        return false;
    }
    
    list.append(item);
    $(enterItem).val('');
}

function deleteItem() {

    $(this).parent().remove();
}

function reviewItem() {

    $(this).parent().toggleClass('review');
}

$(function() {

    var add = $('#addItem');
    var enterItem = $('#enterItem');
    var list = $('#showItem');
    
    add.on('click', addListItem);
    list.on('click', '.checkbox', reviewItem);
    list.on('click', '.delete', deleteItem);
    enterItem.on('keypress', function (e) {
        if (e.which == 13) {
            addListItem();
        }
    });
});

