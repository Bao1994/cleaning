import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
    {
        path: '',
        redirect: '/index'
    },
    {
        name: 'index',
        path: '/index',
        component: () => import('@/pages/index/index') // 懒加载引入方式
    },
    {
        name: 'detail',
        path: '/detail',
        component: () => import('@/pages/detail/detail')
    },
	{
		name: 'ShoppingCart', // 购物车
		path: '/shopping-cart',
		component: () => import('@/pages/shopping-cart/index')
	},
	{
		name: 'my', // 我的
		path: '/my',
		component: () => import('@/pages/my/index')
	},
	{
		name: 'RegisterRole', // 注册-选择角色
		path: '/register-role',
		component: () => import('@/pages/register/role/index')
	},
	{
		name: 'RegisterPhone', // 注册-手机号验证码
		path: '/register-phone',
		component: () => import('@/pages/register/phone/index')
	},
	{
		name: 'RegisterPassword', // 注册-设置密码
		path: '/register-password',
		component: () => import('@/pages/register/password/index')
	},
	{
		name: 'RegisterSuccess', // 注册-成功
		path: '/register-success',
		component: () => import('@/pages/register/success/index')
	},
	{
		name: 'LoginSms', // 短信登录
		path: '/login-sms',
		component: () => import('@/pages/login/sms/index')
	},
	{
		name: 'LoginPassword', // 密码登录
		path: '/login-password',
		component: () => import('@/pages/login/password/index')
	},
	{
		name: 'HouseService', // 民宿服务
		path: '/house-service',
		component: () => import('@/pages/house-service/index')
	},
	{
		name: 'CleaningTips', // 清洁小知识
		path: '/cleaning-tips',
		component: () => import('@/pages/cleaning-tips/index')
	},
	{
		name: 'HouseKeeping', // 家政服务
		path: '/house-keeping',
		component: () => import('@/pages/house-keeping/index')
	},
	{
		name: 'CompanyService', // 公司服务
		path: '/company-service',
		component: () => import('@/pages/company-service/index')
	},
	{
		name: 'ElectricalCleaning', // 家电清洗
		path: '/electrical-cleaning',
		component: () => import('@/pages/electrical-cleaning/index')
	}
]
export default new Router({
    routes: routes,
    // 使用<keep-alive>，scrollBehavior才能生效。
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
})
