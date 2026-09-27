import axios from 'axios';

const api = axios.create({
	baseURL: 'https://tomoh-backend.onrender.com/api',
	timeout: 10000,
	headers: {
		'Content-Type': 'application/json'
	}
});

// إضافة التكون تلقائي مع الطلب
api.interceptors.request.use(
	(config) => {
		const token = localStorage.getItem('token');
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		};
		return config;
	},
	(error) => Promise.reject(error)
);

// معالجة الأخطاء
api.interceptors.response.use(
	(config) => config,
	(error) => {
		const status = error.response?.status;
		const url = error.config?.url || '';

		if (status === 401 && !url.includes('/auth/login') && !url.includes('/auth/register')) {
			localStorage.removeItem('token');
			localStorage.removeItem('role');

			if (window.location.href !== '/login') {
				window.location.href = '/login';
			};
		};

		return Promise.reject(error);
	}
);

export default api;
