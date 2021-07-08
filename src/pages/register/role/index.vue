<template>
	<div class="role">
		<div class="role-area">
			<div class="role-title">欢迎注册</div>
			<div class="role-tips">请先选择注册角色</div>
			<ul class="role-list">
				<li class="role-item">
					
				</li>
				<li class="role-item"></li>
				<li class="role-item"></li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'RegisterRole'
	}
</script>

<style lang="stylus" scoped>
	.role {
		width: 100%;
		.role-area {
			padding: 0 toRem(44);
			.role-title {
				padding: toRem(20) 0 toRem(10);
				color: $blackColor;
				font-size: toRem(24);
			}
			.role-tips {
				color: $greyColor;
				font-size: toRem(16);
			}
			.role-list {
				display: flex;
				flex-wrap: wrap;
				margin-bottom: toRem(150);
				.role-item {
					width: 100%;
					height: toRem(209);
					background-color: #ccc;
					margin-top: toRem(30);
					border-radius: toRem(20);
				}
			}
		}
	}
</style>
