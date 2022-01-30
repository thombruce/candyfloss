<template lang='pug'>
div
  RockBandContent(v-if='!Array.isArray(page)' :article='page')
  article(v-else)
    header
      h1 {{ slug | titleize }}
    RockBandBlogList(:articles='page')
</template>

<script>
export default {
  async asyncData ({ $content, $taxonomies, params }) {
    const slug = params.page

    const page = await $content(slug)
      .where({ draft: { $ne: true } })
      .sortBy('date', 'desc')
      .fetch()
      .catch(async () => {
        const terms = await $taxonomies(slug, '', { deep: true }).all()
        return terms
      })

    return { slug, page }
  },
  created () {
    this.$candyfloss.init('https://mainnet.infura.io/v3/a185cad5258f4c89a0107035403eaa4e')
  }
}
</script>
