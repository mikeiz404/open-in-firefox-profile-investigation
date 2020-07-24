const profiles = [
    {name: 'A', available: true},
    {name: 'B', available: false}
]

function open_in_profile( profile, url )
{
    console.log("Opening url in profile", profile, url)
}

function update_menu( profiles )
{
    browser.menus.removeAll()

    browser.menus.create({
        id: "open-link-in-profile",
        icons: {"16": "/icons/border-48.png"},
        title: "Open in Profile",
        contexts: ["link"],
    })

    // create sub menus
    profiles.map((p) => {
        browser.menus.create({
            parentId: "open-link-in-profile",
            title: p.name,
            enabled: p.available,
            onclick: (info, tab) => open_in_profile(p, info.linkUrl)
        })
    })
}

update_menu(profiles)
