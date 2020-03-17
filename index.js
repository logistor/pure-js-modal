(function() {

    const labels = document.querySelectorAll("label");
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
                    labels[0].innerHTML = input.value;
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

        dialog.addObserver({
            update: function(btn) {
                if (btn.innerHTML === "Ok") {
                    labels[1].innerHTML = "Operation accepted.";
                } else {
                    labels[1].innerHTML = "Operation cancelled.";
                }
            }
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
