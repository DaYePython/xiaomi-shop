<template>
    <box-center class="cart" justify-center>
        <shopping-cart-one class="cart__icon" theme="outline" />购物车
        <span>({{ cartNum }})</span>
    </box-center>
</template>

<script lang="ts">
import { computed, ComputedRef, defineComponent } from "vue";
import { ShoppingCartOne } from '@icon-park/vue-next';
import BoxCenter from "../BoxCenter/BoxCenter.vue";

export default defineComponent({
    name: "TopbarCart",
    setup(props) {
        const cartNum: ComputedRef<number> = computed(() => 0);
        return {
            cartNum
        }
    },
    components: {
        ShoppingCartOne,
        BoxCenter
    }

})
</script>
<style lang="scss">
@include b(cart) {
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
}
</style>