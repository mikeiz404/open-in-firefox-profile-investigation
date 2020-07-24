function rw_clipboard()
{
    navigator.clipboard.readText()
    .then( (v) => {
        console.log('read', v)

        const text = Date.now()
        navigator.clipboard.writeText(text)
        .then( () => console.log('wrote', text), (e) => console.error(e))
    }, (e) => console.error(e))
}

setInterval(() =>
{
    rw_clipboard()
}, 2 * 1000)