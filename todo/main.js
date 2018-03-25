const KEY_ENTER = 13; 

let app = new Vue({
    el : "#app", 
    data : {
        header : "Todo app", 
        input : "",
        todos : [], 
        done : []
    }, 
    methods : {
        handleKeyDown : (event) => {
            if(event.keyCode == KEY_ENTER){
                app.setTodo(app.input); 
            } 
        }, 
        setTodo : (todo) => {
            app.input = "";
            //filter from done and add to todos
            app.done = app.done.filter(t => t !== todo); 
            app.todos.push(todo); 
        }, 
        setDone : (event) => {
            let todo = event.target.innerHTML; 
            //filter from todos and add to done 
            app.todos = app.todos.filter(t => t !== todo); 
            app.done.push(todo); 
        }
    }
}); 

