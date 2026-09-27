<template>
	<div class="contact-view">
		<!-- Header -->
		<div class="page-header">
			<span class="section-badge">تواصل معنا</span>
			<h1 class="page-title">تواصل مع <span class="highlight">طموح</span></h1>
			<p class="page-desc">
				نحن هنا لمساعدتك. اختر المنصة التي تفضلها للتواصل معنا.
			</p>
		</div>

		<!-- Socials Grid -->
		<div class="socials-grid">
			<a
				v-for="(social, i) in socials"
				:key="i"
				:href="social.link"
				target="_blank"
				rel="noopener"
				class="social-card"
				:style="{ '--social-color': social.color, '--social-bg': social.bg }"
			>
				<div class="social-icon">
					<HugeiconsIcon :icon="$icons[social.iconName]" :size="26" />
				</div>
				<div class="social-info">
					<h3 class="social-name">{{ social.name }}</h3>
					<span class="social-handle">{{ social.handle }}</span>
				</div>
				<div class="social-arrow">
					<HugeiconsIcon :icon="$icons.arrowLeft" :size="18" />
				</div>
			</a>
		</div>

		<!-- Direct Contact -->
		<div class="direct-contact">
			<div class="direct-card">
				<div class="direct-icon">
					<HugeiconsIcon :icon="$icons.mail" :size="26" />
				</div>
				<div class="direct-info">
					<h3>البريد الإلكتروني</h3>
					<p>contact@tomoh.com</p>
				</div>
				<a href="mailto:contact@tomoh.com" class="direct-btn">إرسال</a>
			</div>

			<div class="direct-card">
				<div class="direct-icon">
					<HugeiconsIcon :icon="$icons.location" :size="26" />
				</div>
				<div class="direct-info">
					<h3>الموقع</h3>
					<p>القصيم المملكة العربية السعودية</p>
				</div>
				<a href="#" class="direct-btn">الاتجاهات</a>
			</div>
		</div>
	</div>
</template>

<script setup>
const socials = [
	{
		name: 'GitHub',
		handle: '@tomoh',
		link: 'https://github.com',
		iconName: 'github',
		color: '#ffffff',
		bg: 'rgba(255, 255, 255, 0.08)',
	},
	{
		name: 'LinkedIn',
		handle: '/company/tomoh',
		link: 'https://linkedin.com',
		iconName: 'linkedin',
		color: '#0a66c2',
		bg: 'rgba(10, 102, 194, 0.12)',
	},
	{
		name: 'Twitter / X',
		handle: '@tomoh',
		link: 'https://twitter.com',
		iconName: 'twitter',
		color: '#1d9bf0',
		bg: 'rgba(29, 155, 240, 0.12)',
	},
	{
		name: 'Instagram',
		handle: '@tomoh',
		link: 'https://instagram.com',
		iconName: 'instagram',
		color: '#e1306c',
		bg: 'rgba(225, 48, 108, 0.12)',
	},
	{
		name: 'YouTube',
		handle: '/@tomoh',
		link: 'https://youtube.com',
		iconName: 'youtube',
		color: '#ff0000',
		bg: 'rgba(255, 0, 0, 0.12)',
	},
	{
		name: 'Telegram',
		handle: '@tomoh',
		link: 'https://telegram.org',
		iconName: 'telegram',
		color: '#229ed9',
		bg: 'rgba(34, 158, 217, 0.12)',
	},
	{
		name: 'WhatsApp',
		handle: '+966 5x xxx xxxx',
		link: 'https://whatsapp.com',
		iconName: 'whatsapp',
		color: '#25d366',
		bg: 'rgba(37, 211, 102, 0.12)',
	},
	{
		name: 'Discord',
		handle: 'tomoh#1234',
		link: 'https://discord.com',
		iconName: 'discord',
		color: '#5865f2',
		bg: 'rgba(88, 101, 242, 0.12)',
	},
	{
		name: 'Facebook',
		handle: '/tomoh',
		link: 'https://facebook.com',
		iconName: 'facebook',
		color: '#1877f2',
		bg: 'rgba(24, 119, 242, 0.12)',
	},
	{
		name: 'TikTok',
		handle: '@tomoh',
		link: 'https://tiktok.com',
		iconName: 'tiktok',
		color: '#ff0050',
		bg: 'rgba(255, 0, 80, 0.12)',
	},
];
</script>

<style lang="scss" scoped>
.contact-view {
	min-height: 100vh;
	padding: 100px 24px 60px;
	max-width: 1200px;
	margin: 0 auto;

	.page-header {
		text-align: center;
		margin-bottom: 60px;

		.section-badge {
			display: inline-block;
			padding: 6px 14px;
			border-radius: 50px;
			background-color: rgba(255, 169, 8, 0.08);
			border: 1px solid rgba(255, 169, 8, 0.2);
			color: var(--primary);
			font-family: mada;
			font-size: 13px;
			margin-bottom: 16px;
		}

		.page-title {
			font-size: 44px;
			font-weight: bold;
			color: var(--text-primary);
			margin-bottom: 12px;

			.highlight {
				color: var(--primary);
			}
		}

		.page-desc {
			font-family: mada;
			font-size: 16px;
			color: var(--text-secondary);
			max-width: 500px;
			margin: 0 auto;
		}
	}

	// ✅ Socials Grid
	.socials-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 16px;
		margin-bottom: 60px;

		.social-card {
			display: flex;
			align-items: center;
			gap: 16px;
			padding: 20px;
			border-radius: 20px;
			background-color: var(--bg-secondary);
			border: 1px solid rgba(255, 255, 255, 0.05);
			text-decoration: none;
			transition: all 0.3s ease;
			cursor: pointer;

			&:hover {
				border-color: var(--social-color);
				transform: translateY(-3px);
				box-shadow: 0 12px 28px rgba(0, 0, 0, 0.25);

				.social-icon {
					background-color: var(--social-bg);
					transform: scale(1.05);

					svg {
						color: var(--social-color);
					}
				}

				.social-arrow {
					color: var(--social-color);
					transform: translateX(-4px);
				}
			}

			.social-icon {
				width: 52px;
				height: 52px;
				display: flex;
				align-items: center;
				justify-content: center;
				border-radius: 16px;
				background-color: rgba(255, 255, 255, 0.04);
				transition: all 0.3s ease;
				flex-shrink: 0;

				svg {
					color: var(--text-secondary);
					transition: color 0.3s ease;
				}
			}

			.social-info {
				flex: 1;
				display: flex;
				flex-direction: column;
				gap: 4px;
				min-width: 0;

				.social-name {
					font-size: 17px;
					font-weight: bold;
					color: var(--text-primary);
				}

				.social-handle {
					font-family: mada;
					font-size: 14px;
					color: var(--text-secondary);
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
				}
			}

			.social-arrow {
				color: var(--text-secondary);
				transition: all 0.3s ease;
				flex-shrink: 0;
			}
		}
	}

	// ✅ Direct Contact
	.direct-contact {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 16px;

		.direct-card {
			display: flex;
			align-items: center;
			gap: 16px;
			padding: 24px;
			border-radius: 22px;
			background: linear-gradient(135deg, rgba(255, 169, 8, 0.06), rgba(255, 169, 8, 0.02));
			border: 1px solid rgba(255, 169, 8, 0.15);

			.direct-icon {
				width: 56px;
				height: 56px;
				display: flex;
				align-items: center;
				justify-content: center;
				border-radius: 16px;
				background-color: rgba(255, 169, 8, 0.1);
				flex-shrink: 0;

				svg {
					color: var(--primary);
				}
			}

			.direct-info {
				flex: 1;

				h3 {
					font-size: 16px;
					font-weight: bold;
					color: var(--text-primary);
					margin-bottom: 4px;
				}

				p {
					font-family: mada;
					font-size: 14px;
					color: var(--text-secondary);
				}
			}

			.direct-btn {
				padding: 10px 20px;
				border-radius: 12px;
				background: linear-gradient(135deg, #ffa908, #ffb92e);
				color: #141414;
				font-family: mada;
				font-size: 14px;
				font-weight: 600;
				text-decoration: none;
				transition: all 0.3s ease;
				flex-shrink: 0;

				&:hover {
					transform: translateY(-2px);
					box-shadow: 0 8px 20px rgba(255, 169, 8, 0.3);
				}
			}
		}
	}

	// ✅ Responsive
	@media (max-width: 767px) {
		padding: 80px 16px 40px;

		.page-header {
			margin-bottom: 40px;

			.page-title {
				font-size: 28px;
			}
		}

		.socials-grid {
			grid-template-columns: 1fr;
			gap: 12px;
			margin-bottom: 40px;

			.social-card {
				padding: 16px;

				.social-icon {
					width: 44px;
					height: 44px;
				}
			}
		}

		.direct-contact {
			grid-template-columns: 1fr;
			gap: 12px;

			.direct-card {
				flex-wrap: wrap;
				padding: 18px;

				.direct-btn {
					width: 100%;
					text-align: center;
				}
			}
		}
	}

	@media (max-width: 480px) {
		.page-header {
			.page-title {
				font-size: 24px;
			}
		}

		.socials-grid {
			.social-card {
				.social-info {
					.social-handle {
						font-size: 13px;
					}
				}
			}
		}
	}
}
</style>
