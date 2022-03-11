<script lang="ts">
import { Theme } from "@material/material-color-utilities";
import { computed, defineComponent, PropType } from "@vue/composition-api";
import Color from "./Color.vue";

export default defineComponent({
  name: "ColorPalette",
  components: { Color },
  props: {
    themes: {
      type: Array as PropType<Array<Theme>>,
      required: true,
    },
    lightOrDark: {
      type: String,
      default: "light",
    },
  },
  setup(props) {
    const palette = computed(() => {
      let tmpPalette: any;
      if (props.lightOrDark === "light") {
        tmpPalette = props.themes[0].schemes.light.toJSON();
        if (props.themes.length >= 2) {
          tmpPalette.secondary = props.themes[1].schemes.light.toJSON().primary;
          tmpPalette.onSecondary = props.themes[1].schemes.light.toJSON().onPrimary;
          tmpPalette.secondaryContainer = props.themes[1].schemes.light.toJSON().primaryContainer;
          tmpPalette.onSecondaryContainer = props.themes[1].schemes.light.toJSON().onPrimaryContainer;
        }
        if (props.themes.length >= 3) {
          tmpPalette.tertiary = props.themes[2].schemes.light.toJSON().primary;
          tmpPalette.onTertiary = props.themes[2].schemes.light.toJSON().onPrimary;
          tmpPalette.tertiaryContainer = props.themes[2].schemes.light.toJSON().primaryContainer;
          tmpPalette.onTertiaryContainer = props.themes[2].schemes.light.toJSON().onPrimaryContainer;
        }
      } else {
        tmpPalette = props.themes[0].schemes.dark.toJSON();
        if (props.themes.length >= 2) {
          tmpPalette.secondary = props.themes[1].schemes.dark.toJSON().primary;
          tmpPalette.onSecondary = props.themes[1].schemes.dark.toJSON().onPrimary;
          tmpPalette.secondaryContainer = props.themes[1].schemes.dark.toJSON().primaryContainer;
          tmpPalette.onSecondaryContainer = props.themes[1].schemes.dark.toJSON().onPrimaryContainer;
        }
        if (props.themes.length >= 3) {
          tmpPalette.tertiary = props.themes[2].schemes.dark.toJSON().primary;
          tmpPalette.onTertiary = props.themes[2].schemes.dark.toJSON().onPrimary;
          tmpPalette.tertiaryContainer = props.themes[2].schemes.dark.toJSON().primaryContainer;
          tmpPalette.onTertiaryContainer = props.themes[2].schemes.dark.toJSON().onPrimaryContainer;
        }
      }
      return tmpPalette;
    });
    return {
      palette,
    };
  },
});
</script>
<template>
  <div class="w-full mb-4">
    <div class="flex flex-col overflow-hidden -mx-2">
      <div class="w-full flex flex-row flex-wrap">
        <div class="w-1/2 sm:w-1/4 p-2">
          <color class="h-16" :BgColor="palette.primary" :Color="palette.onPrimary" BgColorName="primary"></color>
        </div>
        <div class="w-1/2 sm:w-1/4 p-2">
          <color class="h-16" :BgColor="palette.onPrimary" :Color="palette.primary" BgColorName="on Primary"></color>
        </div>
        <div class="w-1/2 sm:w-1/4 p-2">
          <color
            class="h-16"
            :BgColor="palette.primaryContainer"
            :Color="palette.onPrimaryContainer"
            BgColorName="primary Container"
          ></color>
        </div>
        <div class="w-1/2 sm:w-1/4 p-2">
          <color
            class="h-16"
            :BgColor="palette.onPrimaryContainer"
            :Color="palette.primaryContainer"
            BgColorName="on Primary Container"
          ></color>
        </div>
      </div>
      <div class="w-full flex flex-row flex-wrap">
        <div class="w-1/2 sm:w-1/4 p-2">
          <color class="h-16" :BgColor="palette.secondary" :Color="palette.onSecondary" BgColorName="secondary"></color>
        </div>
        <div class="w-1/2 sm:w-1/4 p-2">
          <color
            class="h-16"
            :BgColor="palette.onSecondary"
            :Color="palette.secondary"
            BgColorName="on Secondary"
          ></color>
        </div>
        <div class="w-1/2 sm:w-1/4 p-2">
          <color
            class="h-16"
            :BgColor="palette.secondaryContainer"
            :Color="palette.onSecondaryContainer"
            BgColorName="secondary Container"
          ></color>
        </div>
        <div class="w-1/2 sm:w-1/4 p-2">
          <color
            class="h-16"
            :BgColor="palette.onSecondaryContainer"
            :Color="palette.secondaryContainer"
            BgColorName="on Secondary Container"
          ></color>
        </div>
      </div>
      <div class="w-full flex flex-row flex-wrap">
        <div class="w-1/2 sm:w-1/4 p-2">
          <color class="h-16" :BgColor="palette.tertiary" :Color="palette.onTertiary" BgColorName="tertiary"></color>
        </div>
        <div class="w-1/2 sm:w-1/4 p-2">
          <color class="h-16" :BgColor="palette.onTertiary" :Color="palette.tertiary" BgColorName="on Tertiary"></color>
        </div>
        <div class="w-1/2 sm:w-1/4 p-2">
          <color
            class="h-16"
            :BgColor="palette.tertiaryContainer"
            :Color="palette.onTertiaryContainer"
            BgColorName="tertiary Container"
          ></color>
        </div>
        <div class="w-1/2 sm:w-1/4 p-2">
          <color
            class="h-16"
            :BgColor="palette.onTertiaryContainer"
            :Color="palette.tertiaryContainer"
            BgColorName="on Tertiary Container"
          ></color>
        </div>
      </div>
      <div class="w-full flex flex-row flex-wrap">
        <div class="w-1/2 sm:w-1/4 p-2">
          <color class="h-16" :BgColor="palette.error" :Color="palette.onError" BgColorName="error"></color>
        </div>
        <div class="w-1/2 sm:w-1/4 p-2">
          <color class="h-16" :BgColor="palette.onError" :Color="palette.error" BgColorName="on Error"></color>
        </div>
        <div class="w-1/2 sm:w-1/4 p-2">
          <color
            class="h-16"
            :BgColor="palette.errorContainer"
            :Color="palette.onErrorContainer"
            BgColorName="error Container"
          ></color>
        </div>
        <div class="w-1/2 sm:w-1/4 p-2">
          <color
            class="h-16"
            :BgColor="palette.onErrorContainer"
            :Color="palette.errorContainer"
            BgColorName="on Error Container"
          ></color>
        </div>
      </div>
      <div class="w-full flex flex-row flex-wrap">
        <div class="w-1/2 sm:w-1/4 p-2">
          <color
            class="h-16"
            :BgColor="palette.background"
            :Color="palette.onBackground"
            BgColorName="background"
          ></color>
        </div>
        <div class="w-1/2 sm:w-1/4 p-2">
          <color
            class="h-16"
            :BgColor="palette.onBackground"
            :Color="palette.background"
            BgColorName="on Background"
          ></color>
        </div>
        <div class="w-1/2 sm:w-1/4 p-2">
          <color class="h-16" :BgColor="palette.surface" :Color="palette.onSurface" BgColorName="surface"></color>
        </div>
        <div class="w-1/2 sm:w-1/4 p-2">
          <color class="h-16" :BgColor="palette.onSurface" :Color="palette.surface" BgColorName="on Surface"></color>
        </div>
      </div>
      <div class="w-full flex flex-row flex-wrap">
        <div class="w-full sm:w-1/2 p-2">
          <color class="h-16" :BgColor="palette.outline" :Color="palette.background" BgColorName="outline"></color>
        </div>
        <div class="w-1/2 sm:w-1/4 p-2">
          <color
            class="h-16"
            :BgColor="palette.surfaceVariant"
            :Color="palette.onSurfaceVariant"
            BgColorName="surface Variant"
          ></color>
        </div>
        <div class="w-1/2 sm:w-1/4 p-2">
          <color
            class="h-16"
            :BgColor="palette.onSurfaceVariant"
            :Color="palette.surfaceVariant"
            BgColorName="on Surface Variant"
          ></color>
        </div>
      </div>
    </div>
  </div>
</template>
<style></style>
