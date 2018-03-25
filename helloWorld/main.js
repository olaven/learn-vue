
let app = new Vue({
    el : "#app", 
    data : {
        message : "Hello, World!"
    }
}); 

let toggle = new Vue({
    el : "#toggle", 
    data : {
        visible : true
    }, 
    methods : {
        toggleVisibility : () => {
            toggle.visible = !toggle.visible; 
        }
    }
});


let items = new Vue({
    el : "#classDemo", 
    data : {
        content : "original" 
    }, 
    methods : {
        changeContent : () => {
            classDemo.content = (classDemo.content == "original" ? "changed" : "original"); 
        }
    }
})