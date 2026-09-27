<template>
	<div class="register">
		<div class="form">
			<HugeiconsIcon :icon="$icons.loginFinger" class="finger" :class="submitted ? validForm[1] : ''" :size="44" />
			<h3 class="form-title">إنشاء حساب جديد إلى طموح</h3>
			<div class="inputs">
				<div class="name-input">
					<label for="name">
						<HugeiconsIcon :icon="$icons.At" class="at" />
						الاسم الثنائي
					</label>
					<input class="name" :class="submitted && !name.trim() ? 'danger' : ''" id="name" autocomplete="off"
						placeholder="اكتب اسمك..." v-model="name">
				</div>
				<div class="email-input">
					<label for="email">
						<HugeiconsIcon :icon="$icons.mail" class="mail" :size="22" />
						البريد الإلكتروني
					</label>
					<input class="email" :class="submitted && !mail.trim() ? 'danger' : ''" id="email" autocomplete="off"
						placeholder="اكتب البريك الإلكتروني..." v-model="mail">
				</div>
				<div class="password-input">
					<HugeiconsIcon :icon="isView ? $icons.eyeOn : $icons.eyeOff" :size="22" class="viewPass" v-if="password"
						@click="isView = !isView" />
					<label for="password">
						<HugeiconsIcon :icon="$icons.password" class="password" />
						كلمة المرور
					</label>
					<input :type="isView ? 'text' : 'password'" :class="submitted && !password.trim() ? 'danger' : ''"
						class="password" id="password" autocomplete="off" placeholder="اكتب كلمة المرور..." v-model="password">
				</div>
				<div class="submit-input">
					<button type="submit" class="submit" @click="registerAPI">إنشاء حساب</button>
				</div>
			</div>
			<p class="hasAccount">لديك حساب ؟ <router-link to="/login">سجل الدخول</router-link></p>
			<div class="errors">
				<p class="server-err" v-if="errorMessage" :class="errorMessage ? 'warning' : ''">{{ errorMessage }}</p>
				<p class="valid-msg" v-else-if="validForm[0] && submitted" :class="validForm[0] ? 'warning' : ''">
					{{ validForm[0] }}</p>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import { useRouter } from 'vue-router';
import api from '../api/axios';

const router = useRouter();


// DATA
const name = ref('');
const mail = ref('');
const password = ref('');
const isView = ref(null);
const errorMessage = ref('');
const submitted = ref(false);

// METHDOS
// send data to backend | axios
function registerAPI() {
	submitted.value = true;
	if (validForm.value[2]) {
		api.post('/auth/register', {
			name: name.value,
			email: mail.value,
			password: password.value
		}).then(res => {
			if (res.data.success) {
				router.push('/login');
			}
		}).catch(error => {
			const err = error.response?.data;
			let errValue = 'Server Error';

			if (err?.message) {
				errValue = err.message;
			} else if (err?.errors) {
				errValue = err.errors[0].msg;
			};

			errorMessage.value = errValue;
		});
	};
};

// COMPUTED
// return figner class
const validForm = computed(() => {
	//  1. لو كلهم فاضيين
	if (!name.value && !mail.value && !password.value) {
		return ['القيم فارغة, يرجى تعبئة البيانات', 'finger danger', false];
	};

	//  2. الاسم
	if (!name.value.trim()) {
		return ['الاسم مطلوب', 'warning finger', false];
	};
	if (name.value.length < 2) {
		return ['الاسم قصير جداً', 'warning finger', false];
	};

	//  3. الإيميل
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!mail.value.trim()) {
		return ['البريد مطلوب', 'warning finger', false];
	};
	if (!emailRegex.test(mail.value)) {
		return ['البريد الإلكتروني غير صحيح', 'warning finger', false];
	};

	//  4. كلمة المرور
	const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{8,}$/;
	if (!password.value.trim()) {
		return ['كلمة المرور مطلوبة', 'warning finger', false];
	};
	if (!passwordRegex.test(password.value)) {
		return ['كلمة المرور ضعيفة يجب أن تحتوي على حرف كبير و صغير و رمز و رقم في 8 خانات على الأقل', 'warning finger', false];
	};

	//  5. كل حاجة تمام
	return [null, 'finger success', true];
});

// WATCH
watch([name, mail, password], () => {
	errorMessage.value = '';
});
</script>

<style lang="scss" scoped>
.register {
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: var(--bg-primary);

	.form {
		position: relative;
		width: 600px;
		max-width: 90%;
		padding: 25px;
		border-radius: 15px;
		background-color: var(--bg-secondary);
		box-shadow: var(--shadow-dark);

		svg.finger {
			position: absolute;
			top: -30px;
			left: 50%;
			transform: translateX(-50%);
			padding: 5px;
			border-radius: 8px;
			background-color: var(--bg-secondary);
			color: rgba(255, 255, 255, 0.3);
			box-shadow: var(--shadow-dark);
			transition: var(--trans-02);
		}

		svg.finger.success {
			color: var(--success);
		}

		svg.finger.warning {
			color: var(--warning);
		}

		svg.finger.danger {
			color: var(--danger);
		}

		h3.form-title {
			position: relative;
			margin-bottom: 30px;
			padding: 25px 0 30px 0;
			color: var(--text-primary);
			text-align: center;
			font-weight: bold;
		}

		h3.form-title::before {
			content: '';
			position: absolute;
			left: 50%;
			transform: translateX(-50%);
			bottom: 0;
			width: 30px;
			height: 1px;
			background-color: rgba(255, 255, 255, 0.25);
		}

		.inputs {
			display: flex;
			flex-direction: column;
			gap: 25px;
			padding: 30px;

			div {
				display: flex;
				flex-direction: column;

				label {
					display: flex;
					align-items: center;
					gap: 5px;
					margin: 0 7px 6px 0;
					color: rgba(255, 255, 255, 0.6);
					font-family: mada;
					font-weight: 400;
					font-size: 18px;
					transition: var(--trans-02);
				}

				input {
					padding: 8px 14px;
					border-radius: 20px;
					border: 1px solid var(--border-white);
					font-family: mada;
					font-size: 18px;
					transition: var(--trans-02);
				}

				input:focus {
					border-color: white;
				}

				input:focus::placeholder {
					opacity: 0;
				}

				input.danger {
					border-color: var(--danger);
				}

				button {
					padding: 12px;
					margin-top: 20px;
					border-radius: 20px;
					background-color: var(--bg-white-opacity);
					font-family: lalezar;
					font-size: 20px;
					font-weight: 100;
					transition: var(--trans-02);

					&:hover {
						background-color: var(--bg-white-hover);
					}
				}
			}

			div:focus-within label {
				color: white;
			}

			div.password-input {
				position: relative;

				svg.viewPass {
					position: absolute;
					bottom: 12px;
					right: -30px;
					cursor: pointer;
				}
			}
		}

		p.hasAccount {
			margin-bottom: 30px;
			font-family: mada;
			text-align: center;

			a {
				color: var(--text-secondary);
				font-weight: bold;
				cursor: pointer;
			}
		}

		.errors {
			display: flex;
			flex-direction: column;
			gap: 15px;
			text-align: center;

			p {
				padding: 10px;
				border-radius: 15px;
				font-family: mada;
				background-color: var(--bg-secondary);
				border: 2px solid var(--border-white);
			}

			p.warning {
				border-color: var(--warning);
			}

			p.success {
				border-color: var(--success);
			}
		}
	}
}
</style>
