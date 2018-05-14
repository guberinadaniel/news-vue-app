
import Vue from 'vue'
import Router from 'vue-router'
import Vue2Crumbs from 'vue-2-crumbs'

import Homepage from '@/components/Pages/Homepage/Homepage'
import Features from '@/components/Pages/Features/Features'
import Lifestyles from '@/components/Pages/Lifestyles/Lifestyles'
import Technology from '@/components/Pages/Technology/Technology'
import Video from '@/components/Pages/Video/Video'

import News from '@/components/Pages/News'
import NewsSinglePage from '@/components/Pages/NewsSinglePage'
import Health from '@/components/Pages/Health/Health'
import Travel from '@/components/Pages/Travel/Travel'
import Food from '@/components/Pages/Food/Food'

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
      path: '/news',
      name: 'lifestyle',
      component: Lifestyles,
      meta: {
        breadcrumb: {
          label: 'Lifestyle',
          parent: 'Homepage'
        }
      },
    },
    {
      path: '/news/health',
      name: 'Health',
      component: Health,
      meta: {
        breadcrumb: {
          label: 'Health',
          parent: 'lifestyle'
        }
      },
    },
    {
      path: '/news/travel',
      name: 'Travel',
      component: Travel,
      meta: {
        breadcrumb: {
          label: 'Travel',
          parent: 'lifestyle'
        }
      },
    },
    {
      path: '/news/food',
      name: 'food',
      component: Food,
      meta: {
        breadcrumb: {
          label: 'Food',
          parent: 'lifestyle'
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
