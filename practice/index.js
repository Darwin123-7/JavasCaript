let btnKeys = document.querySelector("#btn");   

btnKeys.addEventListener('click', (e) => {
    let keys = [];

    if (e.shiftKey) keys.push('shift');
    if (e.ctrlKey) keys.push('ctrl');
    if (e.altKey) keys.push('alt');
    if (e.metaKey) keys.push('meta');

    let msg = document.querySelector("#message");
    msg.textContent = `Keys: ${keys}`;
});