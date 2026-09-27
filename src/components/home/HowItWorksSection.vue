<template>
	<section class="how-it-works">
		<div class="section-header">
			<span class="section-badge">كيف تعمل؟</span>
			<h2 class="section-title">ثلاث خطوات <span class="highlight">فقط</span></h2>
			<p class="section-desc">ابدأ رحلتك التعليمية في دقائق</p>
		</div>

		<div class="steps">
			<div v-for="(step, i) in steps" :key="i" class="step">
				<div class="step-number">{{ i + 1 }}</div>
				<div class="step-icon">
					<HugeiconsIcon :icon="$icons[step.iconName]" :size="28" />
				</div>
				<h3 class="step-title">{{ step.title }}</h3>
				<p class="step-desc">{{ step.desc }}</p>
				<div v-if="i < steps.length - 1" class="step-arrow">
					<HugeiconsIcon :icon="$icons.arrowLeft" :size="20" />
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
const steps = [
	{
		iconName: 'login',
		title: 'أنشئ حسابك',
		desc: 'سجّل مجاناً كطالب أو معلم، وابدأ رحلتك في ثوانٍ.',
	},
	{
		iconName: 'exam',
		title: 'ابدأ الاختبار',
		desc: 'اختر الاختبار المناسب، وأجب على الأسئلة بمؤقت تلقائي.',
	},
	{
		iconName: 'result',
		title: 'شاهد نتيجتك',
		desc: 'احصل على درجتك فوراً، مع تحليل كامل لأدائك.',
	},
];
</script>

<style lang="scss" scoped>
.how-it-works {
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

	.steps {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 24px;
		position: relative;

		.step {
			position: relative;
			padding: 32px 24px;
			border-radius: 22px;
			background-color: var(--bg-secondary);
			border: 1px solid rgba(255, 255, 255, 0.05);
			text-align: center;
			transition: all 0.3s ease;

			&:hover {
				border-color: rgba(255, 169, 8, 0.25);
				transform: translateY(-4px);

				.step-number {
					background: linear-gradient(135deg, var(--primary), #ffb92e);
					color: #141414;
				}
			}

			.step-number {
				position: absolute;
				top: -16px;
				right: 24px;
				width: 36px;
				height: 36px;
				display: flex;
				align-items: center;
				justify-content: center;
				border-radius: 12px;
				background-color: var(--bg-primary);
				border: 1px solid rgba(255, 169, 8, 0.3);
				color: var(--primary);
				font-family: mada;
				font-weight: bold;
				font-size: 16px;
				transition: all 0.3s ease;
			}

			.step-icon {
				width: 64px;
				height: 64px;
				display: flex;
				align-items: center;
				justify-content: center;
				border-radius: 18px;
				background-color: rgba(255, 169, 8, 0.08);
				margin: 0 auto 20px;

				svg {
					color: var(--primary);
				}
			}

			.step-title {
				font-size: 19px;
				font-weight: bold;
				color: var(--text-primary);
				margin-bottom: 10px;
			}

			.step-desc {
				font-family: mada;
				font-size: 15px;
				line-height: 1.7;
				color: var(--text-secondary);
			}

			.step-arrow {
				position: absolute;
				top: 50%;
				left: -32px;
				transform: translateY(-50%);
				width: 40px;
				height: 40px;
				display: flex;
				align-items: center;
				justify-content: center;
				border-radius: 50%;
				background-color: var(--bg-primary);
				border: 1px solid rgba(255, 169, 8, 0.2);

				svg {
					color: var(--primary);
				}
			}
		}
	}

	@media (max-width: 900px) {
		.steps {
			grid-template-columns: 1fr;
			gap: 32px;

			.step {
				.step-arrow {
					top: auto;
					bottom: -32px;
					left: 50%;
					transform: translateX(-50%) rotate(-90deg);
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

		.steps {
			.step {
				padding: 24px 18px;
			}
		}
	}
}
</style>
