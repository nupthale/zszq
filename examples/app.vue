<template>
  <div>
    <TextButton>test</TextButton>
    <div style="display: inline-block; width: 80px">
      <EllipsisText
        title="123123123asdfdsafdsaf123123123asdfdsafdsaf123123123asdfdsafdsaf123123123asdfdsafdsaf123123123asdfdsafdsaf123123123asdfdsafdsaf123123123asdfdsafdsaf123123123asdfdsafdsaf"
        :line-clamp="2"
      >
        123123123asdfdsafdsaf123123123asdfdsafdsaf123123123asdfdsafdsaf123123123asdfdsafdsaf123123123asdfdsafdsaf123123123asdfdsafdsaf123123123asdfdsafdsaf123123123asdfdsafdsaf
      </EllipsisText>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { TextButton, EllipsisText } from '@zsfe/zsui';
</script>
