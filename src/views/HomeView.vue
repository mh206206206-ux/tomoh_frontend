<template>
	<div class="home">
		<!-- Navbar -->
		<nav class="navbar" :class="{ 'scrolled': isScrolled }">
			<div class="nav-content">
				<div class="nav-links">
					<a href="#hero">الرئيسية</a>
					<a href="#features">المميزات</a>
					<a href="#how">كيف تعمل؟</a>
					<a href="#tech">التقنيات</a>
					<a href="#contact">تواصل معنا</a>
				</div>
				<div class="nav-actions">
					<router-link to="/login" class="btn-outline">دخول</router-link>
					<router-link to="/register" class="btn-primary">إنشاء حساب</router-link>
				</div>
				<button class="menu-toggle" @click="isMenuOpen = !isMenuOpen">
					<HugeiconsIcon :icon="isMenuOpen ? $icons.close : $icons.menu" :size="24" />
				</button>
			</div>

			<!-- Mobile Menu -->
			<div v-if="isMenuOpen" class="mobile-menu">
				<a href="#hero" @click="isMenuOpen = false">الرئيسية</a>
				<a href="#features" @click="isMenuOpen = false">المميزات</a>
				<a href="#how" @click="isMenuOpen = false">كيف تعمل؟</a>
				<a href="#tech" @click="isMenuOpen = false">التقنيات</a>
				<a href="#contact" @click="isMenuOpen = false">تواصل معنا</a>
				<router-link to="/login" @click="isMenuOpen = false">دخول</router-link>
				<router-link to="/register" @click="isMenuOpen = false">إنشاء حساب</router-link>
			</div>
		</nav>

		<!-- Sections -->
		<div id="hero">
			<HeroSection />
		</div>
		<div id="features">
			<FeaturesSection />
		</div>
		<div id="how">
			<HowItWorksSection />
		</div>
		<div id="tech">
			<TechStackSection />
		</div>
		<div id="contact">
			<ContactSection />
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import HeroSection from '../components/home/HeroSection.vue';
import FeaturesSection from '../components/home/FeaturesSection.vue';
import HowItWorksSection from '../components/home/HowItWorksSection.vue';
import TechStackSection from '../components/home/TechStackSection.vue';
import ContactSection from '../components/home/ContactSection.vue';

// ✅ Navbar Scroll
const isScrolled = ref(false);
const isMenuOpen = ref(false);

function handleScroll() {
	isScrolled.value = window.scrollY > 50;
}

onMounted(() => {
	window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
	window.removeEventListener('scroll', handleScroll);
});
</script>

<style lang="scss" scoped>
.home {
	min-height: 100vh;
	background-color: var(--bg-primary);

	// ✅ Navbar
	.navbar {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 1000;
		padding: 16px 24px;
		transition: all 0.3s ease;

		&.scrolled {
			background-color: rgba(20, 20, 20, 0.85);
			backdrop-filter: blur(12px);
			border-bottom: 1px solid rgba(255, 255, 255, 0.05);
			padding: 12px 24px;
		}

		.nav-content {
			max-width: 1200px;
			margin: 0 auto;
			display: flex;
			align-items: center;
			justify-content: space-between;

			.logo {
				display: flex;
				align-items: center;
				gap: 10px;

				svg {
					color: var(--primary);
				}

				span {
					font-size: 22px;
					font-weight: bold;
					color: var(--text-primary);
				}
			}

			.nav-links {
				display: flex;
				gap: 28px;

				a {
					font-family: mada;
					font-size: 15px;
					color: var(--text-secondary);
					text-decoration: none;
					transition: color 0.2s ease;

					&:hover {
						color: var(--primary);
					}
				}
			}

			.nav-actions {
				display: flex;
				gap: 10px;

				.btn-primary,
				.btn-outline {
					padding: 9px 18px;
					border-radius: 12px;
					font-family: mada;
					font-size: 14px;
					font-weight: 600;
					text-decoration: none;
					transition: all 0.3s ease;
				}

				.btn-primary {
					background: linear-gradient(135deg, #ffa908, #ffb92e);
					color: #141414;

					&:hover {
						transform: translateY(-1px);
						box-shadow: 0 6px 16px rgba(255, 169, 8, 0.3);
					}
				}

				.btn-outline {
					color: var(--text-primary);
					border: 1px solid rgba(255, 255, 255, 0.1);

					&:hover {
						border-color: var(--primary);
						color: var(--primary);
					}
				}
			}

			.menu-toggle {
				display: none;
				background: transparent;
				border: none;
				color: var(--text-primary);
				cursor: pointer;
				padding: 6px;
			}
		}

		.mobile-menu {
			display: none;
			flex-direction: column;
			gap: 14px;
			padding: 20px;
			margin-top: 16px;
			border-radius: 18px;
			background-color: var(--bg-secondary);
			border: 1px solid rgba(255, 255, 255, 0.05);
			animation: fadeIn 0.3s ease;

			a {
				font-family: mada;
				font-size: 16px;
				color: var(--text-secondary);
				text-decoration: none;
				padding: 8px 12px;
				border-radius: 10px;
				transition: all 0.2s ease;

				&:hover {
					background-color: rgba(255, 169, 8, 0.08);
					color: var(--primary);
				}
			}
		}
	}

	// ✅ Responsive
	@media (max-width: 900px) {
		.navbar {
			.nav-content {
				.nav-links {
					display: none;
				}

				.nav-actions {
					display: none;
				}

				.menu-toggle {
					display: flex;
				}
			}

			.mobile-menu {
				display: flex;
			}
		}
	}

	@media (max-width: 767px) {
		.navbar {
			padding: 12px 16px;

			.nav-content {
				.logo span {
					font-size: 18px;
				}
			}
		}
	}
}

@keyframes fadeIn {
	from {
		opacity: 0;
		transform: translateY(-10px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}
</style>
