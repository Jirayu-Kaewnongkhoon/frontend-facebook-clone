import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import UserProfile from '../views/UserProfile.vue'
import Friends from '../views/Friends.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'Home' },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { title: 'Login' }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: { title: 'Register' }
  },
  {
    path: '/userprofile',
    name: 'UserProfile',
    component: UserProfile,
    meta: { title: 'UserProfile' }
  },
  {
    path: '/friends',
    name: 'Friends',
    component: Friends,
    meta: { title: 'Friends' },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.afterEach((to, from) => {
  document.title = `${to.meta.title} | Facebook Clone`;
})

router.beforeEach((to, from, next) => {
  
  const user = JSON.parse(localStorage.getItem('user'));
  // TODO: ค้น user จาก db มาเช็ค ว่ามีจริงไหม

  if (user) {

    // ถ้ามี user => ไปได้หมด ยกเว้น auth route
    
    if (isAuthRoute(to.name)) {
      
      next({ name: 'Home' });
      
    } else {
      
      next();
      
    }
    
  } else {

    // ถ้าไม่มี user => ไปได้แค่ auth route
    
    if (isAuthRoute(to.name)) {
      
      next();

    } else {

      next({ name: 'Login' });

    }

  }

})

const isAuthRoute = (routeName) => {
  return routeName === 'Login' || routeName === 'Register';
}

export default router
