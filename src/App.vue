<template>
  <div class="fit">
    <!-- <q-card
      class="q-pa-md fixed-center"
      style="z-index:1000;background: rgba(0,0,0,0.1)"
      flat
      v-show="loading"
    >
      <q-spinner-ball
        indeterminate
        size="50px"
        color="primary"
        class="q-ma-md spinner-ball"
      />
    </q-card> -->
    <q-select
      filled
      v-model="model"
      :options="options"
      label="Multi with toggle"
      emit-value
      map-options
      multiple
      ref="select"
      @popup-hide="onPopupHide"
      @popup-show="onPopupShow"
      @input="hidePopup"
    >
    </q-select>
    <!-- <router-view v-slot="{ Component }" :key="$route.name">
      <transition name="fadein">
        <component :is="Component" />
      </transition>
    </router-view> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "LayoutDefault",
  computed: {},
  data() {
    return {
      model: ref([]),
      options: [
        {
          label: "Google",
          value: 1,
        },
        {
          label: "Facebook",
          value: 2,
        },
        {
          label: "Twitter",
          value: 3,
        },
        {
          label: "Apple",
          value: 4,
        },
        {
          label: "Oracle",
          value: 5,
        },
      ],
    };
  },
  // created() {
  //   this.$q.dark.set(true);
  // },
  methods: {
    onPopupShow(val: any) {
      console.log("show", val);
      //this.popupOpen = true;
    },
    onPopupHide(val: any) {
      console.log("hidei");
      // this.popupOpen = false;
    },
    hidePopup() {
      console.log("hide");
      const ref = this.$refs.select;
      // ref.hidePopup();
    },
  },
  watch: {
    loading(loading) {
      if (loading) {
        this.$q.loading.show({});
      } else {
        this.$q.loading.hide();
      }
    },
  },
});
</script>

<style></style>
