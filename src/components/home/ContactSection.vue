<template>
	<section class="contact">
		<div class="contact-box">
			<div class="contact-content">
				<span class="section-badge">تواصل معنا</span>
				<h2 class="contact-title">هل لديك <span class="highlight">استفسار</span>؟</h2>
				<p class="contact-desc">
					فريقنا جاهز لمساعدتك في أي وقت. لا تتردد في التواصل معنا.
				</p>

				<div class="contact-actions">
					<a href="mailto:contact@tomoh.com" class="btn-primary">
						<HugeiconsIcon :icon="$icons.mail" :size="18" />
						contact@tomoh.com
					</a>
				</div>

				<div class="contact-info">
					<div class="info-item">
						<HugeiconsIcon :icon="$icons.location" :size="18" />
						<span>القصيم، المملكة العربية السعودية</span>
					</div>
					<div class="info-item">
						<HugeiconsIcon :icon="$icons.time" :size="18" />
						<span>دعم على مدار الساعة</span>
					</div>
				</div>
			</div>
		</div>

		<!-- Footer -->
		<footer class="footer">
			<div class="footer-content">
				<div class="footer-brand">
					<div class="brand-logo">
						<HugeiconsIcon :icon="$icons.grade" :size="26" />
						<span>طموح</span>
					</div>
					<p class="brand-desc">منصة تعليمية حديثة للاختبارات الإلكترونية.</p>
				</div>

				<div class="footer-links">
					<h4>روابط سريعة</h4>
					<router-link to="/">الرئيسية</router-link>
					<router-link to="/login">تسجيل الدخول</router-link>
					<router-link to="/register">إنشاء حساب</router-link>
				</div>

				<div class="footer-links">
					<h4>تواصل معنا</h4>
					<a href="mailto:contact@tomoh.com">
						<HugeiconsIcon :icon="$icons.mail" :size="14" />
						البريد الإلكتروني
					</a>
					<a href="#">
						<HugeiconsIcon :icon="$icons.github" :size="14" />
						GitHub
					</a>
					<a href="#">
						<HugeiconsIcon :icon="$icons.linkedin" :size="14" />
						LinkedIn
					</a>
				</div>
			</div>

			<div class="footer-bottom">
				<p>© 2026 طموح. جميع الحقوق محفوظة.</p>
			</div>
		</footer>
	</section>
</template>

<script setup>
// ✅ لا حاجة لـ script
</script>

<style lang="scss" scoped>
.contact {
	padding: 80px 24px 0;

	.contact-box {
		max-width: 900px;
		margin: 0 auto 80px;
		padding: 60px 40px;
		border-radius: 28px;
		background: linear-gradient(135deg, rgba(255, 169, 8, 0.06), rgba(255, 169, 8, 0.02));
		border: 1px solid rgba(255, 169, 8, 0.15);
		text-align: center;

		.contact-content {
			.section-badge {
				display: inline-block;
				padding: 6px 14px;
				border-radius: 50px;
				background-color: rgba(255, 169, 8, 0.1);
				border: 1px solid rgba(255, 169, 8, 0.25);
				color: var(--primary);
				font-family: mada;
				font-size: 13px;
				margin-bottom: 20px;
			}

			.contact-title {
				font-size: 40px;
				font-weight: bold;
				color: var(--text-primary);
				margin-bottom: 16px;

				.highlight {
					color: var(--primary);
				}
			}

			.contact-desc {
				font-family: mada;
				font-size: 16px;
				color: var(--text-secondary);
				max-width: 500px;
				margin: 0 auto 32px;
				line-height: 1.8;
			}

			.contact-actions {
				display: flex;
				justify-content: center;
				margin-bottom: 40px;

				.btn-primary {
					display: inline-flex;
					align-items: center;
					gap: 8px;
					padding: 14px 28px;
					border-radius: 16px;
					background: linear-gradient(135deg, #ffa908, #ffb92e);
					color: #141414;
					font-family: mada;
					font-size: 16px;
					font-weight: 600;
					text-decoration: none;
					cursor: pointer;
					transition: all 0.3s ease;
					box-shadow: 0 8px 24px rgba(255, 169, 8, 0.25);

					&:hover {
						transform: translateY(-2px);
						box-shadow: 0 12px 32px rgba(255, 169, 8, 0.35);
					}
				}
			}

			.contact-info {
				display: flex;
				justify-content: center;
				gap: 32px;

				.info-item {
					display: flex;
					align-items: center;
					gap: 8px;
					font-family: mada;
					font-size: 14px;
					color: var(--text-secondary);

					svg {
						color: var(--primary);
					}
				}
			}
		}
	}

	.footer {
		border-top: 1px solid rgba(255, 255, 255, 0.05);

		.footer-content {
			max-width: 1200px;
			margin: 0 auto;
			padding: 60px 24px 40px;
			display: grid;
			grid-template-columns: 2fr 1fr 1fr;
			gap: 40px;

			.footer-brand {
				.brand-logo {
					display: flex;
					align-items: center;
					gap: 10px;
					margin-bottom: 14px;

					svg {
						color: var(--primary);
					}

					span {
						font-size: 22px;
						font-weight: bold;
						color: var(--text-primary);
					}
				}

				.brand-desc {
					font-family: mada;
					font-size: 15px;
					color: var(--text-secondary);
					line-height: 1.7;
					max-width: 300px;
				}
			}

			.footer-links {
				display: flex;
				flex-direction: column;
				gap: 12px;

				h4 {
					font-size: 16px;
					font-weight: bold;
					color: var(--text-primary);
					margin-bottom: 8px;
				}

				a {
					display: flex;
					align-items: center;
					gap: 6px;
					font-family: mada;
					font-size: 15px;
					color: var(--text-secondary);
					text-decoration: none;
					transition: all 0.2s ease;

					&:hover {
						color: var(--primary);
					}
				}
			}
		}

		.footer-bottom {
			border-top: 1px solid rgba(255, 255, 255, 0.05);
			padding: 24px;
			text-align: center;

			p {
				font-family: mada;
				font-size: 14px;
				color: var(--text-secondary);
			}
		}
	}

	@media (max-width: 767px) {
		padding: 60px 16px 0;

		.contact-box {
			padding: 40px 24px;
			margin-bottom: 60px;

			.contact-content {
				.contact-title {
					font-size: 28px;
				}

				.contact-info {
					flex-direction: column;
					gap: 16px;
				}
			}
		}

		.footer {
			.footer-content {
				grid-template-columns: 1fr;
				gap: 30px;
				padding: 40px 16px 30px;
			}
		}
	}
}
</style>
