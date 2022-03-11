<script lang="ts">
import evalScriptHelper from "@/utils/evalScriptHelper";
import { defineComponent } from "@vue/composition-api";

function argbToHex(argb: number) {
  return "#" + argb.toString(16).slice(2);
}

export default defineComponent({
  name: "Color",
  props: {
    allowClick: {
      type: Boolean,
      default: () => {
        return true;
      },
    },
    BgColor: {
      type: Number,
      reqeired: true,
    },
    BgColorName: {
      type: String,
    },
    Color: {
      type: Number,
      default: () => {
        return 4284960932; // #ffffff
      },
    },
  },
  setup(props) {
    function setColor(color: string) {
      if (props.allowClick) {
        evalScriptHelper(`setColor('${color}')`);
      }
    }
    return {
      argbToHex,
      setColor,
    };
  },
});
</script>
<template>
  <div
    class="p-1 rounded-xl cursor-pointer break-all border"
    :style="'background-color:' + argbToHex(BgColor) + ';color:' + argbToHex(Color)"
    @click="allowClick && setColor(argbToHex(BgColor))"
  >
    {{ BgColorName || "" }}
  </div>
</template>
<style></style>
