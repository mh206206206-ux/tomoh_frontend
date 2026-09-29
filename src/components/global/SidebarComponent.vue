<template>
	<aside class="sidebar" :class="{'close': isClose}">
		<header>
			<div class="logo">
				<HugeiconsIcon :icon="$icons.grade" :stroke-width="2.2" :size="34" class="grade" />
				<h3 class="heading">منصة طموح</h3>
			</div>
			<div class="actions">
				<HugeiconsIcon :icon="$icons.search" :stroke-width="1.5" :size="30" class="search" />
				<HugeiconsIcon :icon="$icons.side" :stroke-width="1.9" :size="28" class="side" @click="isClose = true" />
			</div>
		</header>
		<nav>
			<ul>
				<li v-for="route in routes" :class="route.meta.icon">
					<router-link :to="route.path">
						<HugeiconsIcon :icon="$icons[route.meta?.icon]" :stroke-width="2" />
						<span>{{ route.meta?.linkName }}</span>
					</router-link>
				</li>
			</ul>
		</nav>
		<footer>
			<div class="content">
				<div class="user-info">
					<div class="profile-image">
						<img v-if="profileImg" :src="profileImg">
						<div v-if="!profileImg" class="alt-img"></div>
					</div>
					<div class="text-info">
						<span class="name">{{ name }}</span>
						<span class="role">{{ role }}</span>
					</div>
				</div>
				<div class="actions">
					<div class="settings">
						<HugeiconsIcon :icon="$icons.settings" :size="30" />
					</div>
				</div>
			</div>
		</footer>
	</aside>
</template>

<script setup>
import { inject, ref, computed, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();


// INJECT
const user = inject('user');

// DATA
const name = computed(() => user.value?.name || 'زائر');
const role = computed(() => user.value?.role || '');
const profileImg = computed(() => user.value?.profile_image || '');
const routes = computed(() => {
	return router.options.routes.filter(route => {
		if (['/register', '/login'].includes(route.path)) return false;

		if (!route.meta?.roles) return true;
		return route.meta.roles.includes(role.value);
	});
});
import { isClose } from '../../router';

// SCRIPT
const mediaQueryChange = window.matchMedia('(max-width: 912px)');
function handleCange(e) {
	if (e.matches) {
		isClose.value = true;
	} else {
		isClose.value = false;
	}
};

// onMounted
onMounted(() => {
	mediaQueryChange.addEventListener('change', handleCange);
	handleCange(mediaQueryChange);
});

// onUnmounte
onUnmounted(() => {
	mediaQueryChange.removeEventListener('change', handleCange);
});

</script>

<style lang="scss" scoped>
aside.sidebar {
	display: flex;
	flex-direction: column;
	position: fixed;
	height: 98dvh;
	width: 300px;
	top: 50%;
	right: 0;
	transform: translateY(-50%);
	padding: 20px 12px;
	border-radius: 30px 0 0 30px;
	border: 1px solid var(--border-white);
	background-color: var(--bg-primary);
	box-shadow: -6px 0 7px rgba(0, 0, 0, 0.2);
	white-space: nowrap;
	overflow: hidden;
	z-index: 1000;
	transition: .3s;

	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-bottom: 25px;
		margin-bottom: 25px;
		border-bottom: 1px solid var(--border-white);

		.logo {
			display: flex;
			align-items: center;
			gap: 10px;

			svg.grade {
				padding: 4px;
				border-radius: 7px;
				background-color: rgba(255, 255, 255, 0.05);
				color: rgb(255, 169, 8);
			}

			h3.heading {
				font-weight: bold;
			}
		}

		.actions {
			display: flex;
			align-items: center;

			svg.search,
			svg.side {
				padding: 5px;
				border-radius: 10px;
				transition: var(--trans-02);
				cursor: pointer;

				&:hover {
					background-color: var(--bg-white-hover);
				}
			}
		}
	}

	nav {
		ul {
			display: flex;
			flex-direction: column;
			gap: 10px;

			li {
				a {
					display: flex;
					align-items: center;
					gap: 5px;
					padding: 8px 12px;
					border-radius: 15px;
					transition: var(--trans-02);

					&:hover {
						background-color: rgba(255, 255, 255, 0.015);
					}

					svg,
					span {
						color: rgba(255, 255, 255, 0.8);
						transition: var(--trans-02);
					}
				}
				a.router-link-exact-active {
					background-color: rgba(255, 255, 255, 0.03);

					svg {
						color: rgb(255, 179, 0);
					}

					span {
						color: white;
					}
				}
			}
			li.home,
			li.result {
				margin-bottom: 25px;
			}
		}
	}

	footer {
		margin-top: auto;
		
		.content {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 15px;
			border-radius: 25px;
			background: linear-gradient(135deg, rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0.1));

			.user-info {
				display: flex;
				align-items: center;
				gap: 10px;

				.profile-image {
					.alt-img {
						width: 50px;
						height: 50px;
						border-radius: 50%;
						background-color: var(--bg-primary);
					}
					.alt-img,
					img {
						cursor: pointer;
					}
				}
				
				.text-info {
					display: flex;
					flex-direction: column;

					span.name {
						color: var(--text-primary);
						font-family: mada;
						font-weight: bold;
						font-size: 18px;
					}
					span.role {
						color: var(--text-secondary);
						font-family: mada;
					}
				}
			}
			.actions {
				.settings {
					display: flex;
					align-items: center;

					svg {
						padding: 4px;
						border-radius: 10px;
						transition: var(--trans-02);
						cursor: pointer;

						&:hover {
							background-color: var(--bg-white-hover);
						}
					}
				}
			}
		}
	}
}
aside.sidebar.close {
  width: 0px;
	padding: 20px 0;
	border-color: transparent;
  pointer-events: none;
}
</style>
