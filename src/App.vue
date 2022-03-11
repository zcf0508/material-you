<script lang="ts">
import ColorPalette from "@/components/ColorPalette.vue";
import Color from "@/components/Color.vue";
import ColorPicker from "@/components/ColorPicker.vue";
import { computed, defineComponent, ref } from "@vue/composition-api";
import { argbFromHex, themeFromSourceColor } from "@material/material-color-utilities";
import evalScriptHelper from "@/utils/evalScriptHelper";
import { mmcq } from "mmcq.js";
import ImageColors from "./components/ImageColors.vue";

export default defineComponent({
  name: "App",
  components: {
    ColorPalette,
    Color,
    ColorPicker,
    ImageColors,
  },
  setup() {
    const colors = ref(["#0033cc"]);
    const themes = computed(() => {
      return colors.value.map((color) => {
        return themeFromSourceColor(argbFromHex(color));
      });
    });

    function pickColor() {
      evalScriptHelper("colorPicker()").then((res) => {
        colors.value = [];
        colors.value.push("#" + res);
      });
    }
    function changeColor(index: number) {
      evalScriptHelper("colorPicker()").then((res) => {
        colors.value = colors.value.map((value, i) => {
          if (i === index) {
            return "#" + res;
          } else {
            return value;
          }
        });
      });
    }

    function addColor() {
      evalScriptHelper("colorPicker()").then((res) => {
        colors.value.push("#" + res);
      });
    }

    function removeColor(index: number) {
      colors.value = colors.value.filter((value, i) => {
        return i !== index;
      });
    }

    function updateColors(_colors: Array<string>) {
      colors.value = [];
      colors.value = _colors;
    }

    return {
      colors,
      themes,
      argbFromHex,
      pickColor,
      changeColor,
      addColor,
      removeColor,
      updateColors,
    };
  },
});
</script>
<template>
  <div class="bg-white">
    <div class="w-full p-2 text-sm">
      <div class="mb-4">
        <div class="font-bold mb-2">取色</div>
        <div class="flex flex-row">
          <button class="p-1 px-2 mr-2 cursor-pointer border rounded" @click="pickColor">
            <color-picker></color-picker>
          </button>
          <image-colors @updateColors="updateColors"></image-colors>
        </div>
      </div>
      <div class="flex w-full h-12 mb-4 justify-center">
        <div v-for="(color, index) in colors" :key="index" class="relative text-xs">
          <div
            v-if="colors.length > 1"
            class="absolute top-0 right-2 bg-white border rounded-full cursor-pointer"
            @click="removeColor(index)"
          >
            <span class="h-4 w-4 flex justify-center items-center"> x</span>
          </div>
          <div class="mr-2" @click="changeColor(index)">
            <color class="h-12 w-12 !rounded-full" :BgColor="argbFromHex(color)" :allowClick="false"></color>
          </div>
        </div>
        <div
          v-if="colors.length < 3"
          class="p-1 cursor-pointer border rounded-full h-12 w-12 mr-2 flex justify-center items-center border"
          @click="addColor"
        >
          +
        </div>
      </div>
      <div class="font-bold mb-1">亮色主题</div>
      <color-palette :themes="themes" lightOrDark="light"></color-palette>
      <div class="font-bold mb-1">暗色主题</div>
      <color-palette :themes="themes" lightOrDark="dark"></color-palette>
    </div>
  </div>
</template>

<style>
/* 兼容 PS CC 2017 */
body {
  font-family: "Microsoft Yahei", "Helvetica Neue", Helvetica, Arial, sans-serif !important;
}
.bg-white {
  background-color: #ffffff;
}
</style>
