<template>
  <div class="infos">
    <div class="my-row">
      <div class="col-md-6">
        <div class="my-row">
          <div class="col-md-6">
            <h4>Project developer</h4>
          </div>
          <div class="col-md-6">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="my-row">
      <div class="col-md-6">
        <div class="my-row">
          <div class="col-md-6">
            <h4>METHODOLOGY</h4>
          </div>
          <div class="col-md-6">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="my-row">
          <div class="col-md-6">
            <h4>CREDITING PERIOD</h4>
          </div>
          <div class="col-md-6">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="my-row">
      <div class="col-md-6">
        <div class="my-row">
          <div class="col-md-6">
            <h4>STANDARDS VERSION</h4>
          </div>
          <div class="col-md-6">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="my-row">
          <div class="col-md-6">
            <h4>ANNUAL ESTIMATED CREDITS</h4>
          </div>
          <div class="col-md-6">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="my-row">
      <div class="col-md-6">
        <div class="my-row">
          <div class="col-md-6">
            <h4>PROJECT SCALE</h4>
          </div>
          <div class="col-md-6">
            <p>Lorem ipsum dolor,</p>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="my-row">
          <div class="col-md-6">
            <h4>PROJECT TYPE</h4>
          </div>
          <div class="col-md-6">
            <p>Lorem ipsum dolor,</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
.infos {
  & > .my-row {
    align-items: center;
    // display: flex;
    border-bottom: 1px solid var(--secondary);
  }
}
</style>