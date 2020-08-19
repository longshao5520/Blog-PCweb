<template>
  <b-col md="3">
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
        <!-- <el-tag type="info" effect="dark" class="mt-2">NodeJS</el-tag> -->
      </b-card-text>
    </b-card>
    <b-card no-body header="所有分类" class="mt-4 mb-4">
      <b-list-group flush>
        <b-list-group-item
          v-for="(cate, index) in cates"
          :key="'cate' + index"
          :to="`/cate/${cate.id}`"
        >
          编程技术
        </b-list-group-item>
        <!-- <b-list-group-item>编程技术</b-list-group-item> -->
      </b-list-group>
    </b-card>
  </b-col>
</template>

<script>
export default {
  props: {
    tags: [],
    cates: []
  }
};
</script>

<style></style>
