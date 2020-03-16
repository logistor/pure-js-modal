(function() {

    const span = document.querySelector("div.row > span");
    const input = document.createElement("input");
    input.classList.add("form-control");

    const btn = document.querySelector("button");
    btn.addEventListener("click", function() {
        
	    const dialog = modal({
            title: "Set text", 
            editor: input
        });

        dialog.addObserver({
            update: function(btn) {
                if (btn.innerHTML === "Ok") {
                    span.innerHTML = input.value;
                }
            }
        });
    
        dialog.open();
    });
       
}());
