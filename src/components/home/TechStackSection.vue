<template>
	<section class="tech-stack">
		<div class="section-header">
			<span class="section-badge">التقنيات</span>
			<h2 class="section-title">مبنية بـ <span class="highlight">أحدث التقنيات</span></h2>
			<p class="section-desc">نستخدم أدوات حديثة لضمان الأداء والأمان</p>
		</div>

		<div class="tech-grid">
			<div v-for="(tech, i) in techs" :key="i" class="tech-card">
				<div class="tech-icon" :style="{ backgroundColor: tech.bg }">
					<HugeiconsIcon v-if="tech.iconName" :icon="$icons[tech.iconName]" :size="26" :style="{ color: tech.color }" />
					<i v-if="!tech.iconName" :class="tech.iconClass" :style="[{ color: tech.color }, { fontSize: 24 + 'px' }]" ></i>
				</div>
				<h3 class="tech-title">{{ tech.title }}</h3>
				<p class="tech-desc">{{ tech.desc }}</p>
				<div class="tech-tags">
					<span v-for="(tag, j) in tech.tags" :key="j" class="tag">{{ tag }}</span>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
const techs = [
	{
		iconClass: 'fa-brands fa-vuejs',
		title: 'Vue.js 3',
		desc: 'واجهة أمامية حديثة وسريعة',
		color: '#42b883',
		bg: 'rgba(66, 184, 131, 0.1)',
		tags: ['Composition API', 'Vue Router', 'Pinia'],
	},
	{
		iconClass: 'fa-brands fa-node-js',
		title: 'Node.js + Express',
		desc: 'خادم قوي وقابل للتوسع',
		color: '#68a063',
		bg: 'rgba(104, 160, 99, 0.1)',
		tags: ['REST API', 'JWT', 'Middleware'],
	},
	{
		iconClass: 'fa-brands fa-postgresql',
		title: 'PostgreSQL',
		desc: 'قاعدة بيانات علائقية موثوقة',
		color: '#336791',
		bg: 'rgba(51, 103, 145, 0.1)',
		tags: ['Transactions', 'JSON', 'Indexes'],
	},
	{
		iconName: 'shield',
		title: 'الأمان',
		desc: 'حماية متعددة الطبقات',
		color: '#ffa908',
		bg: 'rgba(255, 169, 8, 0.1)',
		tags: ['bcrypt', 'JWT', 'Rate Limit'],
	},
];
</script>

<style lang="scss" scoped>
.tech-stack {
	padding: 80px 24px;
	max-width: 1200px;
	margin: 0 auto;

	.section-header {
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

		.section-title {
			font-size: 40px;
			font-weight: bold;
			color: var(--text-primary);
			margin-bottom: 12px;

			.highlight {
				color: var(--primary);
			}
		}

		.section-desc {
			font-family: mada;
			font-size: 16px;
			color: var(--text-secondary);
		}
	}

	.tech-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
		gap: 20px;

		.tech-card {
			padding: 28px;
			border-radius: 22px;
			background-color: var(--bg-secondary);
			border: 1px solid rgba(255, 255, 255, 0.05);
			transition: all 0.3s ease;

			&:hover {
				border-color: rgba(255, 169, 8, 0.25);
				transform: translateY(-4px);
			}

			.tech-icon {
				width: 56px;
				height: 56px;
				display: flex;
				align-items: center;
				justify-content: center;
				border-radius: 16px;
				margin-bottom: 18px;
			}

			.tech-title {
				font-size: 19px;
				font-weight: bold;
				color: var(--text-primary);
				margin-bottom: 8px;
			}

			.tech-desc {
				font-family: mada;
				font-size: 15px;
				color: var(--text-secondary);
				margin-bottom: 16px;
			}

			.tech-tags {
				display: flex;
				flex-wrap: wrap;
				gap: 6px;

				.tag {
					padding: 4px 10px;
					border-radius: 8px;
					background-color: rgba(255, 255, 255, 0.04);
					border: 1px solid rgba(255, 255, 255, 0.06);
					color: var(--text-secondary);
					font-family: mada;
					font-size: 12px;
				}
			}
		}
	}

	@media (max-width: 767px) {
		padding: 60px 16px;

		.section-header {
			margin-bottom: 40px;

			.section-title {
				font-size: 28px;
			}
		}

		.tech-grid {
			grid-template-columns: 1fr;
			gap: 16px;
		}
	}
}
</style>
