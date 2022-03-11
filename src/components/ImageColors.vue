<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { mmcq } from "mmcq.js";

export default defineComponent({
  name: "ImageColors",
  emits: ["updateColors"],
  setup(props, { emit }) {
    function _getImageData(image: HTMLImageElement, /** * 0.1 - 1 **/ imageQuality: number): Uint8ClampedArray {
      const canvas = document.createElement("canvas") as HTMLCanvasElement;

      canvas.style.display = "none";
      canvas.width = image.naturalWidth * imageQuality;
      canvas.height = image.naturalHeight * imageQuality;
      canvas.style.width = canvas.width + "px";
      canvas.style.height = canvas.height + "px";
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        return [] as any;
      }
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
      const data = ctx.getImageData(0, 0, canvas.width, canvas.height);

      return data.data;
    }

    function selectImg() {
      const res = window.cep.fs.showOpenDialogEx(
        false,
        false,
        "请选择文件",
        "/",
        ["jpg", "jpeg", "png"],
        "*.jpg/jpeg/png",
        "选择",
      );

      if (res.data.length > 0) {
        const open_result = window.cep.fs.readFile(res.data[0], "Base64");

        const image = new Image();
        image.onload = function () {
          mmcq(_getImageData(image, 0.2), { count: 3, algorithm: 8 })
            .then((_colors) => {
              emit(
                "updateColors",
                _colors.map((_color) => {
                  return _color.hex;
                }),
              );
            })
            .catch((err) => {
              alert(err);
            });
        };
        image.src = "data:image/jpeg;base64," + open_result.data;
      }
    }
    return {
      selectImg,
    };
  },
});
</script>
<template>
  <div>
    <button class="p-1 px-2 mr-2 cursor-pointer border rounded" @click="selectImg">图片取色</button>
  </div>
</template>
<style></style>
