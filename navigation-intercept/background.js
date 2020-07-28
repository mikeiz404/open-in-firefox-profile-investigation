const zip = ( a, b ) => a.map(( e, i ) => [e, b[i]])
const eql = ( a, b ) => zip(a, b).map(( t ) => t[0] === t[1]).reduce(( a, c ) => a && c, true)

const get_domains = ( url ) => new URL(url).hostname.split('.')
const get_domain = ( domains ) => domains.slice(-2, domains.length)
const is_same_domain = ( a, b ) => eql(get_domain(a), get_domain(b))
const is_same_domain_and_subdomains = ( a, b ) => eql(a, b)

browser.webRequest.onBeforeRequest.addListener(
    async ( details ) =>
    {
        const tab = await browser.tabs.get(details.tabId)

        const tab_domains = get_domains(tab.url)
        const request_domains = get_domains(details.url)

        console.log(tab_domains, request_domains)

        if( new URL(tab.url).protocol !== "about:" &&
            // !is_same_domain_and_subdomains(tab_domains, request_domains)
            !is_same_domain(tab_domains, request_domains)
        )
        {            
            return {cancel: true}
        }
    },
    {
        urls: ['<all_urls>'],
        types: ['main_frame'] // tab or window
    },
    ["blocking"]
)