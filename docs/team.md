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
    avatar: 'https://www.github.com/wagnermeirajr.png',
    name: 'Wagner Meira Jr.',
    title: 'Coordenador',
    links: [
      { icon: 'github', link: 'https://github.com/wagnermeirajr' },
    ]
  },
  {
    avatar: 'https://www.github.com/adrianocesar.png',
    name: 'Adriano César',
    title: 'Coordenador',
    links: [
      { icon: 'github', link: 'https://github.com/adrianocesar' },
    ]
  },
  {
    avatar: 'https://www.github.com/zilton.png',
    name: 'Zilton Cordeiro Jr.',
    title: 'Coordenador',
    links: [
      { icon: 'github', link: 'https://github.com/zilton' },
    ]
  },
  {
    avatar: 'https://www.github.com/waltersf.png',
    name: 'Walter Santos',
    title: 'Arquiteto',
    links: [
      { icon: 'github', link: 'https://github.com/waltersf' },
      { icon: 'twitter', link: 'https://twitter.com/waltersantosf' }
    ]
  },
  {
    avatar: 'https://www.github.com/lucasmsp.png',
    name: 'Lucas Ponce',
    title: 'Desenvolvedor líder',
    links: [
      { icon: 'github', link: 'https://github.com/lucasmsp' },
    ]
  },
  {
    avatar: 'https://www.github.com/ eduardocesar.png',
    name: 'Eduardo Ribeiro',
    title: 'Cientista de dados',
    links: [
      { icon: 'github', link: 'https://github.com/ eduardocesar' },
    ]
  },
  {
    avatar: 'https://www.github.com/ericksunclair.png',
    name: 'Erick Sunclair',
    title: 'Desenvolvedor',
    links: [
      { icon: 'github', link: 'https://github.com/ericksunclair' },
    ]
  },
  {
    avatar: 'https://www.github.com/GuiSalles.png',
    name: 'Guilherme Salles',
    title: 'Desenvolvedor',
    links: [
      { icon: 'github', link: 'https://github.com/GuiSalles' },
    ]
  },
  {
    avatar: 'https://www.github.com/ealucas.png',
    name: 'Lucas',
    title: 'Desenvolvedor',
    links: [
      { icon: 'github', link: 'https://github.com/ealucas' },
    ]
  },
  {
    avatar: 'https://www.github.com/Luiz20hdsg.png',
    name: 'Luiz HDSG',
    title: 'Desenvolvedor',
    links: [
      { icon: 'github', link: 'https://github.com/Luiz20hdsg' },
    ]
  },
  {
    avatar: 'https://www.github.com/pedrorfs.png',
    name: 'Pedro Renato',
    title: 'Desenvolvedor',
    links: [
      { icon: 'github', link: 'https://github.com/pedrorfs' },
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

## Pessoas que contribuíram no passado