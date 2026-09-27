<template>
	<section class="features">
		<div class="section-header">
			<span class="section-badge">المميزات</span>
			<h2 class="section-title">لماذا <span class="highlight">طموح</span>؟</h2>
			<p class="section-desc">كل ما تحتاجه لإدارة الاختبارات في مكان واحد</p>
		</div>

		<div class="features-grid">
			<div v-for="(feature, i) in features" :key="i" class="feature-card">
				<div class="icon-box">
					<HugeiconsIcon :icon="$icons[feature.icon]" :size="26" />
				</div>
				<h3 class="feature-title">{{ feature.title }}</h3>
				<p class="feature-desc">{{ feature.desc }}</p>
			</div>
		</div>
	</section>
</template>

<script setup>
import { computed } from 'vue';

const features = [
	{
		icon: 'time',
		title: 'إدارة ذكية للوقت',
		desc: 'مؤقت تلقائي لكل اختبار، مع تسليم تلقائي عند انتهاء الوقت.',
	},
	{
		icon: 'circleCheck',
		title: 'نتائج فورية',
		desc: 'تصحيح تلقائي للأسئلة الموضوعية، وعرض النتائج مباشرة بعد التسليم.',
	},
	{
		icon: 'shield',
		title: 'حماية متقدمة',
		desc: 'تشفير كلمات المرور، توثيق JWT، وحماية من هجمات القوة العمياء.',
	},
	{
		icon: 'dashboard',
		title: 'لوحة تحكم للمعلم',
		desc: 'إنشاء اختبارات، إضافة أسئلة وخيارات، ومتابعة نتائج الطلاب.',
	},
	{
		icon: 'bubbles',
		title: 'تجربة طالب سلسة',
		desc: 'واجهة بسيطة لأداء الاختبارات، مع حفظ تلقائي للإجابات.',
	},
	{
		icon: 'responsev',
		title: 'متجاوب مع الجوال',
		desc: 'يعمل بسلاسة على جميع الأجهزة، من الجوال إلى الحاسوب.',
	},
];
</script>

<style lang="scss" scoped>
.features {
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

	.features-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 20px;

		.feature-card {
			padding: 28px;
			border-radius: 22px;
			background-color: var(--bg-secondary);
			border: 1px solid rgba(255, 255, 255, 0.05);
			transition: all 0.3s ease;
			cursor: default;

			&:hover {
				border-color: rgba(255, 169, 8, 0.25);
				transform: translateY(-4px);
				box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);

				.icon-box {
					background-color: rgba(255, 169, 8, 0.15);
					transform: scale(1.05);

					svg {
						color: var(--primary);
					}
				}
			}

			.icon-box {
				width: 56px;
				height: 56px;
				display: flex;
				align-items: center;
				justify-content: center;
				border-radius: 16px;
				background-color: rgba(255, 255, 255, 0.04);
				margin-bottom: 20px;
				transition: all 0.3s ease;

				svg {
					color: var(--text-secondary);
					transition: color 0.3s ease;
				}
			}

			.feature-title {
				font-size: 19px;
				font-weight: bold;
				color: var(--text-primary);
				margin-bottom: 10px;
			}

			.feature-desc {
				font-family: mada;
				font-size: 15px;
				line-height: 1.7;
				color: var(--text-secondary);
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

		.features-grid {
			grid-template-columns: 1fr;
			gap: 16px;

			.feature-card {
				padding: 20px;
			}
		}
	}
}
</style>
