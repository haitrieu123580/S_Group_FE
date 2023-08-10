import { createRouter, createWebHistory } from 'vue-router'
import RegisterForm from '../components/Form/RegisterForm.vue'
import LoginForm from '../components/Form/LoginForm.vue'
import ForgotPassword from '../components/Form/ForgotPassword.vue'
import ResetPassword from '../components/Form/ResetPassword.vue'
import DashBoardView from '../views/DashBoardView.vue';
import ListUserView from '../views/ListUserView.vue';
const routes =[
  {path:'/', component: LoginForm},
  {path:'/login', component: LoginForm},
  {path:'/register', component: RegisterForm},
  {path:'/forgot-password', component: ForgotPassword},
  {path:'/reset-password', component: ResetPassword},
  {path:'/dashboard', component: DashBoardView},
  {path:'/users', component: ListUserView}
]
const router = createRouter({
  history: createWebHistory(),
  routes: routes
})
export default router