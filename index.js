(function() {

    const span = document.querySelector("div.row > span");
    const input = document.createElement("input");
    input.classList.add("form-control");

    const btn = document.querySelectorAll("button");
    btn[0].addEventListener("click", function() {
        
	    const dialog = modal({
            type: EDITOR_MODAL,
            title: "Input text", 
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

    btn[1].addEventListener("click", function() {
        
	    const dialog = modal({
            type: QUESTION_MODAL,
            title: "Question?"
        });
    
        dialog.open();
    });

    btn[2].addEventListener("click", function() {
        
	    const dialog = modal({
            type: MESSAGE_MODAL,
            title: "Message"
        });
    
        dialog.open();
    });
       
}());
