---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/waltersf.png',
    name: 'Walter Santos',
    title: 'Arquiteto',
    links: [
      { icon: 'github', link: 'https://github.com/waltersf' },
      { icon: 'twitter', link: 'https://twitter.com/waltersantosf' }
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Nosso time
    </template>
    <template #lead>
      O desenvolvimento do Lemonade é feito pela nossa equipe...
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>