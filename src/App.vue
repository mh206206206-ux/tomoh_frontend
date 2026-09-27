<template>
	<div class="page">
		<div v-if="!isClose && !['/register', '/login'].includes(route.path)" class="over-page"></div>
		<div v-if="isSide && isClose" class="actions">
			<HugeiconsIcon :icon="$icons.search" :stroke-width="1.7" :size="28" class="search" />
			<HugeiconsIcon :icon="$icons.side" :stroke-width="1.9" :size="26" class="side" @click="isClose = false" />
		</div>

		<SidebarComponent v-if="isSide" />
		<main :class="['content', { 'grow': isClose || !isSide }]">
			<router-view />
		</main>
	</div>
</template>

<script setup>
import { ref, onMounted, provide } from 'vue';
import { useRoute } from 'vue-router';
import api from './api/axios';
import SidebarComponent from './components/global/SidebarComponent';

const route = useRoute();


// DATA
const user = ref(null);
import { isSide } from './router';
const isClose = ref(false);

// onMOUNTED
onMounted(async () => {
	// جلب بيانات المستخدم
	const token = localStorage.getItem('token') || '';

	try {
		if (token) {
			const res = await api.get('/auth/me');
			user.value = res.data?.user;
		} else {
			user.value = null;
			return;
		}
	} catch (error) {
		user.value = null;
	}
});

// PROVIDE
provide('user', user);
provide('isClose', isClose);
</script>

<style lang="scss" scoped>
.page {
	min-height: 100vh;
	background-color: #161616;

	.over-page {
		display: none;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.3);
		backdrop-filter: blur(10px);
		z-index: 998;
	}

	.actions {
		display: flex;
		align-items: center;
		position: fixed;
		right: 20px;
		top: 20px;
		padding: 2px 5px;
		border-radius: 30px;
		background-color: var(--bg-secondary);
		backdrop-filter: blur(50px);
		z-index: 999;

		svg {
			padding: 4px;
			border-radius: 50%;
			transition: var(--trans-02);
			cursor: pointer;

			&:hover {
				background-color: var(--bg-white-hover);
			}
		}
	}

	main.content {
		position: fixed;
		top: 50%;
		right: 320px;
		transform: translateY(-50%);
		height: 98vh;
		width: calc(100% - 320px);
		border-radius: 0 30px 30px 0;
		border: 1px solid var(--border-white);
		background-color: var(--bg-primary);
		overflow-y: auto;
		overflow-x: hidden;
		transition: .3s;

		&.grow {
			right: 10px;
			width: calc(100% - 10px);
		}
	}
}

@media (max-width: 912px) {
	.page .over-page {
		display: block;
	}

	.page main.content {
		right: 10px;
		width: calc(100% - 10px);
	}
};
</style>
