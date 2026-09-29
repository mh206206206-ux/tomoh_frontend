import { createRouter, createWebHistory } from 'vue-router';
import { ref } from 'vue';

const routes = [
	// register
  {
		path: '/register',
		name: 'Register',
		component: () => import('../views/RegisterView'),
		meta: {
			title: 'إنشاء حساب'
		}
	},
	// login
	{
		path: '/login',
		name: 'Login',
		component: () => import('../views/LoginView'),
		meta: {
			title: 'تسجيل الدخول'
		}
	},
	// home
	{
		path: '/',
		name: 'Home',
		component: () => import('../views/HomeView'),
		meta: {
			title: 'الصفحة الرئيسية ',
			linkName: 'الرئيسية',
			icon: 'home'
		}
	},
	// questions
	{
		path: '/questions',
		name: 'Questions',
		component: () => import('../views/QuestionsView'),
		meta: {
			title: 'صفحة الأسئلة',
			linkName: 'الأسئلة',
			icon: 'question',
			roles: ['teacher']
		}
	},
	// exams
	{
		path: '/exams',
		name: 'Exams',
		component: () => import('../views/ExamsView'),
		meta: {
			title: 'صفحة الاختبارات',
			linkName: 'الاختبارات',
			icon: 'exam'
		}
	},
	// results
	{
		path: '/results',
		name: 'Results',
		component: () => import('../views/ResultsView'),
		meta: {
			title: 'صفحة النتائج',
			linkName: 'النتائج',
			icon: 'result'
		}
	},
	// users
	{
		path: '/users',
		name: 'Users',
		component: () => import('../views/usersView'),
		meta: {
			title: 'صفحة المستخدمين',
			linkName: 'المستخدمين',
			icon: 'users',
			roles: ['admin']
		}
	},
	// profile
	{
		path: '/profile',
		name: 'Profile',
		component: () => import('../views/ProfileView'),
		meta: {
			title: 'الملف الشخصي',
			linkName: 'الملف الشخصي',
			icon: 'user',
			roles: ['student', 'teacher', 'admin']
		}
	},
	// contact
	{
		path: '/contact',
		name: 'Contact',
		component: () => import('../views/ContactView'),
		meta: {
			title: 'تواصل معنا',
			linkName: 'التواصل',
			icon: 'contact'
		}
	}
];
const router = createRouter({
  history: createWebHistory(),
  routes
});
// sidebar
export const isSide = ref(true);
export const isClose = ref(false);


// Before Each
router.beforeEach((to, from, next) => {
	// اسم الصفحة
	document.title = `${to.meta.title} | طموح`;

	// إمتا يظهر الشريط الجانبي
	if (['/register', '/login'].includes(to.path)) {
		isSide.value = false
	} else {
		isSide.value = true;
	};

	// حمياة العناوين
	if (!to.meta?.roles) return next();

	const role = localStorage.getItem('role') || '';
	if (!role) return next('/login');
	if (!to.meta?.roles?.includes(role)) return next('/');


	//  - قفل الشريط بعد الانتقال 
	if (window.matchMedia('(max-width: 767px)').matches) {
		isClose.value = true;
	};

	next();
});

export default router;
