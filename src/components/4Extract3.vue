<template>
  <extract title="Where technology meets art" :images="images">
    <p>
      As well as Jobs’ role in revolutionising the personal computer, he also
      co-founded another monumental company, Pixar. In 1995, Pixar released to
      the world the first ever full-length feature film entirely on a desktop
      computer, <i>Toy Story</i>. Since 1995, they have released some of the
      most recognisable films to date, including <i>The Incredibles</i>,
      <i>Cars</i>, and <i>Finding Nemo</i>. This was all during the period of
      time where Jobs wasn’t working at Apple, and had founded a separate
      company, called NeXT. Jobs has always had a knack for bridging the gap
      between creativity and technology, describing Pixar as “…a place where
      both cultures were respected”
      <span class="itr">(Isaacson 2011, p220)</span>. Throughout the biography,
      Isaacson has spoken about Jobs’ desire of a “frictionless” experience,
      letting your ideas flow. We have seen this carry through into Apple’s
      newest ventures, especially recently in the Apple Watch. Isaacson has
      specifically chosen to include details like these as they help the reader
      understand what type of person Jobs is, and what he values.
    </p>
    <p>
      Throughout the biography, Isaacson has included anecdotes of opportunity
      to provide tension, without telling the story in a format of a narrative.
      For instance, towards the end of the extract with the computer animation
      contract with Disney. These anecdotes help paint a picture of Jobs and
      what he values and cares about in his company.
    </p>
  </extract>
</template>

<script>
import Extract from "@/components/Extract.vue";
export default {
  components: {
    Extract,
  },
  data: function () {
    return {
      images: [
        {
          path: require(`@/assets/extract-photos/3-1.jpg`),
          caption: "Page 218",
        },
        {
          path: require(`@/assets/extract-photos/3-2.jpg`),
          caption: "Page 219",
        },
        {
          path: require(`@/assets/extract-photos/3-3.jpg`),
          caption: "Page 220",
        },
        {
          path: require(`@/assets/extract-photos/3-4.jpg`),
          caption: "Page 221",
        },
      ],
    };
  },
};
</script>
