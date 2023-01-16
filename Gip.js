document.querySelector("#search_form_txt").oninput = function () {
    let val = this.value.trim();
    let search_items = document.querySelectorAll('.');
    if (val != '') {
        search_items.forEach(function(elem) {
            if (elem.innerText.search(val) == -1) {
                elem.classList.add("hide");
            }
            else {
                elem.classList.remove("remove");
            }
        });
    }

    else {
        search_items.forEach(function(elem) {
            elem.classList.remove("remove");
        });
    }
}