<template>
	<div class="results">
		<div class="not-found">
			<HugeiconsIcon :icon="$icons.notFound" :size="120" :stroke-width=".35"  />
			<p>ليس لديك أي نتائج بعد, يجب أن تختبر أولا</p>
			<button @click="router.push('/exams')">صفحة الاختبارات</button>
		</div>
	</div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<style lang="scss" scoped>
.results {
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;

	.not-found {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 10px;

		p {
			margin-bottom: 20px;
			font-size: 20px;
			font-weight: 600;
		}

		button {
			padding: 12px 18px;
			border-radius: 15px;
			background-color: var(--primary);
			transition: var(--trans-02);

			&:hover {
				background-color: #337fef;
			}
		}
	}
}
</style>
