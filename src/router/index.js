
import Vue from 'vue'
import Router from 'vue-router'
import Vue2Crumbs from 'vue-2-crumbs'

import Homepage from '@/components/Pages/Homepage/Homepage'
import Features from '@/components/Pages/Features/Features'
import Lifestyles from '@/components/Pages/Lifestyles/Lifestyles'
import Technology from '@/components/Pages/Technology/Technology'
import Travel from '@/components/Pages/Travel/Travel'
import Video from '@/components/Pages/Video/Video'

import News from '@/components/Pages/News'
import NewsSinglePage from '@/components/Pages/NewsSinglePage'


Vue.use(Router);
Vue.use(Vue2Crumbs);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage,
      meta: {
        breadcrumb: 'Home'
      },
    },
    {
      path: '/features',
      name: 'features',
      component: Features,
      meta: {
        breadcrumb: {
          label: 'Features',
          parent: 'Homepage'
        }
      },
    },
    {
      path: '/lifestyles',
      name: 'lifestyle',
      component: Lifestyles,
      meta: {
        breadcrumb: {
          label: 'Lifestyles',
          parent: 'Homepage'
        }
      },
    },
    {
      path: '/technology',
      name: 'technology',
      component: Technology,
      meta: {
        breadcrumb: {
          label: 'Technology',
          parent: 'Homepage'
        }
      },
    },
    {
      path: '/travel',
      name: 'travel',
      component: Travel,
      meta: {
        breadcrumb: {
          label: 'Travel',
          parent: 'Homepage'
        }
      },
    },
    {
      path: '/video',
      name: 'video',
      component: Video,
      meta: {
        breadcrumb: {
          label: 'Video',
          parent: 'Homepage'
        }
      },
    },
    {
      path: '/news',
      name: 'News',
      component: News,
      meta: {
        breadcrumb: {
          label: 'News',
          parent: 'Homepage'
        }
      },
    },
    {
      path: '/news/:id',
      // fullPath: "", videti kako da se doda alias
      name: 'singleNews',
      component: NewsSinglePage,
      meta: {
        breadcrumb: {
          label: 'SingleNews',
          parent: 'News'
        }
      },
      props: true
    },
  ]
})