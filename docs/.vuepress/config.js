module.exports = {
  title: 'JB Network',
    description: 'A Minecraft server network',

    themeConfig: {
        nav: [
          {
            text: "Main Guides",
            link: "/mainguides/terminology.md"
          },
          {
            text: 'SMP Guides',
            link: '/smpguides/terminology.md',
          },
          {
            text: "Contribute",
            link: "https://github.com/JB-MC-Network/jbnetwork-docs"
          },
          {
              text: "Discord",
              link: "https://discord.gg/8FhreNF2Pu"
          }
        ],
        sidebar: {
            '/mainguides/': [{
              title: 'Main Guides',
              collapsable: false,
              children: [
                'terminology',
                'parties',
                'friends',
              ]
            }],
            '/smpguides/': [{
              title: 'SMP Guides',
              collapsable: false,
              children: [
                'terminology',
                'griefprevention',
              ]
            }]
          }
      
    }
  }
