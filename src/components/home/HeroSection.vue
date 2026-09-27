<template>
	<section class="hero">
		<div class="hero-content">
			<div class="badge">
				<HugeiconsIcon :icon="$icons.ai" :size="16" />
				<span>منصة تعليمية حديثة</span>
			</div>

			<h1 class="hero-title">
				اختبر معرفتك مع
				<span class="highlight">منصة طموح</span>
			</h1>

			<p class="hero-desc">
				منصة اختبارات إلكترونية متكاملة، تتيح للمعلمين إنشاء وإدارة الاختبارات بسهولة،
				وللطلاب أداء الاختبارات ومتابعة نتائجهم بشكل فوري وآمن.
			</p>

			<div class="hero-actions">
				<router-link to="/register" class="btn-primary">
					<HugeiconsIcon :icon="$icons.rocket" :size="18" />
					ابدأ الآن مجاناً
				</router-link>
				<router-link to="/login" class="btn-outline">
					<HugeiconsIcon :icon="$icons.login" :size="18" />
					تسجيل الدخول
				</router-link>
			</div>

			<!-- Stats -->
			<div class="hero-stats">
				<div class="stat">
					<HugeiconsIcon :icon="$icons.users" :size="22" />
					<div class="stat-info">
						<span class="stat-value">{{ counters.students.toLocaleString() }}+</span>
						<span class="stat-label">طالب</span>
					</div>
				</div>
				<div class="divider"></div>
				<div class="stat">
					<HugeiconsIcon :icon="$icons.teacher" :size="22" />
					<div class="stat-info">
						<span class="stat-value">{{ counters.teachers.toLocaleString() }}+</span>
						<span class="stat-label">معلم</span>
					</div>
				</div>
				<div class="divider"></div>
				<div class="stat">
					<HugeiconsIcon :icon="$icons.exam" :size="22" />
					<div class="stat-info">
						<span class="stat-value">{{ counters.exams.toLocaleString() }}+</span>
						<span class="stat-label">اختبار</span>
					</div>
				</div>
				<div class="divider"></div>
				<div class="stat">
					<HugeiconsIcon :icon="$icons.pen" :size="22" />
					<div class="stat-info">
						<span class="stat-value">{{ counters.questions.toLocaleString() }}+</span>
						<span class="stat-label">سؤال</span>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// ✅ Counter Animation
const counters = ref({
	students: 0,
	teachers: 0,
	exams: 0,
	questions: 0,
});

const targets = {
	students: 150000,
	teachers: 11000,
	exams: 430000,
	questions: 500000,
};

function animateCounters() {
	const duration = 2000;
	const steps = 60;
	const interval = duration / steps;

	Object.keys(targets).forEach((key) => {
		const increment = targets[key] / steps;
		let current = 0;

		const timer = setInterval(() => {
			current += increment;
			if (current >= targets[key]) {
				counters.value[key] = targets[key];
				clearInterval(timer);
			} else {
				counters.value[key] = Math.floor(current);
			}
		}, interval);
	});
}

onMounted(() => {
	animateCounters();
});
</script>

<style lang="scss" scoped>
.hero {
	min-height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 100px 24px 60px;
	position: relative;
	overflow: hidden;

	&::before {
		content: '';
		position: absolute;
		top: -50%;
		right: -20%;
		width: 600px;
		height: 600px;
		border-radius: 50%;
		background: radial-gradient(circle, rgba(255, 169, 8, 0.08), transparent 70%);
		pointer-events: none;
	}

	.hero-content {
		max-width: 900px;
		text-align: center;
		position: relative;
		z-index: 1;
		animation: fadeInUp 0.8s ease;

		.badge {
			display: inline-flex;
			align-items: center;
			gap: 8px;
			padding: 8px 16px;
			border-radius: 50px;
			background-color: rgba(255, 169, 8, 0.08);
			border: 1px solid rgba(255, 169, 8, 0.2);
			color: var(--primary);
			font-family: mada;
			font-size: 14px;
			margin-bottom: 24px;

			svg {
				color: var(--primary);
			}
		}

		.hero-title {
			font-size: 56px;
			font-weight: bold;
			line-height: 1.2;
			color: var(--text-primary);
			margin-bottom: 20px;

			.highlight {
				color: var(--primary);
			}
		}

		.hero-desc {
			font-size: 18px;
			line-height: 1.8;
			color: var(--text-secondary);
			max-width: 650px;
			margin: 0 auto 36px;
			font-family: mada;
		}

		.hero-actions {
			display: flex;
			justify-content: center;
			gap: 14px;
			margin-bottom: 60px;

			.btn-primary,
			.btn-outline {
				display: inline-flex;
				align-items: center;
				gap: 8px;
				padding: 14px 28px;
				border-radius: 16px;
				font-family: mada;
				font-size: 16px;
				font-weight: 600;
				cursor: pointer;
				transition: all 0.3s ease;
				text-decoration: none;
			}

			.btn-primary {
				background: linear-gradient(135deg, #ffa908, #ffb92e);
				color: #141414;
				border: none;
				box-shadow: 0 8px 24px rgba(255, 169, 8, 0.25);

				&:hover {
					transform: translateY(-2px);
					box-shadow: 0 12px 32px rgba(255, 169, 8, 0.35);
				}
			}

			.btn-outline {
				background: transparent;
				color: var(--text-primary);
				border: 1px solid rgba(255, 255, 255, 0.1);

				&:hover {
					border-color: var(--primary);
					color: var(--primary);
				}
			}
		}

		.hero-stats {
			display: flex;
			justify-content: center;
			gap: 32px;
			padding: 24px;
			border-radius: 20px;
			background-color: var(--bg-secondary);
			border: 1px solid rgba(255, 255, 255, 0.05);

			.stat {
				display: flex;
				align-items: center;
				gap: 10px;

				svg {
					color: var(--primary);
				}

				.stat-info {
					display: flex;
					flex-direction: column;
					text-align: right;

					.stat-value {
						font-family: mada;
						font-size: 20px;
						font-weight: bold;
						color: var(--text-primary);
					}

					.stat-label {
						font-family: mada;
						font-size: 13px;
						color: var(--text-secondary);
					}
				}
			}

			.divider {
				width: 1px;
				height: 30px;
				background-color: rgba(255, 255, 255, 0.08);
			}
		}
	}

	// ✅ Responsive
	@media (max-width: 767px) {
		padding: 80px 16px 40px;

		.hero-content {
			.hero-title {
				font-size: 32px;
			}

			.hero-desc {
				font-size: 15px;
			}

			.hero-actions {
				flex-direction: column;
				align-items: stretch;
				margin-bottom: 40px;

				.btn-primary,
				.btn-outline {
					justify-content: center;
				}
			}

			.hero-stats {
				flex-wrap: wrap;
				gap: 16px;

				.divider {
					display: none;
				}

				.stat {
					flex: 1;
					min-width: 120px;
				}
			}
		}
	}

	@media (max-width: 480px) {
		.hero-content {
			.hero-title {
				font-size: 26px;
			}

			.hero-stats {
				.stat {
					min-width: 100%;
					justify-content: center;
				}
			}
		}
	}
}

// ✅ Animation
@keyframes fadeInUp {
	from {
		opacity: 0;
		transform: translateY(30px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}
</style>
