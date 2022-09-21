<template>
    <div>
        <!-- 第一个用来接收传过来的类名，第二个用来定义默认宽高 -->
        <svg :class="svgClass">
            <use :href="name"></use>
        </svg>
    </div>
</template>

<script setup lang="ts">
import { computed } from '@vue/reactivity';

// 定义props,使用泛型的方式
const props = defineProps<{
    // 图标的名称
    iconName: string
    // 图标的类名
    className: string
}>()

// 使用计算属性拼接
const name = computed(() => `#icon-${props.iconName}`)
const svgClass = computed(() => {
    if (props.className) {
        return `svg-icon ${props.className}`
    }
    return 'svg-icon'
})

</script>

<style lang="less" scoped>
.svg-icon {
    width: 22px;
}
</style>