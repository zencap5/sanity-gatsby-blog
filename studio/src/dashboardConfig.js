export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e834ba103dc617949d0e383',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-1vosy5ct',
                  apiId: 'ddc4b8f3-2b60-4119-92dd-68ca2bd88531'
                },
                {
                  buildHookId: '5e834ba1ca4ec96df434e291',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-agszopn5',
                  apiId: '0402d247-6b64-4509-aabe-d923efcd070b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/zencap5/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-agszopn5.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
