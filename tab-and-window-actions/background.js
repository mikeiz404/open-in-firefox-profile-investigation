function open_url( url, type )
{
    console.debug('Opening URL', {url})
    let _type = type || "window"
    
    if( _type === "window" )
    {
        browser.windows.create({url: url})
    }
    else if( _type === "tab" )
    {
        browser.tabs.create({url: url})

    }
}

open_url('http://google.com', "tab")
open_url('http://google.com', "window")