<template>
	<div class="exams">
		<header>
			<input placeholder="ابحث عن الاختبار...">
			<div class="filter-box">
				<button class="active">الجميع</button>
				<button>الحالي</button>
				<button>المنتهي</button>
			</div>
		</header>

		<div class="exams-box">
			<div v-for="exam in exams" :key="exam.id" class="exam">
				<div class="right">
					<h3 class="title">{{ exam.values.title }}</h3>
					<div class="info">
						<div class="teacher">
							<HugeiconsIcon :icon="$icons.user" :size="iconSize" />
							<span class="value">{{ exam.teacher }}</span>
						</div>
						<div class="duration">
							<HugeiconsIcon :icon="$icons.time" :size="iconSize" />
							<span class="value">{{ exam.values.duration }}
								{{ exam.values.duration == 1 ? 'دقيقة' : exam.values.duration == 2 ? 'دقيقتين' : 'دقائق' }}</span>
						</div>
					</div>
				</div>
				<div class="left">
					<button class="start">اختبر الآن</button>
					<div class="info">
						<div class="points">
							<HugeiconsIcon :icon="$icons.check" :size="iconSize" />
							<span class="value">{{ exam.values.points }}
								{{ exam.values.points == 1 ? 'درجة' : exam.values.points == 2 ? 'درجتين' : 'درجات' }}</span>
						</div>
						<div class="questions-count">
							<HugeiconsIcon :icon="$icons.pen" :size="iconSize" />
							<span class="value">{{ exam.values.questions_count }}
								{{ exam.values.questions_count == 1 ? 'سؤال' : exam.values.questions_count == 2 ? 'سؤالين' : 'أسئلة' }}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import api from '../api/axios';

// DATA
const exams = ref([]);
const iconSize = ref(24);

// SCRIPT
const mediaQuery = window.matchMedia('(max-width: 767px)');
function handleChangeSize(e) {
	iconSize.value = e.matches ? 18 : 24;
};

// onMounted
onMounted(async () => {
	try {
		const res = await api.get('/exams');
		exams.value = res.data?.exams
	} catch (error) {
		console.error('Error:', error.response?.data?.message || error.message)
		exams.value = [];
	};

	//  - تحديث عرض الأيقونات
	mediaQuery.addEventListener('change', handleChangeSize);
	handleChangeSize(mediaQuery);
});

// onUnmounted
onUnmounted(() => {
	mediaQuery.removeEventListener('change', handleChangeSize);
});
</script>

<style lang="scss" scoped>
.exams {
	width: 100%;
	padding: 10px;

	header {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 10px;
		padding: 10px;
		margin-bottom: 50px;
		border-radius: 15px;
		border: 1px solid var(--border-white);
		background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.02));

		input {
			width: 400px;
			max-width: 60%;
			padding: 10px 16px;
			border-radius: 15px;
			border: 1px solid transparent;
			background-color: var(--bg-primary);
			transition: var(--trans-02);
		}

		input:focus {
			border-color: orange;
		}

		input:focus::placeholder {
			opacity: 0;
		}

		.filter-box {
			display: flex;
			align-items: center;
			gap: 4px;
			padding: 4px;
			border-radius: 15px;
			background-color: var(--bg-primary);

			button {
				padding: 8px 18px;
				border-radius: 12px;
				background: transparent;
				border: none;
				color: var(--text-secondary);
				font-family: mada;
				font-weight: 600;
				font-size: 15px;
				cursor: pointer;
				transition: var(--trans-02);

				&:hover {
					color: var(--text-primary);
					background-color: var(--bg-white-hover);
				}

				&.active {
					color: #141414;
					background: linear-gradient(135deg, var(--bg-orange), #ffb92e);
					font-weight: bold;
				}
			}
		}
	}

	.exams-box {
		display: flex;
		flex-direction: column;
		gap: 25px;

		.exam {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 10px 20px;
			border-radius: 15px;
			background: linear-gradient(135deg, var(--bg-orange-opacity), #c49f676c);
			transition: var(--trans-02);

			.right {
				h3.title {
					padding: 8px 0;
					color: var(--text-primary);
					font-family: lalezar;
					font-size: 25px;
				}

				.info {
					display: flex;
					align-items: center;
					gap: 15px;
					font-family: cairo;

					.teacher,
					.duration {
						display: flex;
						align-items: center;
						gap: 5px;

						svg,
						span {
							color: rgba(255, 255, 255, 0.5);
						}
					}
				}
			}

			.left {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				gap: 10px;

				button.start {
					width: 200px;
					padding: 8px 18px;
					border-radius: 15px;
					font-weight: bold;
					background-color: var(--bg-primary);
					transition: var(--trans-02);

					&:hover {
						background-color: var(--bg-secondary);
					}
				}

				.info {
					display: flex;
					align-items: center;
					gap: 15px;
					font-family: cairo;

					.points,
					.questions-count {
						display: flex;
						align-items: center;

						svg,
						span {
							color: rgba(255, 255, 255, 0.5);
						}
					}
				}
			}

			&:hover {
				transform: translateY(-5px);
				box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
			}
		}
	}
}

@media(max-width: 767px) {
	.exams {
		header {
			.filter-box {
				display: none
			}

			input {
				min-width: 100%;
			}
		}

		.exams-box {
			.exam {
				.right {
					h3.title {
						font-size: 20px;
					}

					.info {
						gap: 10px;

						.teacher,
						.duration {
							gap: 3px;

							span.value {
								font-size: 12px;
							}
						}
					}
				}

				.left {
					button.start {
						width: 140px;
					}

					.info {
						gap: 2px;

						.points,
						.questions-count {
							gap: 1px;

							span.value {
								font-size: 12px;
							}
						}
					}
				}
			}
		}
	}
}
</style>
