import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import UserProfile from '../views/UserProfile.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    // meta: { requiresAuth: true },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/userprofile',
    name: 'UserProfile',
    component: UserProfile,
    // meta: { requiresAuth: true },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  
  const user = JSON.parse(localStorage.getItem('user'));

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
