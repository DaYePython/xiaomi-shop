<template>
    <box-center
        class="cart"
        justify-center
        @mouseenter="isActive = true"
        @mouseleave="isActive = false"
    >
        <shopping-cart-one class="cart__icon" theme="outline" />购物车
        <span>({{ cartNum }})</span>
        <!-- Add Loading Animation -->
        <div :class="classObject"></div>
    </box-center>
</template>

<script lang="ts">
import { computed, ComputedRef, defineComponent, ref } from "vue";
import { ShoppingCartOne } from '@icon-park/vue-next';
import BoxCenter from "../BoxCenter/BoxCenter.vue";


export default defineComponent({
    name: "TopbarCart",
    setup(props) {
        const cartNum: ComputedRef<number> = computed(() => 0);
        let isActive = ref(false)
        const classObject = ref({
            'cart__menu': true,
            'active': isActive
        })
        return {
            cartNum,
            classObject,
            isActive

        }
    },
    components: {
        ShoppingCartOne,
        BoxCenter,
    }

})
</script>
<style lang="scss">
@include b(cart) {
    position: relative;
    height: 40px;
    width: 120px;
    line-height: 40px;
    background: #424242;
    color: $text-gray-color;
    @include e(icon) {
        margin: 0 4px;
        font-size: 20px;
        // 居中
        transform: translate3d(0, -4px, 0);
    }
    &:hover {
        background-color: $bg-second-color;
        color: $primary-color;
    }

    @include e(menu) {
        position: absolute;
        padding: 20px 0 0;
        top: 100%;
        right: 0;
        width: 300%;
        min-height: 99px;
        background-color: #fff;
        box-shadow: $shadow-second;
        display: none;
        transform: translate3d(0, -100%, 0);
        opacity: 0;
        transition: all 0.5s linear;

        &:empty::after {
            content: "购物车中还没有商品，赶紧选购吧！";
            width: 100%;
            // margin: 0 20px 20px;
            display: block;
            text-align: center;
            color: $text-black-color;
        }
        &.active {
            // z-index: 99;
            opacity: 1;
            display: block;
            transform: translate3d(0, 0, 0);
        }
    }
}
</style>