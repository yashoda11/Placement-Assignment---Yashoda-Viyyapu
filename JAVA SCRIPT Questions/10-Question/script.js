var button = document.getElementById("debounce");  
const debounce = (func, wait) => {  
    let debounceTimer  
    return function() {  
        const context = this  
        const args = arguments  
            clearTimeout(debounceTimer)  
                debounceTimer  
            = setTimeout(() => func.apply(context, args), wait)  
    }  
}   
button.addEventListener('click', debounce(function() {  
        alert("Hello\n This message will be displayed after 2 seconds, and no matters how many times we click the button.")  
}, 2000));  