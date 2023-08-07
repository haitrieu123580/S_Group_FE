import { createRouter, createWebHistory } from 'vue-router'
import RegisterForm from '../components/RegisterForm.vue'
import LoginForm from '../components/LoginForm/LoginForm.vue'
import ForgotPassword from '../components/ForgotPassword.vue'
const routes =[
  {path:'/login', component: LoginForm},
  {path:'/register', component: RegisterForm},
  {path:'/forgot-password', component: ForgotPassword},
]
const router = createRouter({
  history: createWebHistory(),
  routes: routes
})
export default router