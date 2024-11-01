var getDrinkTitle = document.querySelectorAll('.drink-title');
var getInput = document.querySelector('.search-box');

// for loop will convert all drink titles to UPPERCASE...
for (var i = 0; i < getDrinkTitle.length; i++) {
    getDrinkTitle[i].innerHTML = getDrinkTitle[i].innerHTML.toUpperCase();
    console.log(getDrinkTitle[i]);
};

getInput.addEventListener('input', function () {
    var inputValue = getInput.value.toUpperCase();

    for (var i = 0; i < getDrinkTitle.length; i++) {
        var drinkTitle = getDrinkTitle[i].innerHTML.toUpperCase();

        if (drinkTitle.includes(inputValue)) {
            getDrinkTitle[i].parentElement.style.display = "block";
        }
        else {
            getDrinkTitle[i].parentElement.style.display = "none";
        }
    }
})




