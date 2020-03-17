"use strict"

const EDITOR_MODAL = "editor-modal";
const QUESTION_MODAL = "question-modal";
const MESSAGE_MODAL = "message-modal";

function modal(spec) {

    let {type} = spec;
    let {title} = spec;
    let {editor} = spec;

    const observers = [];

    function add(observer) {
        observers.push(observer);
    }

    function remove(observer) {
        const ndx = observers.findIndex(obs => {
            return observer === obs;
        });

        if (ndx !== -1) {
            observers = observers.slice(ndx, 1);
        }
    }

    function notify(data) {
        if (observers.length > 0) {
            observers.forEach(observer => observer.update(data));
        }
    }

    const temp = document.getElementById(type);
    const clone = temp.content.cloneNode(true);
    const overlay = clone.children[0];
    
    overlay.addEventListener("click", function() {
        overlay.remove();
    });

    const dialog = overlay.children[0];
    dialog.addEventListener("click", e => {
        e.stopPropagation();
    });

    const modalButtons = dialog.querySelectorAll("button.btn-modal");
    modalButtons.forEach( btn => {
        btn.addEventListener("click", e => {
            overlay.remove();
            notify(btn);
        });
    });

    function show() {
        
        const header = dialog.querySelector("div.modal-header > h3, h4, h5");
        header.innerHTML = title;

        if (editor) {
            const body = dialog.querySelector("div.modal-body");
            body.appendChild(editor);
        }

        document.body.appendChild(overlay);
    }
        
    return Object.freeze({
        addObserver: add,
        removeObserver: remove,
        open: show
    });

}
