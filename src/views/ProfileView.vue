<template>
	<div class="profile-view">
		<div class="profile-box">
			<!-- Header -->
			<header class="profile-header">
				<div class="avatar-section">
					<div class="avatar">
						<img v-if="user.profile_image" :src="user.profile_image" :alt="user.name" />
						<div v-else class="avatar-alt">
							<HugeiconsIcon :icon="$icons.user" :size="40" />
						</div>
					</div>
					<div class="user-info">
						<h2 class="user-name">{{ user.name || 'زائر' }}</h2>
						<span class="user-role">{{ roleLabel }}</span>
					</div>
				</div>
				<button class="edit-btn">
					<HugeiconsIcon :icon="$icons.pen" :size="18" />
					تعديل
				</button>
			</header>

			<!-- Info Cards -->
			<div class="info-grid">
				<div class="info-card">
					<div class="info-icon">
						<HugeiconsIcon :icon="$icons.mail" :size="20" />
					</div>
					<div class="info-content">
						<span class="info-label">البريد الإلكتروني</span>
						<span class="info-value">{{ user.email || 'غير محدد' }}</span>
					</div>
				</div>

				<div class="info-card">
					<div class="info-icon">
						<HugeiconsIcon :icon="$icons.user" :size="20" />
					</div>
					<div class="info-content">
						<span class="info-label">الصلاحية</span>
						<span class="info-value">{{ roleLabel }}</span>
					</div>
				</div>
			</div>

			<!-- Chart -->
			<div class="chart-section">
				<div class="chart-header">
					<h3 class="chart-title">النشاط الأسبوعي</h3>
					<span class="chart-desc">عدد الاختبارات في آخر 7 أيام</span>
				</div>
				<div class="chart-bars">
					<div v-for="(day, i) in weekActivity" :key="i" class="bar-item">
						<div class="bar-wrapper">
							<div 
								class="bar" 
								:style="{ height: `${(day.value / maxActivity) * 100}%` }"
							>
								<span class="bar-value">{{ day.value }}</span>
							</div>
						</div>
						<span class="bar-label">{{ day.label }}</span>
					</div>
				</div>
			</div>

			<!-- Socials -->
			<div class="socials-section">
				<div class="socials-header">
					<h3 class="socials-title">منصات التواصل</h3>
					<span class="socials-desc">منصات التواصل الخاصة بك</span>
				</div>
				<div class="socials-grid">
					<a
						v-for="(social, i) in socials"
						:key="i"
						:href="social.link"
						target="_blank"
						rel="noopener"
						class="social-item"
						:style="{ '--social-color': social.color, '--social-bg': social.bg }"
					>
						<div class="social-icon">
							<HugeiconsIcon :icon="$icons[social.iconName]" :size="20" />
						</div>
						<span class="social-name">{{ social.name }}</span>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, computed, inject } from 'vue';

// ✅ User من provide
const userRef = inject('user', ref(null));

const user = computed(() => userRef.value || {});

const roleLabel = computed(() => {
	const roles = {
		student: 'طالب',
		teacher: 'معلم',
		admin: 'أدمن',
	};
	return roles[user.value.role] || 'بلا صلاحية';
});

// ✅ Weekly Activity (بيانات مؤقتة)
const weekActivity = ref([
	{ label: 'السبت', value: 0 },
	{ label: 'الأحد', value: 5 },
	{ label: 'الاثنين', value: 2 },
	{ label: 'الثلاثاء', value: 7 },
	{ label: 'الأربعاء', value: 4 },
	{ label: 'الخميس', value: 6 },
	{ label: 'الجمعة', value: 1 },
]);

const maxActivity = computed(() => Math.max(...weekActivity.value.map(d => d.value), 1));

// ✅ Socials
const socials = [
	{ name: 'GitHub', link: 'https://github.com', iconName: 'github', color: '#ffffff', bg: 'rgba(255, 255, 255, 0.08)' },
	{ name: 'LinkedIn', link: 'https://linkedin.com', iconName: 'linkedin', color: '#0a66c2', bg: 'rgba(10, 102, 194, 0.12)' },
	{ name: 'Twitter', link: 'https://twitter.com', iconName: 'twitter', color: '#1d9bf0', bg: 'rgba(29, 155, 240, 0.12)' },
	{ name: 'Instagram', link: 'https://instagram.com', iconName: 'instagram', color: '#e1306c', bg: 'rgba(225, 48, 108, 0.12)' },
	{ name: 'YouTube', link: 'https://youtube.com', iconName: 'youtube', color: '#ff0000', bg: 'rgba(255, 0, 0, 0.12)' },
	{ name: 'Telegram', link: 'https://telegram.org', iconName: 'telegram', color: '#229ed9', bg: 'rgba(34, 158, 217, 0.12)' },
	{ name: 'WhatsApp', link: 'https://whatsapp.com', iconName: 'whatsapp', color: '#25d366', bg: 'rgba(37, 211, 102, 0.12)' },
	{ name: 'Discord', link: 'https://discord.com', iconName: 'discord', color: '#5865f2', bg: 'rgba(88, 101, 242, 0.12)' },
];
</script>

<style lang="scss" scoped>
.profile-view {
	min-height: 100%;
	padding: 100px 24px 60px;
	display: flex;
	justify-content: center;
	align-items: flex-start;

	.profile-box {
		width: 100%;
		max-width: 700px;
		padding: 32px;
		border-radius: 28px;
		background-color: var(--bg-secondary);
		border: 1px solid rgba(255, 255, 255, 0.05);
		box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);

		// ✅ Header
		.profile-header {
			display: flex;
			align-items: center;
			justify-content: space-between;
			gap: 16px;
			padding-bottom: 24px;
			border-bottom: 1px solid rgba(255, 255, 255, 0.05);
			margin-bottom: 24px;

			.avatar-section {
				display: flex;
				align-items: center;
				gap: 16px;

				.avatar {
					width: 70px;
					height: 70px;
					border-radius: 50%;
					overflow: hidden;
					border: 2px solid rgba(255, 169, 8, 0.3);
					flex-shrink: 0;

					img {
						width: 100%;
						height: 100%;
						object-fit: cover;
					}

					.avatar-alt {
						width: 100%;
						height: 100%;
						display: flex;
						align-items: center;
						justify-content: center;
						background-color: rgba(255, 169, 8, 0.08);

						svg {
							color: var(--primary);
						}
					}
				}

				.user-info {
					display: flex;
					flex-direction: column;
					gap: 4px;

					.user-name {
						font-size: 22px;
						font-weight: bold;
						color: var(--text-primary);
					}

					.user-role {
						font-family: mada;
						font-size: 14px;
						color: var(--primary);
						padding: 3px 10px;
						border-radius: 8px;
						background-color: rgba(255, 169, 8, 0.08);
						width: fit-content;
					}
				}
			}

			.edit-btn {
				display: flex;
				align-items: center;
				gap: 6px;
				padding: 10px 18px;
				border-radius: 14px;
				background-color: rgba(255, 169, 8, 0.08);
				border: 1px solid rgba(255, 169, 8, 0.2);
				color: var(--primary);
				font-family: mada;
				font-size: 14px;
				font-weight: 600;
				cursor: pointer;
				transition: all 0.3s ease;
				flex-shrink: 0;

				&:hover {
					background-color: rgba(255, 169, 8, 0.15);
					border-color: var(--primary);
				}
			}
		}

		// ✅ Info Grid
		.info-grid {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			gap: 12px;
			margin-bottom: 24px;

			.info-card {
				display: flex;
				align-items: center;
				gap: 12px;
				padding: 16px;
				border-radius: 16px;
				background-color: var(--bg-primary);
				border: 1px solid rgba(255, 255, 255, 0.05);
				transition: all 0.3s ease;

				&:hover {
					border-color: rgba(255, 169, 8, 0.2);
				}

				.info-icon {
					width: 40px;
					height: 40px;
					display: flex;
					align-items: center;
					justify-content: center;
					border-radius: 12px;
					background-color: rgba(255, 169, 8, 0.08);
					flex-shrink: 0;

					svg {
						color: var(--primary);
					}
				}

				.info-content {
					display: flex;
					flex-direction: column;
					gap: 2px;
					min-width: 0;

					.info-label {
						font-family: mada;
						font-size: 12px;
						color: var(--text-secondary);
					}

					.info-value {
						font-family: mada;
						font-size: 15px;
						font-weight: 600;
						color: var(--text-primary);
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
					}
				}
			}
		}

		// ✅ Chart
		.chart-section {
			padding: 20px;
			border-radius: 20px;
			background-color: var(--bg-primary);
			border: 1px solid rgba(255, 255, 255, 0.05);
			margin-bottom: 24px;

			.chart-header {
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin-bottom: 24px;

				.chart-title {
					font-size: 16px;
					font-weight: bold;
					color: var(--text-primary);
				}

				.chart-desc {
					font-family: mada;
					font-size: 13px;
					color: var(--text-secondary);
				}
			}

			.chart-bars {
				display: flex;
				align-items: flex-end;
				justify-content: space-between;
				gap: 8px;
				height: 140px;

				.bar-item {
					flex: 1;
					display: flex;
					flex-direction: column;
					align-items: center;
					gap: 8px;
					height: 100%;

					.bar-wrapper {
						flex: 1;
						width: 100%;
						display: flex;
						align-items: flex-end;
						justify-content: center;

						.bar {
							width: 100%;
							max-width: 32px;
							border-radius: 8px 8px 4px 4px;
							background: linear-gradient(180deg, var(--primary), #ff6b00);
							position: relative;
							transition: all 0.4s ease;
							min-height: 8px;

							&:hover {
								filter: brightness(1.2);
							}

							.bar-value {
								position: absolute;
								top: -22px;
								left: 50%;
								transform: translateX(-50%);
								font-family: mada;
								font-size: 12px;
								font-weight: bold;
								color: var(--primary);
							}
						}
					}

					.bar-label {
						font-family: mada;
						font-size: 11px;
						color: var(--text-secondary);
					}
				}
			}
		}

		// ✅ Socials
		.socials-section {
			padding-top: 24px;
			border-top: 1px solid rgba(255, 255, 255, 0.05);

			.socials-header {
				margin-bottom: 16px;

				.socials-title {
					font-size: 16px;
					font-weight: bold;
					color: var(--text-primary);
					margin-bottom: 4px;
				}

				.socials-desc {
					font-family: mada;
					font-size: 13px;
					color: var(--text-secondary);
				}
			}

			.socials-grid {
				display: grid;
				grid-template-columns: repeat(4, 1fr);
				gap: 8px;

				.social-item {
					display: flex;
					flex-direction: column;
					align-items: center;
					gap: 6px;
					padding: 12px 8px;
					border-radius: 14px;
					background-color: var(--bg-primary);
					border: 1px solid rgba(255, 255, 255, 0.05);
					text-decoration: none;
					transition: all 0.3s ease;

					&:hover {
						border-color: var(--social-color);
						transform: translateY(-2px);

						.social-icon {
							background-color: var(--social-bg);

							svg {
								color: var(--social-color);
							}
						}
					}

					.social-icon {
						width: 36px;
						height: 36px;
						display: flex;
						align-items: center;
						justify-content: center;
						border-radius: 10px;
						background-color: rgba(255, 255, 255, 0.04);
						transition: all 0.3s ease;

						svg {
							color: var(--text-secondary);
							transition: color 0.3s ease;
						}
					}

					.social-name {
						font-family: mada;
						font-size: 11px;
						color: var(--text-secondary);
						text-align: center;
					}
				}
			}
		}
	}

	// ✅ Responsive
	@media (max-width: 767px) {
		padding: 80px 16px 40px;

		.profile-box {
			padding: 20px;

			.profile-header {
				flex-direction: column;
				align-items: stretch;

				.edit-btn {
					justify-content: center;
				}
			}

			.info-grid {
				grid-template-columns: 1fr;
			}

			.chart-section {
				padding: 16px;

				.chart-bars {
					height: 120px;

					.bar-item {
						.bar-wrapper .bar .bar-value {
							font-size: 10px;
						}

						.bar-label {
							font-size: 10px;
						}
					}
				}
			}

			.socials-section {
				.socials-grid {
					grid-template-columns: repeat(4, 1fr);
					gap: 6px;

					.social-item {
						padding: 10px 6px;

						.social-icon {
							width: 32px;
							height: 32px;
						}

						.social-name {
							font-size: 10px;
						}
					}
				}
			}
		}
	}

	@media (max-width: 480px) {
		.profile-box {
			padding: 16px;

			.profile-header {
				.avatar-section {
					.avatar {
						width: 60px;
						height: 60px;
					}

					.user-info .user-name {
						font-size: 18px;
					}
				}
			}

			.socials-section {
				.socials-grid {
					grid-template-columns: repeat(2, 1fr);
				}
			}
		}
	}
}
</style>
