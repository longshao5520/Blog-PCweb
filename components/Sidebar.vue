<template>
  <b-col md="3" class="d-none d-lg-block">
    <b-card header="所有标签" header-tag="header" class="mt-4">
      <b-card-text>
        <el-tag
          v-for="(tag, index) in tags"
          :key="'tag' + index"
          type="info"
          effect="dark"
          class="mt-2"
        >
          {{ tag }}
        </el-tag>
      </b-card-text>
    </b-card>
    <b-card no-body header="所有分类" class="mt-4 mb-4">
      <b-list-group flush>
        <b-list-group-item
          v-for="(cate, index) in $store.state.cates.cates"
          :key="'cate' + index"
          :to="`/cate/${cate._id}`"
        >
          {{ cate.title }}
        </b-list-group-item>
      </b-list-group>
    </b-card>
  </b-col>
</template>

<script>
export default {
  props: {
    tags: []
  }
};
</script>

<style></style>
